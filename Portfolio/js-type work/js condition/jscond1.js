function checkNumber() {
    var number = parseFloat(prompt("Enter a number:"));
    var outputElement = document.getElementById("output");

    if (number > 0) {
        outputElement.textContent = "The number is positive.";
    } else if (number < 0) {
        outputElement.textContent = "The number is negative.";
    } else {
        outputElement.textContent = "The number is zero.";
    }
}