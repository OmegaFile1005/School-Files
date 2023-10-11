function determineEvenOrOdd() {
    const number = parseInt(document.getElementById('number').value);

    if (number % 2 === 0) {
        document.getElementById('result').textContent = 'The number is even.';
    } else {
        document.getElementById('result').textContent = 'The number is odd.';
    }
}