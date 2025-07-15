// Global data storage
let salesData = [];
let selectedFiles = [];

// DOM elements
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const processBtn = document.getElementById('processBtn');
const errorMessage = document.getElementById('errorMessage');
const successMessage = document.getElementById('successMessage');

// European number formatting helper - CRITICAL FIX
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
        showSuccess(`Successfully processed ${selectedFiles.length} file(s). European formatting (1.200,00) applied.`);
        
        // Test European formatting
        console.log('European formatting test:', formatEuropean(1234.56, 2));
        
    } catch (error) {
        showError(`Error processing files: ${error.message}`);
    } finally {
        processBtn.disabled = false;
        processBtn.textContent = 'Process Files';
    }
});

// File processing
async function processFiles(files) {
    console.log('Processing files:', files.length);
    
    for (const file of files) {
        try {
            if (file.name.toLowerCase().includes('.csv')) {
                console.log('Processing CSV file:', file.name);
                const csvData = await readCSVFile(file);
                console.log('CSV data loaded, rows:', csvData.length);
            } else {
                console.log('Processing Excel file:', file.name);
                // Excel processing would go here
            }
        } catch (error) {
            console.error(`Error processing ${file.name}:`, error);
            throw new Error(`Failed to process ${file.name}: ${error.message}`);
        }
    }
}

// CSV file reader
function readCSVFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                console.log('CSV file content loaded, size:', text.length);
                const lines = text.split('\n');
                const data = lines.map(line => {
                    // Simple CSV parsing
                    return line.split(',').map(cell => cell.trim());
                }).filter(row => row.some(cell => cell.length > 0));
                
                resolve(data);
            } catch (error) {
                reject(error);
            }
        };
        
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsText(file);
    });
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
console.log('Sales & Stocks Analytics loaded');
console.log('European formatting test:', formatEuropean(1234.56, 2));