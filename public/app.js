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
            <span>${index + 1}. ${file.name} (${(file.size / 1024).toFixed(2)} KB)</span>
            <button class="file-remove-btn" onclick="removeFile(${index})">×</button>
        `;
        fileList.appendChild(item);
    });
    
    // Add clear all button
    if (files.length > 1) {
        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear All';
        clearBtn.onclick = clearAllFiles;
        clearBtn.style.cssText = 'background: #95a5a6; color: white; border: none; padding: 8px 16px; border-radius: 4px; margin-top: 10px; cursor: pointer;';
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
        showSuccess(`Successfully processed ${selectedFiles.length} file(s) with ${salesData.length} records.`);
        
        // Test European formatting
        console.log('European formatting test:', formatEuropean(1234.56, 2));
        
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
                
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read CSV file'));
        reader.readAsText(file);
    });
}

// Excel file reader
function readExcelFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const arrayBuffer = e.target.result;
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const data = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: '' });
                
                resolve(data);
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
        if (match) {
            return match[1].trim().replace(/[_-]/g, ' ');
        }
    }
    
    return filename.replace(/\.(csv|xlsx?)$/i, '');
}

// Process EASSC data format
function processEASSCData(rawData, filename) {
    console.log('Processing EASSC data for:', filename);
    if (!rawData || rawData.length < 2) return [];
    
    const companyName = extractCompanyName(filename);
    const processedData = [];
    
    // Find header row (usually contains months)
    let headerRowIndex = -1;
    for (let i = 0; i < Math.min(10, rawData.length); i++) {
        const row = rawData[i];
        if (row.some(cell => String(cell).match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i))) {
            headerRowIndex = i;
            break;
        }
    }
    
    if (headerRowIndex === -1) {
        console.warn('No header row found in', filename);
        return [];
    }
    
    const headers = rawData[headerRowIndex].map(h => String(h).trim().toLowerCase());
    console.log('Headers found:', headers);
    
    // Find month columns
    const monthColumns = [];
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    
    headers.forEach((header, index) => {
        monthNames.forEach((month, monthIndex) => {
            if (header.includes(month)) {
                // Extract year from header (e.g. "jan23", "feb24")
                const yearMatch = header.match(/(\d{2,4})/);
                const year = yearMatch ? (yearMatch[1].length === 2 ? 2000 + parseInt(yearMatch[1]) : parseInt(yearMatch[1])) : 2023;
                
                monthColumns.push({
                    index: index,
                    month: monthIndex + 1,
                    year: year,
                    header: header
                });
            }
        });
    });
    
    console.log('Month columns found:', monthColumns);
    
    // Process data rows
    for (let i = headerRowIndex + 1; i < rawData.length; i++) {
        const row = rawData[i];
        if (!row || row.length === 0) continue;
        
        const productName = String(row[0] || '').trim();
        if (!productName || productName === '') continue;
        
        // Determine data type from context
        const dataType = filename.toLowerCase().includes('stock') ? 'stocks' : 'sales';
        
        monthColumns.forEach(monthCol => {
            const value = parseFloat(String(row[monthCol.index] || '0').replace(/,/g, '')) || 0;
            
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
    
    console.log(`Processed ${processedData.length} records from ${filename}`);
    return processedData;
}

// Transform EASSC data to salesData format
function transformEASSCToSalesData(easscData) {
    const salesDataMap = new Map();
    
    easscData.forEach(record => {
        const key = `${record.company}-${record.product}-${record.year}-${record.month}-${record.dataType}`;
        
        if (!salesDataMap.has(key)) {
            salesDataMap.set(key, {
                company: record.company,
                product: record.product,
                year: record.year,
                month: record.month,
                sales: 0,
                stocks: 0
            });
        }
        
        const existing = salesDataMap.get(key);
        if (record.dataType === 'sales') {
            existing.sales = record.value;
        } else if (record.dataType === 'stocks') {
            existing.stocks = record.value;
        }
    });
    
    return Array.from(salesDataMap.values());
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
}

// Show data section
function showDataSection() {
    dataSection.style.display = 'block';
}

// Tab switching functionality
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;
        
        // Update active tab
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // Update active content
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === `${targetTab}TabContent`) {
                content.classList.add('active');
            }
        });
        
        // Load content based on tab
        switch (targetTab) {
            case 'table':
                displayDataTable();
                break;
            case 'evolution':
                displayEvolutionCharts();
                break;
            case 'categories':
                displayCategoryAnalysis();
                break;
            case 'trends':
                displayTrendAnalysis();
                break;
        }
    });
});

// Filter change handlers
categoryFilter.addEventListener('change', () => {
    updateDisplays();
});

dataTypeFilter.addEventListener('change', () => {
    updateDisplays();
});

companyFilter.addEventListener('change', () => {
    updateDisplays();
});

function updateDisplays() {
    const activeTab = document.querySelector('.tab.active').dataset.tab;
    
    switch (activeTab) {
        case 'table':
            displayDataTable();
            break;
        case 'evolution':
            displayEvolutionCharts();
            break;
        case 'categories':
            displayCategoryAnalysis();
            break;
        case 'trends':
            displayTrendAnalysis();
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
    
    console.log('displayDataTable called');
    console.log('Total salesData:', salesData.length);
    console.log('Filtered data:', filteredData.length);
    console.log('Selected data type:', selectedDataType);
    
    if (filteredData.length === 0) {
        console.log('No filtered data available');
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
        
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        groupedData.get(key).set(monthKey, value);
    });
    
    const sortedMonths = Array.from(allMonths).sort();
    const products = Array.from(groupedData.keys()).sort();
    
    // Create table
    let html = '<div class="analytics-section">';
    html += '<h4>Monthly Data Overview</h4>';
    html += '<div class="table-container">';
    html += '<table class="data-table">';
    
    // Headers
    html += '<thead><tr>';
    html += '<th>Product</th>';
    sortedMonths.forEach(month => {
        const [year, monthNum] = month.split('-');
        const monthName = new Date(year, parseInt(monthNum) - 1, 1).toLocaleDateString('en-US', { month: 'short' });
        html += `<th>${monthName} ${year}</th>`;
    });
    html += '<th>Average</th>';
    html += '</tr></thead>';
    
    // Data rows
    html += '<tbody>';
    products.forEach(product => {
        html += '<tr>';
        html += `<td>${product}</td>`;
        
        const productData = groupedData.get(product);
        let total = 0;
        let count = 0;
        
        sortedMonths.forEach(month => {
            const value = productData.get(month) || 0;
            if (value > 0) {
                total += value;
                count++;
            }
            html += `<td>${formatEuropean(value, 0)}</td>`;
        });
        
        const average = count > 0 ? total / count : 0;
        html += `<td><strong>${formatEuropean(average, 0)}</strong></td>`;
        html += '</tr>';
    });
    html += '</tbody></table>';
    html += '</div></div>';
    
    document.getElementById('dataTableContainer').innerHTML = html;
}

// Display evolution charts (5 chart types)
function displayEvolutionCharts() {
    createAnnualChart();
    createEvolutionChart();
    createMarketShareChart();
    createGrowthRateChart();
    createSeasonalChart();
}

// 1. Annual Chart (Bar Chart)
function createAnnualChart() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Group by product and year
    const annualData = new Map();
    const years = new Set();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!annualData.has(key)) {
            annualData.set(key, new Map());
        }
        
        years.add(d.year);
        const currentValue = annualData.get(key).get(d.year) || 0;
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        annualData.get(key).set(d.year, currentValue + value);
    });
    
    const sortedYears = Array.from(years).sort();
    const products = Array.from(annualData.keys()).sort();
    
    // Prepare chart data
    const datasets = sortedYears.map((year, index) => ({
        label: year.toString(),
        data: products.map(product => annualData.get(product).get(year) || 0),
        backgroundColor: `hsl(${index * 120}, 70%, 60%)`,
        borderColor: `hsl(${index * 120}, 70%, 50%)`,
        borderWidth: 1
    }));
    
    destroyChart('annualChart');
    const ctx = document.getElementById('annualChart').getContext('2d');
    charts.annualChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products,
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Annual ${selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)} Comparison`
                },
                legend: {
                    display: true
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value, 0);
                        }
                    }
                }
            }
        }
    });
}

// 2. Evolution Chart (Line Chart)
function createEvolutionChart() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Group by product and month
    const evolutionData = new Map();
    const allMonths = new Set();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!evolutionData.has(key)) {
            evolutionData.set(key, new Map());
        }
        
        const monthKey = `${d.year}-${String(d.month).padStart(2, '0')}`;
        allMonths.add(monthKey);
        
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        evolutionData.get(key).set(monthKey, value);
    });
    
    const sortedMonths = Array.from(allMonths).sort();
    const products = Array.from(evolutionData.keys()).sort().slice(0, 5); // Limit to 5 products for readability
    
    const datasets = products.map((product, index) => ({
        label: product,
        data: sortedMonths.map(month => evolutionData.get(product).get(month) || 0),
        borderColor: `hsl(${index * 60}, 70%, 50%)`,
        backgroundColor: `hsla(${index * 60}, 70%, 50%, 0.1)`,
        borderWidth: 2,
        fill: false
    }));
    
    destroyChart('evolutionChart');
    const ctx = document.getElementById('evolutionChart').getContext('2d');
    charts.evolutionChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sortedMonths.map(month => {
                const [year, monthNum] = month.split('-');
                const date = new Date(year, parseInt(monthNum) - 1, 1);
                return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
            }),
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `${selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)} Evolution Over Time`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value, 0);
                        }
                    }
                }
            }
        }
    });
}

// 3. Market Share Chart (Pie Chart)
function createMarketShareChart() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Calculate total by product
    const productTotals = new Map();
    
    filteredData.forEach(d => {
        const key = d.product;
        const currentTotal = productTotals.get(key) || 0;
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        productTotals.set(key, currentTotal + value);
    });
    
    const products = Array.from(productTotals.keys()).sort();
    const values = products.map(product => productTotals.get(product));
    
    destroyChart('marketShareChart');
    const ctx = document.getElementById('marketShareChart').getContext('2d');
    charts.marketShareChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: products,
            datasets: [{
                data: values,
                backgroundColor: products.map((_, index) => `hsl(${index * 360 / products.length}, 70%, 60%)`),
                borderColor: '#fff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Market Share by Product (${selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)})`
                },
                legend: {
                    position: 'right'
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${context.label}: ${formatEuropean(value, 0)} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

// 4. Growth Rate Chart (Horizontal Bar Chart)
function createGrowthRateChart() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Calculate yearly totals by product
    const yearlyTotals = new Map();
    const years = new Set();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!yearlyTotals.has(key)) {
            yearlyTotals.set(key, new Map());
        }
        
        years.add(d.year);
        const currentValue = yearlyTotals.get(key).get(d.year) || 0;
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        yearlyTotals.get(key).set(d.year, currentValue + value);
    });
    
    const sortedYears = Array.from(years).sort();
    if (sortedYears.length < 2) return;
    
    const products = Array.from(yearlyTotals.keys()).sort();
    const growthRates = products.map(product => {
        const productData = yearlyTotals.get(product);
        const firstYear = productData.get(sortedYears[0]) || 0;
        const lastYear = productData.get(sortedYears[sortedYears.length - 1]) || 0;
        
        if (firstYear === 0) return 0;
        return ((lastYear - firstYear) / firstYear) * 100;
    });
    
    destroyChart('growthRateChart');
    const ctx = document.getElementById('growthRateChart').getContext('2d');
    charts.growthRateChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: products,
            datasets: [{
                label: `Growth Rate (${sortedYears[0]}-${sortedYears[sortedYears.length - 1]})`,
                data: growthRates,
                backgroundColor: growthRates.map(rate => rate >= 0 ? '#27ae60' : '#e74c3c'),
                borderColor: growthRates.map(rate => rate >= 0 ? '#219a52' : '#c0392b'),
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Growth Rate Analysis (${sortedYears[0]}-${sortedYears[sortedYears.length - 1]})`
                }
            },
            scales: {
                x: {
                    ticks: {
                        callback: function(value) {
                            return value.toFixed(1) + '%';
                        }
                    }
                }
            }
        }
    });
}

// 5. Seasonal Chart (Bar Chart)
function createSeasonalChart() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Calculate monthly averages across all years
    const monthlyData = new Map();
    const monthCounts = new Map();
    
    for (let month = 1; month <= 12; month++) {
        monthlyData.set(month, 0);
        monthCounts.set(month, 0);
    }
    
    filteredData.forEach(d => {
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        if (value > 0) {
            monthlyData.set(d.month, monthlyData.get(d.month) + value);
            monthCounts.set(d.month, monthCounts.get(d.month) + 1);
        }
    });
    
    const monthlyAverages = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    for (let month = 1; month <= 12; month++) {
        const count = monthCounts.get(month);
        const average = count > 0 ? monthlyData.get(month) / count : 0;
        monthlyAverages.push(average);
    }
    
    destroyChart('seasonalChart');
    const ctx = document.getElementById('seasonalChart').getContext('2d');
    charts.seasonalChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: monthNames,
            datasets: [{
                label: `Average Monthly ${selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)}`,
                data: monthlyAverages,
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Seasonal Pattern Analysis (Monthly Averages)`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value, 0);
                        }
                    }
                }
            }
        }
    });
}

// Category analysis
function displayCategoryAnalysis() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    // Calculate stats by category
    const categoryStats = new Map();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!categoryStats.has(key)) {
            categoryStats.set(key, { total: 0, count: 0, values: [] });
        }
        
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        const stats = categoryStats.get(key);
        stats.total += value;
        stats.count += 1;
        stats.values.push(value);
    });
    
    // Create summary table
    let html = '<div class="stats-grid">';
    Array.from(categoryStats.entries()).sort((a, b) => b[1].total - a[1].total).forEach(([category, stats]) => {
        const average = stats.total / stats.count;
        const max = Math.max(...stats.values);
        const min = Math.min(...stats.values.filter(v => v > 0));
        
        html += `
            <div class="stat-card">
                <div class="stat-label">${category}</div>
                <div class="stat-value">${formatEuropean(stats.total, 0)}</div>
                <div class="stat-label">Total ${selectedDataType}</div>
                <div style="margin-top: 10px; font-size: 14px; color: #666;">
                    Avg: ${formatEuropean(average, 0)}<br>
                    Max: ${formatEuropean(max, 0)}<br>
                    Min: ${formatEuropean(min, 0)}
                </div>
            </div>
        `;
    });
    html += '</div>';
    
    document.getElementById('categorySummaryStats').innerHTML = html;
    
    // Create category chart
    const categories = Array.from(categoryStats.keys()).sort();
    const totals = categories.map(cat => categoryStats.get(cat).total);
    
    destroyChart('categoryChart');
    const ctx = document.getElementById('categoryChart').getContext('2d');
    charts.categoryChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: `Total ${selectedDataType.charAt(0).toUpperCase() + selectedDataType.slice(1)}`,
                data: totals,
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: {
                    display: true,
                    text: `Category Performance Summary`
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return formatEuropean(value, 0);
                        }
                    }
                }
            }
        }
    });
}

// Trend analysis
function displayTrendAnalysis() {
    const filteredData = getFilteredData();
    const selectedDataType = dataTypeFilter.value;
    
    if (filteredData.length === 0) {
        document.getElementById('trendAnalysis').innerHTML = '<p>No data available for trend analysis.</p>';
        return;
    }
    
    // Calculate trends by product
    const trendData = new Map();
    const allMonths = new Set();
    
    filteredData.forEach(d => {
        const key = d.product;
        if (!trendData.has(key)) {
            trendData.set(key, new Map());
        }
        
        const monthKey = `${d.year}-${String(d.month).padStart(2, '0')}`;
        allMonths.add(monthKey);
        
        const value = selectedDataType === 'sales' ? d.sales : d.stocks;
        trendData.get(key).set(monthKey, value);
    });
    
    const sortedMonths = Array.from(allMonths).sort();
    const products = Array.from(trendData.keys()).sort();
    
    let html = '<div class="analytics-section">';
    html += '<h4>Trend Analysis Summary</h4>';
    html += '<div class="table-container">';
    html += '<table class="data-table">';
    html += '<thead><tr>';
    html += '<th>Product</th>';
    html += '<th>First Period</th>';
    html += '<th>Last Period</th>';
    html += '<th>Total Change</th>';
    html += '<th>Trend</th>';
    html += '<th>Average Monthly</th>';
    html += '</tr></thead>';
    html += '<tbody>';
    
    products.forEach(product => {
        const productData = trendData.get(product);
        const values = sortedMonths.map(month => productData.get(month) || 0).filter(v => v > 0);
        
        if (values.length > 0) {
            const firstValue = values[0];
            const lastValue = values[values.length - 1];
            const totalChange = lastValue - firstValue;
            const changePercent = firstValue > 0 ? ((totalChange / firstValue) * 100) : 0;
            const average = values.reduce((a, b) => a + b, 0) / values.length;
            
            let trendClass = 'neutral';
            let trendText = 'Stable';
            if (changePercent > 5) {
                trendClass = 'positive';
                trendText = 'Growing';
            } else if (changePercent < -5) {
                trendClass = 'negative';
                trendText = 'Declining';
            }
            
            html += '<tr>';
            html += `<td>${product}</td>`;
            html += `<td>${formatEuropean(firstValue, 0)}</td>`;
            html += `<td>${formatEuropean(lastValue, 0)}</td>`;
            html += `<td class="${changePercent >= 0 ? 'positive' : 'negative'}">`;
            html += `${formatEuropean(totalChange, 0)} (${changePercent.toFixed(1)}%)`;
            html += `</td>`;
            html += `<td class="${trendClass}">${trendText}</td>`;
            html += `<td>${formatEuropean(average, 0)}</td>`;
            html += '</tr>';
        }
    });
    
    html += '</tbody></table>';
    html += '</div></div>';
    
    document.getElementById('trendAnalysis').innerHTML = html;
}

// Chart utility functions
function destroyChart(chartId) {
    if (charts[chartId]) {
        charts[chartId].destroy();
        delete charts[chartId];
    }
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

// Initialize button state
updateProcessButton();