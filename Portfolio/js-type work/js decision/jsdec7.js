function checkTotal() {
    var pennies = parseInt(document.getElementById("penniesInput").value);
    var nickels = parseInt(document.getElementById("nickelsInput").value);
    var dimes = parseInt(document.getElementById("dimesInput").value);
    var quarters = parseInt(document.getElementById("quartersInput").value);
    var outputElement = document.getElementById("output");

    var totalAmount = pennies * 0.01 + nickels * 0.05 + dimes * 0.1 + quarters * 0.25;

    if (totalAmount === 1) {
        outputElement.textContent = "Congratulations! You won the game!";
    } else if (totalAmount > 1) {
        outputElement.textContent = "Amount entered is more than one dollar.";
    } else {
        outputElement.textContent = "Amount entered is less than one dollar.";
    }
}