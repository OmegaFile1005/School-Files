// Generate a list of five charge account numbers
const chargeAccountNumbers = [];
for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 9000000) + 1000000; // Generate a random 7-digit number
    chargeAccountNumbers.push(randomNumber);
}

// Display the generated charge account numbers
const randomElement = document.getElementById("random");
randomElement.textContent = "Account Numbers Available: " + chargeAccountNumbers.join(" | ");
console.log(chargeAccountNumbers);

function findAccount() {
    // Get the user input
    const userInput = parseInt(document.getElementById("account").value);

    // Check if the entered number is in the array
    let isValid = false;
    for (let i = 0; i < chargeAccountNumbers.length; i++) {
        if (userInput === chargeAccountNumbers[i]) {
            isValid = true;
            break;
        }
    }

    // Display the result
    const resultElement = document.getElementById("result");
    if (isValid) {
        resultElement.textContent = "Account found.";
    } else {
        resultElement.textContent = "Account not found.";
    }
}