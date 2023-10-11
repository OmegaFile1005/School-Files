function checkMagicDate() {
    var month = parseInt(document.getElementById("monthInput").value);
    var day = parseInt(document.getElementById("dayInput").value);
    var year = parseInt(document.getElementById("yearInput").value);
    var outputElement = document.getElementById("output");

    if (month * day === year) {
        outputElement.textContent = "The date is magic!";
    } else {
        outputElement.textContent = "The date is not magic.";
    }
}