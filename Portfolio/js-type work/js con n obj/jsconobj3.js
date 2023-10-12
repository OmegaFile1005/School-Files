function checkGuess() {
    const guess = parseInt(document.getElementById('number').value);
    const randomNumber = Math.floor(Math.random() * 10) + 1;

    if (isNaN(guess) || guess < 1 || guess > 10) {
        alert("Please enter a valid number between 1 and 10.");
    } else if (guess === randomNumber) {
        alert("Congratulations! You guessed the correct number!");
    } else {
        alert("Sorry, your guess is incorrect. The correct number was: " + randomNumber);
    }
}

function correctInput() {
    const input = document.getElementById('number');
    let value = parseInt(input.value);

    if (isNaN(value) || value < 1) {
        value = 1;
    } else if (value > 10) {
        value = 10;
    }

    input.value = value;
}
