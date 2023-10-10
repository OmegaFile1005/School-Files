var number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

function checkNumber() {
    var number = parseFloat(document.getElementById("number").value);
    if (number > 0) {
        alert("The number is positive.");
    } else if (number < 0) {
        alert("The number is negative.");
    } else {
        alert("The number is zero.");
    }
}

document.getElementById("output").addEventListener("click", checkNumber);