var grossAmount = parseFloat(prompt("Enter the gross amount of the invoice:"));

var netAmount;
if (grossAmount < 20000) {
    netAmount = grossAmount;
} else {
    var discount = grossAmount * 0.15;
    netAmount = grossAmount - discount;
}

console.log("Net amount: ", netAmount);
