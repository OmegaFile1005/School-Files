function findSign() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const c = parseFloat(document.getElementById('number3').value);

    let negativeCount = 0;

    if (a < 0) {
      negativeCount++;
    }
    if (b < 0) {
      negativeCount++;
    }
    if (c < 0) {
      negativeCount++;
    }

    let sign;

    if (negativeCount % 2 === 0) {
      sign = '+';
    } else {
      sign = '-';
    }

    document.getElementById('result').textContent = 'The sign of the product is: ' + sign;
  }