// Función para calcular la distribución normal
document.getElementById('calcNormal').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('normalX').value);
    const mean = parseFloat(document.getElementById('normalMean').value);
    const stdDev = parseFloat(document.getElementById('normalStdDev').value);
    const isLessThan = document.querySelector('input[name="normalRadio"]:checked').value === 'less';

    // Calculamos la probabilidad
    const probability = isLessThan 
        ? jStat.normal.cdf(x, mean, stdDev) // P(X ≤ x)
        : 1 - jStat.normal.cdf(x, mean, stdDev); // P(X > x)

    // Mostrar el resultado en el formato correcto
    const result = isLessThan 
        ? `P(X ≤ ${x}) = ${probability.toFixed(4)}` 
        : `P(X > ${x}) = ${probability.toFixed(4)}`;

    document.getElementById('normalResultado').innerText = result;
});


// Función para calcular la distribución Beta
document.getElementById('calcBeta').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('betaX').value);
    const alpha = parseFloat(document.getElementById('betaAlpha').value);
    const beta = parseFloat(document.getElementById('betaBeta').value);
    const isLessThan = document.querySelector('input[name="betaRadio"]:checked').value === 'less';

    const probability = jStat.beta.cdf(x, alpha, beta).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;
    
    document.getElementById('betaResultado').innerText = result;
});

// Función para calcular la distribución Chi-cuadrado
document.getElementById('calcChiSquare').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('chisqX').value);
    const df = parseInt(document.getElementById('chisqDegFreedom').value);
    const isLessThan = document.querySelector('input[name="chisqRadio"]:checked').value === 'less';

    const probability = jStat.chisquare.cdf(x, df).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('chisqResultado').innerText = result;
});

// Función para calcular la distribución Exponencial
document.getElementById('calcExponential').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('exponentialX').value);
    const lambda = parseFloat(document.getElementById('exponentialRate').value);
    const isLessThan = document.querySelector('input[name="exponentialRadio"]:checked').value === 'less';

    const probability = (1 - Math.exp(-lambda * x)).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('exponentialResultado').innerText = result;
});

// Función para calcular la distribución F
document.getElementById('calcF').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('fX').value);
    const df1 = parseInt(document.getElementById('fDegFreedom1').value);
    const df2 = parseInt(document.getElementById('fDegFreedom2').value);
    const isLessThan = document.querySelector('input[name="fRadio"]:checked').value === 'less';

    const probability = jStat.f.cdf(x, df1, df2).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('fResultado').innerText = result;
});

// Función para calcular la distribución Gamma
document.getElementById('calcGamma').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('gammaX').value);
    const k = parseFloat(document.getElementById('gammaShape').value);
    const theta = parseFloat(document.getElementById('gammaScale').value);
    const isLessThan = document.querySelector('input[name="gammaRadio"]:checked').value === 'less';

    const probability = jStat.gamma.cdf(x, k, theta).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('gammaResultado').innerText = result;
});

// Función para calcular la distribución Log-normal
document.getElementById('calcLogNormal').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('logNormalX').value);
    const mean = parseFloat(document.getElementById('logNormalMean').value);
    const stdDev = parseFloat(document.getElementById('logNormalStdDev').value);
    const isLessThan = document.querySelector('input[name="logNormalRadio"]:checked').value === 'less';

    const probability = jStat.lognormal.cdf(x, mean, stdDev).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('logNormalResultado').innerText = result;
});

// Función para calcular la distribución Pareto
document.getElementById('calcPareto').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('paretoX').value);
    const alpha = parseFloat(document.getElementById('paretoAlpha').value);
    const xMin = parseFloat(document.getElementById('paretoXMin').value);
    const isLessThan = document.querySelector('input[name="paretoRadio"]:checked').value === 'less';

    const probability = (x >= xMin) ? (1 - Math.pow((xMin / x), alpha)).toFixed(4) : 0;
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('paretoResultado').innerText = result;
});

// Función para calcular la distribución t
document.getElementById('calcT').addEventListener('click', function () {
    const x = parseFloat(document.getElementById('tX').value);
    const df = parseInt(document.getElementById('tDegFreedom').value);
    const isLessThan = document.querySelector('input[name="tRadio"]:checked').value === 'less';

    const probability = jStat.studentt.cdf(x, df).toFixed(4);
    const result = isLessThan ? `P(X ≤ ${x}) = ${probability}` : `P(X > ${x}) = ${(1 - probability).toFixed(4)}`;

    document.getElementById('tResultado').innerText = result;
});

// Función para calcular la distribución Binomial
document.getElementById('calcBinomial').addEventListener('click', function () {
    const n = parseInt(document.getElementById('binomialN').value);
    const k = parseInt(document.getElementById('binomialK').value);
    const p = parseFloat(document.getElementById('binomialP').value);
    
    const probability = jStat.binomial.pdf(k, n, p).toFixed(4);
    
    document.getElementById('binomialResultado').innerText = `P(X = ${k}) = ${probability}`;
});
