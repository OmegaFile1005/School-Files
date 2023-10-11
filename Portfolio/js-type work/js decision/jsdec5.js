function calculatePoints() {
    var booksPurchased = parseInt(document.getElementById("booksInput").value);
    var outputElement = document.getElementById("output");

    var points;

    if (booksPurchased === 0) {
        points = 0;
    } else if (booksPurchased === 1) {
        points = 5;
    } else if (booksPurchased === 2) {
        points = 15;
    } else if (booksPurchased === 3) {
        points = 30;
    } else {
        points = 60;
    }

    outputElement.textContent = "Points awarded: " + points;
}