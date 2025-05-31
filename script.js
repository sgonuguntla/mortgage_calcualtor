
function calculate() {
    const principal = parseFloat(document.getElementById('principal').value) - parseFloat(document.getElementById('downpayment').value);
    const annualRate = parseFloat(document.getElementById('rate').value) / 100;
    const years = parseFloat(document.getElementById('years').value);
    const propertyTax = parseFloat(document.getElementById('propertyTax').value) || 0;
    const insurance = parseFloat(document.getElementById('insurance').value) || 0;
    const hoa = parseFloat(document.getElementById('hoa').value) || 0;

    const monthlyRate = annualRate / 12;
    const numPayments = years * 12;
    const monthlyPI = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    const totalMonthly = monthlyPI + propertyTax + insurance + hoa;

    document.getElementById('result').innerHTML = \`
        <p><strong>Monthly Principal & Interest:</strong> \$\${monthlyPI.toFixed(2)}</p>
        <p><strong>Total Monthly Payment:</strong> \$\${totalMonthly.toFixed(2)}</p>
    \`;
}
