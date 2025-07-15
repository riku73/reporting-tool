// Global data storage
let salesData = [];
let easscData = [];
let selectedFiles = [];
let charts = {};

// DOM element references
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const processBtn = document.getElementById('processBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');
const dataSection = document.getElementById('dataSection');
const categoryFilter = document.getElementById('categoryFilter');
const dataTypeFilter = document.getElementById('dataTypeFilter');
const companyFilter = document.getElementById('companyFilter');

// Tab elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

// European number formatting helper - CRITICAL FEATURE
function formatEuropean(number, decimals = 0) {
    if (typeof number !== 'number' || isNaN(number)) return '-';
    return number.toLocaleString('de-DE', { 
        minimumFractionDigits: decimals, 
        maximumFractionDigits: decimals 
    });
}

// File upload handling
fileInput.addEventListener('change', (e) => {
    console.log('Files selected:', e.target.files.length);
    const newFiles = Array.from(e.target.files);
    selectedFiles = [...selectedFiles, ...newFiles];
    displayFileList(selectedFiles);
    updateProcessButton();
    e.target.value = '';
});

function displayFileList(files) {
    fileList.innerHTML = '';
    
    if (files.length === 0) {
        fileList.innerHTML = '<p style="color: #999;">No files selected</p>';
        return;
    }
    
    files.forEach((file, index) => {
        const item = document.createElement('div');
        item.className = 'file-item';
        item.innerHTML = `
            <div class="file-item-content">
                <div class="file-item-info">
                    <span>${index + 1}. ${file.name}</span>
                    <span>${(file.size / 1024).toFixed(2)} KB</span>
                </div>
                <button class="file-remove-btn" onclick="removeFile(${index})" title="Remove file">×</button>
            </div>
        `;
        fileList.appendChild(item);
    });
    
    // Add clear all button
    if (files.length > 1) {
        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear All';
        clearBtn.className = 'clear-all-btn';
        clearBtn.onclick = clearAllFiles;
        fileList.appendChild(clearBtn);
    }
}

function removeFile(index) {
    selectedFiles.splice(index, 1);
    displayFileList(selectedFiles);
    updateProcessButton();
}

function clearAllFiles() {
    selectedFiles = [];
    displayFileList(selectedFiles);
    updateProcessButton();
}

function updateProcessButton() {
    if (selectedFiles.length > 0) {
        processBtn.disabled = false;
        processBtn.style.opacity = '1';
    } else {
        processBtn.disabled = true;
        processBtn.style.opacity = '0.5';
    }
}

// Process button click handler
processBtn.addEventListener('click', async () => {
    if (selectedFiles.length === 0) return;
    
    processBtn.disabled = true;
    processBtn.textContent = 'Processing...';
    hideMessages();
    
    try {
        await processFiles(selectedFiles);
        populateFilters();
        showDataSection();
        displayDataTable();
        updateAllCharts();
        showSuccess(`Successfully processed ${selectedFiles.length} file(s) with ${salesData.length} records.`);
        
    } catch (error) {
        console.error('Processing error:', error);
        showError(`Error processing files: ${error.message}`);
    } finally {
        processBtn.disabled = false;
        processBtn.textContent = 'Process Files';
    }
});

// File processing
async function processFiles(files) {
    console.log('Processing files:', files.length);
    salesData = [];
    easscData = [];
    
    for (const file of files) {
        try {
            if (file.name.toLowerCase().endsWith('.csv')) {
                console.log('Processing CSV file:', file.name);
                const csvData = await readCSVFile(file);
                const processedData = processEASSCData(csvData, file.name);
                easscData.push(...processedData);
            } else if (file.name.toLowerCase().includes('.xls')) {
                console.log('Processing Excel file:', file.name);
                const excelData = await readExcelFile(file);
                const processedData = processEASSCData(excelData, file.name);
                easscData.push(...processedData);
            }
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            throw new Error(`Failed to process ${file.name}: ${error.message}`);
        }
    }
    
    // Process the EASSC data into salesData format
    salesData = transformEASSCToSalesData(easscData);
    console.log('Final salesData:', salesData.length, 'records');
    console.log('Sample salesData:', salesData.slice(0, 3));
}

// CSV file reader
function readCSVFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                console.log('CSV file content loaded, size:', text.length);
                const lines = text.split('\n').filter(line => line.trim());
                const data = lines.map(line => {
                    // Improved CSV parsing to handle quoted values
                    const result = [];
                    let current = '';
                    let inQuotes = false;
                    
                    for (let i = 0; i < line.length; i++) {
                        const char = line[i];
                        if (char === '"') {
                            inQuotes = !inQuotes;
                        } else if (char === ',' && !inQuotes) {
                            result.push(current.trim());
                            current = '';
                        } else {
                            current += char;
                        }
                    }
                    result.push(current.trim());
                    return result;
                });
                
                console.log('CSV data parsed, rows:', data.length);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
}

// Excel file reader
function readExcelFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                
                console.log('Excel data parsed, rows:', jsonData.length);
                resolve(jsonData);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read Excel file'));
        reader.readAsArrayBuffer(file);
    });
}

// Extract company name from filename
function extractCompanyName(filename) {
    // Extract company name from patterns like "SALES_EASSC_2023-2025_template_COMPANY_A.csv"
    const match = filename.match(/COMPANY[_\s]+([A-Za-z0-9]+)/i);
    if (match) {
        return `Company ${match[1].toUpperCase()}`;
    }
    
    // Fallback patterns
    const patterns = [
        /([A-Za-z\s]+)\.csv$/i,
        /([A-Za-z\s]+)\.xlsx?$/i,
        /template[_\s]+([A-Za-z0-9\s]+)/i
    ];
    
    for (const pattern of patterns) {
        const match = filename.match(pattern);
        if (match && match[1]) {
            const name = match[1].trim();
            if (name.length > 1 && name.length < 20) {
                return name;
            }
        }
    }
    
    return filename.replace(/\.(csv|xlsx?)$/i, '');
}

// Process EASSC data format
function processEASSCData(rawData, filename) {
    console.log('Processing EASSC data for:', filename);
    console.log('Raw data rows:', rawData.length);
    
    if (!rawData || rawData.length < 2) {
        console.log('Not enough data in file');
        return [];
    }
    
    const companyName = extractCompanyName(filename);
    console.log('Extracted company name:', companyName);
    const processedData = [];
    
    // Process EASSC data by finding year sections
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const dataType = filename.toLowerCase().includes('stock') ? 'stocks' : 'sales';
    
    // Find all year sections in the data
    for (let i = 0; i < rawData.length; i++) {
        const row = rawData[i];
        if (!row || row.length === 0) continue;
        
        // Check if this row contains a year (like "2023", "2024", "2025")
        const yearMatch = row.find(cell => String(cell).match(/^(20\d{2})$/));
        if (yearMatch) {
            const year = parseInt(yearMatch);
            console.log('Found year section:', year, 'at row', i);
            
            // Find the header row for this year section (next row with months)
            let headerRowIndex = -1;
            for (let j = i + 1; j < Math.min(i + 5, rawData.length); j++) {
                const headerRow = rawData[j];
                if (headerRow && headerRow.some(cell => String(cell).match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i))) {
                    headerRowIndex = j;
                    break;
                }
            }
            
            if (headerRowIndex === -1) continue;
            
            const headers = rawData[headerRowIndex].map(h => String(h).trim().toLowerCase());
            console.log('Headers for year', year, ':', headers);
            
            // Find month columns for this year
            const monthColumns = [];
            headers.forEach((header, index) => {
                monthNames.forEach((month, monthIndex) => {
                    if (header === month || header.includes(month)) {
                        monthColumns.push({
                            index: index,
                            month: monthIndex + 1,
                            year: year,
                            header: header
                        });
                    }
                });
            });
            
            console.log('Month columns for year', year, ':', monthColumns);
            
            // Process data rows for this year section
            for (let k = headerRowIndex + 1; k < rawData.length; k++) {
                const dataRow = rawData[k];
                if (!dataRow || dataRow.length === 0) continue;
                
                const productName = String(dataRow[1] || '').trim();
                if (!productName || productName === '' || productName.toLowerCase().includes('total')) {
                    continue;
                }
                
                // Stop if we hit another year section
                if (dataRow.some(cell => String(cell).match(/^(20\d{2})$/))) {
                    break;
                }
                
                // Process month values for this product
                monthColumns.forEach(monthCol => {
                    const value = parseFloat(String(dataRow[monthCol.index] || '0').replace(/,/g, '')) || 0;
                    
                    if (value > 0) {
                        processedData.push({
                            company: companyName,
                            product: productName,
                            year: monthCol.year,
                            month: monthCol.month,
                            value: value,
                            dataType: dataType,
                            source: filename
                        });
                    }
                });
            }
        }
    }
    
    console.log(`Processed ${processedData.length} records from ${filename}`);
    return processedData;
}

// Transform EASSC data to salesData format
function transformEASSCToSalesData(easscData) {
    console.log('transformEASSCToSalesData called with:', easscData.length, 'records');
    
    // Create separate records for each dataType to maintain filtering capability
    const transformedData = [];
    
    easscData.forEach(record => {
        transformedData.push({
            company: record.company,
            product: record.product,
            year: record.year,
            month: record.month,
            value: record.value,
            dataType: record.dataType,
            sales: record.dataType === 'sales' ? record.value : 0,
            stocks: record.dataType === 'stocks' ? record.value : 0,
            source: record.source
        });
    });
    
    console.log('Transformed data:', transformedData.length, 'records');
    return transformedData;
}

// Populate filter dropdowns
function populateFilters() {
    // Get unique values
    const companies = [...new Set(salesData.map(d => d.company))].sort();
    const products = [...new Set(salesData.map(d => d.product))].sort();
    
    // Populate company filter
    companyFilter.innerHTML = '<option value="all">All Companies</option>';
    companies.forEach(company => {
        const option = document.createElement('option');
        option.value = company;
        option.textContent = company;
        companyFilter.appendChild(option);
    });
    
    // Populate category filter (products)
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product;
        option.textContent = product;
        categoryFilter.appendChild(option);
    });
    
    // Add event listeners for filters
    [categoryFilter, dataTypeFilter, companyFilter].forEach(filter => {
        filter.addEventListener('change', () => {
            displayDataTable();
            updateAllCharts();
        });
    });
}

// Show data section
function showDataSection() {
    dataSection.style.display = 'block';
    
    // Initialize tab functionality
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            switchTab(tabName);
        });
    });
}

// Switch between tabs
function switchTab(tabName) {
    // Remove active class from all tabs and contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));
    
    // Add active class to selected tab and content
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
    document.getElementById(`${tabName}TabContent`).classList.add('active');
    
    // Update content based on tab
    switch(tabName) {
        case 'table':
            displayDataTable();
            break;
        case 'evolution':
            updateEvolutionCharts();
            break;
        case 'categories':
            updateCategoryChart();
            break;
        case 'trends':
            updateTrendAnalysis();
            break;
    }
}

// Get filtered data
function getFilteredData() {
    const selectedCompany = companyFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedDataType = dataTypeFilter.value;
    
    return salesData.filter(d => {
        if (selectedCompany !== 'all' && d.company !== selectedCompany) return false;
        if (selectedCategory !== 'all' && d.product !== selectedCategory) return false;
        if (selectedDataType !== 'all' && d.dataType !== selectedDataType) return false;
        return true;
    });
}

// Display data table with monthly averages
function displayDataTable() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    if (filteredData.length === 0) {
        document.getElementById('dataTableContainer').innerHTML = '<p>No data available for the selected filters.</p>';
        return;
    }
    
    // Group data by product and year/month
    const groupedData = new Map();
    const allMonths = new Set();
    const allYears = new Set();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!groupedData.has(key)) {
            groupedData.set(key, new Map());
        }
        
        const monthKey = `${d.year}-${String(d.month).padStart(2, '0')}`;
        allMonths.add(monthKey);
        allYears.add(d.year);
        
        groupedData.get(key).set(monthKey, d.value);
    });
    
    // Sort months chronologically
    const sortedMonths = Array.from(allMonths).sort();
    const sortedYears = Array.from(allYears).sort();
    
    // Create table
    let html = '<div class="table-container">';
    html += '<table class="data-table">';
    
    // Header
    html += '<thead><tr>';
    html += '<th>Product</th>';
    sortedMonths.forEach(month => {
        const [year, monthNum] = month.split('-');
        const monthName = new Date(year, parseInt(monthNum) - 1).toLocaleString('default', { month: 'short' });
        html += `<th>${monthName} ${year}</th>`;
    });
    html += '<th>Total</th>';
    html += '<th>Average</th>';
    html += '</tr></thead>';
    
    // Body
    html += '<tbody>';
    groupedData.forEach((monthData, product) => {
        html += '<tr>';
        html += `<td><strong>${product}</strong></td>`;
        
        let total = 0;
        let count = 0;
        
        sortedMonths.forEach(month => {
            const value = monthData.get(month) || 0;
            if (value > 0) {
                total += value;
                count++;
            }
            html += `<td>${value > 0 ? formatEuropean(value) : '-'}</td>`;
        });
        
        const average = count > 0 ? total / count : 0;
        html += `<td><strong>${formatEuropean(total)}</strong></td>`;
        html += `<td>${average > 0 ? formatEuropean(average) : '-'}</td>`;
        html += '</tr>';
    });
    
    // Add totals row
    html += '<tr style="border-top: 2px solid #ddd; background-color: #f8f9fa;">';
    html += '<td><strong>TOTAL</strong></td>';
    
    const periodTotals = [];
    sortedMonths.forEach(month => {
        let monthTotal = 0;
        groupedData.forEach(monthData => {
            monthTotal += monthData.get(month) || 0;
        });
        periodTotals.push(monthTotal);
    });
    
    periodTotals.forEach(total => {
        html += `<td><strong>${total > 0 ? formatEuropean(total) : '-'}</strong></td>`;
    });
    
    const grandTotal = periodTotals.reduce((sum, val) => sum + val, 0);
    const grandAverage = periodTotals.length > 0 ? grandTotal / periodTotals.filter(v => v > 0).length : 0;
    
    html += `<td><strong>${formatEuropean(grandTotal)}</strong></td>`;
    html += `<td><strong>${grandAverage > 0 ? formatEuropean(grandAverage) : '-'}</strong></td>`;
    html += '</tr>';
    
    html += '</tbody></table>';
    html += '</div>';
    
    // Add summary stats
    html = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-label">Total ${selectedDataType}</div>
                <div class="stat-value">${formatEuropean(grandTotal)}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Records</div>
                <div class="stat-value">${filteredData.length}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Products</div>
                <div class="stat-value">${groupedData.size}</div>
            </div>
            <div class="stat-card">
                <div class="stat-label">Period Average</div>
                <div class="stat-value">${formatEuropean(grandAverage)}</div>
            </div>
        </div>
    ` + html;
    
    document.getElementById('dataTableContainer').innerHTML = html;
}

// Update all charts
function updateAllCharts() {
    updateEvolutionCharts();
    updateCategoryChart();
    updateTrendAnalysis();
}

// Update evolution charts
function updateEvolutionCharts() {
    updateAnnualChart();
    updateMonthlyChart();
    updateMarketShareChart();
    updateGrowthRateChart();
    updateSeasonalChart();
}

// Update annual chart
function updateAnnualChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.annual) {
        charts.annual.destroy();
    }
    
    // Group data by product and year
    const productYearData = {};
    filteredData.forEach(d => {
        if (!productYearData[d.product]) {
            productYearData[d.product] = {};
        }
        if (!productYearData[d.product][d.year]) {
            productYearData[d.product][d.year] = 0;
        }
        productYearData[d.product][d.year] += d.value;
    });
    
    const years = [...new Set(filteredData.map(d => d.year))].sort();
    const products = Object.keys(productYearData);
    
    const datasets = products.map((product, index) => ({
        label: product,
        data: years.map(year => productYearData[product][year] || 0),
        backgroundColor: `hsla(${(index * 60) % 360}, 70%, 60%, 0.8)`,
        borderColor: `hsla(${(index * 60) % 360}, 70%, 50%, 1)`,
        borderWidth: 1
    }));
    
    const ctx = document.getElementById('annualChart').getContext('2d');
    charts.annual = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: years,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatEuropean(context.parsed.y);
                        }
                    }
                }
            }
        }
    });
}

// Update monthly evolution chart
function updateMonthlyChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.evolution) {
        charts.evolution.destroy();
    }
    
    // Group data by product and month/year
    const productMonthData = {};
    const allDates = new Set();
    
    filteredData.forEach(d => {
        if (!productMonthData[d.product]) {
            productMonthData[d.product] = {};
        }
        
        const dateKey = `${d.year}-${String(d.month).padStart(2, '0')}`;
        allDates.add(dateKey);
        productMonthData[d.product][dateKey] = d.value;
    });
    
    const sortedDates = Array.from(allDates).sort();
    const products = Object.keys(productMonthData);
    
    const datasets = products.map((product, index) => ({
        label: product,
        data: sortedDates.map(date => productMonthData[product][date] || 0),
        borderColor: `hsla(${(index * 60) % 360}, 70%, 50%, 1)`,
        backgroundColor: `hsla(${(index * 60) % 360}, 70%, 60%, 0.1)`,
        tension: 0.4
    }));
    
    const ctx = document.getElementById('evolutionChart').getContext('2d');
    charts.evolution = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sortedDates.map(date => {
                const [year, month] = date.split('-');
                return new Date(year, parseInt(month) - 1).toLocaleString('default', { month: 'short' }) + ' ' + year;
            }),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatEuropean(context.parsed.y);
                        }
                    }
                }
            }
        }
    });
}

// Update market share chart
function updateMarketShareChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.marketShare) {
        charts.marketShare.destroy();
    }
    
    // Calculate total by product
    const productTotals = {};
    filteredData.forEach(d => {
        if (!productTotals[d.product]) {
            productTotals[d.product] = 0;
        }
        productTotals[d.product] += d.value;
    });
    
    const products = Object.keys(productTotals);
    const values = Object.values(productTotals);
    const colors = products.map((_, index) => `hsla(${(index * 60) % 360}, 70%, 60%, 0.8)`);
    
    const ctx = document.getElementById('marketShareChart').getContext('2d');
    charts.marketShare = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: products,
            datasets: [{
                data: values,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const total = values.reduce((sum, val) => sum + val, 0);
                            const percentage = ((context.parsed / total) * 100).toFixed(1);
                            return context.label + ': ' + formatEuropean(context.parsed) + ' (' + percentage + '%)';
                        }
                    }
                }
            }
        }
    });
}

// Update growth rate chart
function updateGrowthRateChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.growthRate) {
        charts.growthRate.destroy();
    }
    
    // Calculate year-over-year growth
    const productYearData = {};
    filteredData.forEach(d => {
        if (!productYearData[d.product]) {
            productYearData[d.product] = {};
        }
        if (!productYearData[d.product][d.year]) {
            productYearData[d.product][d.year] = 0;
        }
        productYearData[d.product][d.year] += d.value;
    });
    
    const products = Object.keys(productYearData);
    const years = [...new Set(filteredData.map(d => d.year))].sort();
    
    const growthData = [];
    products.forEach(product => {
        if (years.length >= 2) {
            const oldYear = years[0];
            const newYear = years[years.length - 1];
            const oldValue = productYearData[product][oldYear] || 0;
            const newValue = productYearData[product][newYear] || 0;
            
            if (oldValue > 0) {
                const growth = ((newValue - oldValue) / oldValue) * 100;
                growthData.push({
                    product: product,
                    growth: growth
                });
            }
        }
    });
    
    growthData.sort((a, b) => b.growth - a.growth);
    
    const ctx = document.getElementById('growthRateChart').getContext('2d');
    charts.growthRate = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: growthData.map(d => d.product),
            datasets: [{
                label: 'Growth Rate (%)',
                data: growthData.map(d => d.growth),
                backgroundColor: growthData.map(d => d.growth >= 0 ? 'hsla(120, 70%, 60%, 0.8)' : 'hsla(0, 70%, 60%, 0.8)'),
                borderColor: growthData.map(d => d.growth >= 0 ? 'hsla(120, 70%, 50%, 1)' : 'hsla(0, 70%, 50%, 1)'),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Growth: ' + context.parsed.x.toFixed(1) + '%';
                        }
                    }
                }
            }
        }
    });
}

// Update seasonal chart
function updateSeasonalChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.seasonal) {
        charts.seasonal.destroy();
    }
    
    // Calculate averages by month across all years
    const monthlyData = {};
    for (let i = 1; i <= 12; i++) {
        monthlyData[i] = { total: 0, count: 0 };
    }
    
    filteredData.forEach(d => {
        monthlyData[d.month].total += d.value;
        monthlyData[d.month].count++;
    });
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const averages = months.map((_, index) => {
        const monthNum = index + 1;
        return monthlyData[monthNum].count > 0 ? monthlyData[monthNum].total / monthlyData[monthNum].count : 0;
    });
    
    const ctx = document.getElementById('seasonalChart').getContext('2d');
    charts.seasonal = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: months,
            datasets: [{
                label: 'Monthly Average',
                data: averages,
                backgroundColor: 'hsla(200, 70%, 60%, 0.8)',
                borderColor: 'hsla(200, 70%, 50%, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return 'Average: ' + formatEuropean(context.parsed.y);
                        }
                    }
                }
            }
        }
    });
}

// Update category chart
function updateCategoryChart() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) return;
    
    // Destroy existing chart
    if (charts.category) {
        charts.category.destroy();
    }
    
    // Calculate totals by category
    const categoryTotals = {};
    filteredData.forEach(d => {
        if (!categoryTotals[d.product]) {
            categoryTotals[d.product] = 0;
        }
        categoryTotals[d.product] += d.value;
    });
    
    const sortedData = Object.entries(categoryTotals)
        .sort(([,a], [,b]) => b - a);
    
    const labels = sortedData.map(([category]) => category);
    const values = sortedData.map(([, total]) => total);
    const colors = labels.map((_, index) => `hsla(${(index * 60) % 360}, 70%, 60%, 0.8)`);
    
    const ctx = document.getElementById('categoryChart').getContext('2d');
    charts.category = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Total Sales',
                data: values,
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.8', '1')),
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value);
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': ' + formatEuropean(context.parsed.y);
                        }
                    }
                }
            }
        }
    });
}

// Update trend analysis
function updateTrendAnalysis() {
    const filteredData = getFilteredData();
    if (filteredData.length === 0) {
        document.getElementById('trendAnalysis').innerHTML = '<p>No data available for trend analysis.</p>';
        return;
    }
    
    // Calculate comprehensive trend analysis
    const trendData = calculateTrendAnalysis(filteredData);
    
    let html = '<div class="analytics-section">';
    html += '<h4>Trend Analysis Summary</h4>';
    html += '<div class="table-container">';
    html += '<table class="data-table">';
    html += '<thead><tr>';
    html += '<th>Product</th>';
    html += '<th>2023 Total</th>';
    html += '<th>2024 Total</th>';
    html += '<th>2025 Total</th>';
    html += '<th>2023-2024 Growth</th>';
    html += '<th>2024-2025 Growth</th>';
    html += '<th>Trend Status</th>';
    html += '</tr></thead>';
    html += '<tbody>';
    
    Object.entries(trendData).forEach(([product, data]) => {
        const growth2324 = data.total2024 > 0 ? ((data.total2024 - data.total2023) / data.total2023 * 100) : 0;
        const growth2425 = data.total2025 > 0 ? ((data.total2025 - data.total2024) / data.total2024 * 100) : 0;
        
        let status = 'Stable';
        if (growth2324 > 10 && growth2425 > 10) status = 'Strong Growth';
        else if (growth2324 > 5 || growth2425 > 5) status = 'Growing';
        else if (growth2324 < -10 || growth2425 < -10) status = 'Declining';
        else if (growth2324 < 0 && growth2425 < 0) status = 'Weak';
        
        html += '<tr>';
        html += `<td><strong>${product}</strong></td>`;
        html += `<td>${formatEuropean(data.total2023)}</td>`;
        html += `<td>${formatEuropean(data.total2024)}</td>`;
        html += `<td>${formatEuropean(data.total2025)}</td>`;
        html += `<td class="${growth2324 >= 0 ? 'positive' : 'negative'}">${growth2324.toFixed(1)}%</td>`;
        html += `<td class="${growth2425 >= 0 ? 'positive' : 'negative'}">${growth2425.toFixed(1)}%</td>`;
        html += `<td>${status}</td>`;
        html += '</tr>';
    });
    
    html += '</tbody></table>';
    html += '</div>';
    html += '</div>';
    
    document.getElementById('trendAnalysis').innerHTML = html;
}

// Calculate trend analysis
function calculateTrendAnalysis(data) {
    const trendData = {};
    
    data.forEach(d => {
        if (!trendData[d.product]) {
            trendData[d.product] = {
                total2023: 0,
                total2024: 0,
                total2025: 0
            };
        }
        
        if (d.year === 2023) trendData[d.product].total2023 += d.value;
        else if (d.year === 2024) trendData[d.product].total2024 += d.value;
        else if (d.year === 2025) trendData[d.product].total2025 += d.value;
    });
    
    return trendData;
}

// Message helpers
function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    errorMessage.style.display = 'none';
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = 'block';
    successMessage.style.display = 'none';
}

function hideMessages() {
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
}

// Initialize
console.log('Sales & Stocks Analytics loaded - Complete version');
console.log('European formatting test:', formatEuropean(1234.56, 2));