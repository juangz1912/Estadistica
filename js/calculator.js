// Distribución Normal
document.getElementById('calcNormal').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('normalX').value);
    const media = parseFloat(document.getElementById('normalMean').value);
    const desviacion = parseFloat(document.getElementById('normalStdDev').value);
    if (!isNaN(x) && !isNaN(media) && !isNaN(desviacion)) {
        const resultado = jStat.normal.pdf(x, media, desviacion);
        document.getElementById('normalResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x, media y desviación estándar.');
    }
});

// Distribución Beta
document.getElementById('calcBeta').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('betaX').value);
    const alpha = parseFloat(document.getElementById('betaAlpha').value);
    const beta = parseFloat(document.getElementById('betaBeta').value);
    if (!isNaN(x) && !isNaN(alpha) && !isNaN(beta) && x >= 0 && x <= 1) {
        const resultado = jStat.beta.pdf(x, alpha, beta);
        document.getElementById('betaResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (0-1), alpha y beta.');
    }
});

// Distribución Chi-cuadrado
document.getElementById('calcChiSquare').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('chisqX').value);
    const gradosLibertad = parseFloat(document.getElementById('chisqDegFreedom').value);
    if (!isNaN(x) && !isNaN(gradosLibertad) && x >= 0) {
        const resultado = jStat.chisquare.pdf(x, gradosLibertad);
        document.getElementById('chisqResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (≥0) y grados de libertad.');
    }
});

// Distribución Exponencial
document.getElementById('calcExponential').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('exponentialX').value);
    const tasa = parseFloat(document.getElementById('exponentialRate').value);
    if (!isNaN(x) && !isNaN(tasa) && x >= 0) {
        const resultado = jStat.exponential.pdf(x, tasa);
        document.getElementById('exponentialResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (≥0) y tasa.');
    }
});

// Distribución F
document.getElementById('calcF').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('fX').value);
    const gradosLibertad1 = parseFloat(document.getElementById('fDegFreedom1').value);
    const gradosLibertad2 = parseFloat(document.getElementById('fDegFreedom2').value);
    if (!isNaN(x) && !isNaN(gradosLibertad1) && !isNaN(gradosLibertad2) && x >= 0) {
        const resultado = jStat.f.pdf(x, gradosLibertad1, gradosLibertad2);
        document.getElementById('fResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (≥0) y grados de libertad.');
    }
});

// Distribución Gamma
document.getElementById('calcGamma').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('gammaX').value);
    const forma = parseFloat(document.getElementById('gammaShape').value);
    const escala = parseFloat(document.getElementById('gammaScale').value);
    if (!isNaN(x) && !isNaN(forma) && !isNaN(escala) && x >= 0) {
        const resultado = jStat.gamma.pdf(x, forma, escala);
        document.getElementById('gammaResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (≥0), forma y escala.');
    }
});

// Distribución Log-normal
document.getElementById('calcLogNormal').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('logNormalX').value);
    const media = parseFloat(document.getElementById('logNormalMean').value);
    const desviacion = parseFloat(document.getElementById('logNormalStdDev').value);
    if (!isNaN(x) && !isNaN(media) && !isNaN(desviacion) && x > 0) {
        const resultado = jStat.lognormal.pdf(x, media, desviacion);
        document.getElementById('logNormalResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x (>0), media y desviación estándar.');
    }
});

// Distribución Pareto
document.getElementById('calcPareto').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('paretoX').value);
    const alpha = parseFloat(document.getElementById('paretoAlpha').value);
    const xMin = parseFloat(document.getElementById('paretoXMin').value);
    if (!isNaN(x) && !isNaN(alpha) && !isNaN(xMin) && x >= xMin) {
        const resultado = jStat.pareto.pdf(x, alpha, xMin);
        document.getElementById('paretoResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x, alpha y X mínimo.');
    }
});

// Distribución t de Student
document.getElementById('calcT').addEventListener('click', function() {
    const x = parseFloat(document.getElementById('tX').value);
    const gradosLibertad = parseFloat(document.getElementById('tDegFreedom').value);
    if (!isNaN(x) && !isNaN(gradosLibertad)) {
        const resultado = jStat.studentt.pdf(x, gradosLibertad);
        document.getElementById('tResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para x y grados de libertad.');
    }
});

// Distribución Binomial
document.getElementById('calcBinomial').addEventListener('click', function() {
    const n = parseInt(document.getElementById('binomialN').value);
    const k = parseInt(document.getElementById('binomialK').value);
    const p = parseFloat(document.getElementById('binomialP').value);
    if (!isNaN(n) && !isNaN(k) && !isNaN(p)) {
        const resultado = jStat.binomial.pdf(k, n, p);
        document.getElementById('binomialResultado').innerText = `Resultado: ${resultado.toFixed(4)}`;
    } else {
        alert('Por favor, ingresa valores válidos para n, k y p.');
    }
});
