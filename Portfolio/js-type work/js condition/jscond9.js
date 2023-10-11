function findLargestNumber() {
    const a = parseInt(document.getElementById('number1').value);
    const b = parseInt(document.getElementById('number2').value);
    const c = parseInt(document.getElementById('number3').value);

    let largest;

    if (a >= b) {
        if (a >= c) {
            largest = a;
        } else {
            largest = c;
        }
    } else {
        if (b >= c) {
            largest = b;
        } else {
            largest = c;
        }
    }
    document.getElementById('result').textContent = 'The largest number is: ' + largest;
}