// Normal Distribution Calculation
document.getElementById('calcNormal').addEventListener('click', function() {
    const mean = parseFloat(document.getElementById('normalMean').value);
    const stdDev = parseFloat(document.getElementById('normalStdDev').value);

    if (!isNaN(mean) && !isNaN(stdDev)) {
        const result = jStat.normal.pdf(0, mean, stdDev);  // Example PDF at x=0
        document.getElementById('normalResult').innerText = `Result: ${result.toFixed(4)}`;
    } else {
        alert('Please enter valid values for mean and standard deviation');
    }
});

// Beta Distribution Calculation
document.getElementById('calcBeta').addEventListener('click', function() {
    const alpha = parseFloat(document.getElementById('betaAlpha').value);
    const beta = parseFloat(document.getElementById('betaBeta').value);

    if (!isNaN(alpha) && !isNaN(beta)) {
        const result = jStat.beta.pdf(0.5, alpha, beta);  // Example PDF at x=0.5
        document.getElementById('betaResult').innerText = `Result: ${result.toFixed(4)}`;
    } else {
        alert('Please enter valid values for alpha and beta');
    }
});

// Chi-square Distribution Calculation
document.getElementById('calcChiSquare').addEventListener('click', function() {
    const df = parseFloat(document.getElementById('chisqDegFreedom').value);

    if (!isNaN(df)) {
        const result = jStat.chisquare.pdf(1, df);  // Example PDF at x=1
        document.getElementById('chisqResult').innerText = `Result: ${result.toFixed(4)}`;
    } else {
        alert('Please enter a valid value for degrees of freedom');
    }
});

// You can add similar event listeners for Exponential, F, Gamma, Log-normal, Pareto, t, and Binomial distributions
