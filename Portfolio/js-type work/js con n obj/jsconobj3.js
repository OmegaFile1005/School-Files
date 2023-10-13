function checkGuess() {
    const input = document.getElementById('number');
    let value = parseInt(input.value);

    if (isNaN(value) || value < 1 || value > 10) {
        alert("Please enter a valid number between 1 and 10.");
        return;
    }

    const guess = value;
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } else if (guess >= 1 && guess <= 10) {
        alert("The correct number was: " + randomNumber);
    } else {
        alert("Invalid input. Please enter a number between 1 and 10.");
    }
}