// Get the input field
// Create an empty array
const numbers = [];

function read() {
    // Read the input value and convert it to a number
    const input = Number(document.getElementById('input').value);

    // Add the input value to the array
    numbers.push(input);

    if (input === 0) {
        // Display an error message if the input value is 0
        alert('The input value cannot be 0.');
        numbers.pop();
        return;
    }

    if (numbers.length === 10) {
        // Display an error message if the array is full
        alert('The array is full.');
        return;
    }

    // Display the array's contents on the web page
    const outputElement = document.getElementById('output');
    const totalElement = document.getElementById('total');
    const averageElement = document.getElementById('average');
    const maxElement = document.getElementById('max');
    const minElement = document.getElementById('min');
    outputElement.innerHTML = `Elements entered: ${numbers.join(', ')}<br>`;
    totalElement.innerHTML = `Total: ${numbers.reduce((acc, curr) => acc + curr, 0)}`;
    averageElement.innerHTML = `Average: ${numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length}`;
    maxElement.innerHTML = `Max: ${Math.max(...numbers)}`;
    minElement.innerHTML = `Min: ${Math.min(...numbers)}`;

    // Clear the input field
    document.getElementById('input').value = '';

    console.log(numbers);
    localStorage.setItem('numbers', JSON.stringify(numbers));
}