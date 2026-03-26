// Fallback loader for the Financial Data Plugin
(function() {
    'use strict';
    
    // Function to load our main plugin
    function loadPlugin() {
        // Create a script element
        const script = document.createElement('script');
        script.src = 'FinancialDataPlugin.js';
        
        // Handle successful loading
        script.onload = function() {
            console.log('Financial Data Plugin loaded successfully');
            showNotification('Financial data plugin loaded successfully!');
            
            // Initialize any UI elements that depend on the plugin
            if (window.initFinancialCharts) {
                window.initFinancialCharts();
            }
        };
        
        // Handle loading errors
        script.onerror = function() {
            console.error('Failed to load Financial Data Plugin');
            showNotification('Failed to load plugin, please refresh', true);
        };
        
        // Add the script to the document
        document.head.appendChild(script);
    }
    
    // Function to show notification
    function showNotification(message, isError = false) {
        const notification = document.getElementById('notification');
        notification.textContent = message;
        notification.style.backgroundColor = isError ? '#f44336' : '#4CAF50';
        notification.style.display = 'block';
        
        // Hide after 5 seconds
        setTimeout(function() {
            notification.style.display = 'none';
        }, 5000);
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadPlugin);
    } else {
        // DOM is already loaded
        loadPlugin();
    }
    
    // Event listeners for buttons
    document.addEventListener('DOMContentLoaded', function() {
        const refreshBtn = document.getElementById('refreshData');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', function() {
                showNotification('Refreshing financial data...');
                // Load plugin again with fresh data
                loadPlugin();
            });
        }
        
        const updateBtn = document.getElementById('updatePortfolio');
        if (updateBtn) {
            updateBtn.addEventListener('click', function() {
                showNotification('Updating portfolio analysis...');
                // Load plugin again with fresh data
                loadPlugin();
            });
        }
    });
})();
