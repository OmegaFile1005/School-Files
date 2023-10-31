function generateRandomNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    return number;
}

function checkNumber() {
  let number = parseInt(prompt("Enter a number:"));
  let outputElement = document.getElementById("result");

  if (number === generateRandomNumber()) {
    outputElement.textContent = "The number is correct.";
  } else {
    outputElement.textContent = "The number is incorrect. The correct number is " + generateRandomNumber();
  }
}
