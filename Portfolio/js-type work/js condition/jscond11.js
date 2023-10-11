function performOperation() {
    const dataInput = document.getElementById('data');
    const data = dataInput.value;

    if (!isNaN(data) || !isNaN(parseFloat(data))) {
      // If the input is an integer or floating-point number, increment it by one
      let result = parseFloat(data) + 1;
      document.getElementById('result').textContent = 'Result: ' + result;
    } else if (typeof data === 'string') {
      // If the input is a string, append "*" at the end
      let result = data + '*';
      document.getElementById('result').textContent = 'Result: ' + result;
    } else {
      document.getElementById('result').textContent = 'Invalid input';
    }
  }