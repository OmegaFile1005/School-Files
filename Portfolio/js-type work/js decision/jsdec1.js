function convertToRoman() {
    var number = parseInt(document.getElementById("numberInput").value);
    var outputElement = document.getElementById("output");

    var romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    if (number >= 1 && number <= 10) {
        outputElement.textContent = romanNumerals[number - 1];
    } else {
        outputElement.textContent = "Error: Please enter a number between 1 and 10.";
    }
}