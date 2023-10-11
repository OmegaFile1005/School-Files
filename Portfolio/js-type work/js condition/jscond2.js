function detectIncreasingOrder() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    const c = parseFloat(document.getElementById('number3').value);

    if (a < b && b < c) {
      document.getElementById('result').textContent = 'Numbers are entered in increasing order.';
    } else {
      document.getElementById('result').textContent = 'Numbers are not entered in increasing order.';
    }
  }