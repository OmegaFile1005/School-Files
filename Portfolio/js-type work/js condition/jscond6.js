function exchangeValues() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);

    if (num1 > num2) {
        [document.getElementById('number1').value, document.getElementById('number2').value] = [num2, num1];
    }

    document.getElementById('result').textContent = `After exchanging values if necessary:
    First number: ${document.getElementById('number1').value}
    Second number: ${document.getElementById('number2').value}`;
}
