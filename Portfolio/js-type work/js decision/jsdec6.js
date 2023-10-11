function calculatePurchase() {
    var quantity = parseInt(document.getElementById("quantityInput").value);
    var outputElement = document.getElementById("output");

    var retailPrice = 99;
    var discount;

    if (quantity >= 10 && quantity <= 19) {
        discount = 0.2;
    } else if (quantity >= 20 && quantity <= 49) {
        discount = 0.3;
    } else if (quantity >= 50 && quantity <= 99) {
        discount = 0.4;
    } else if (quantity >= 100) {
        discount = 0.5;
    } else {
        discount = 0;
    }

    var totalAmount = retailPrice * quantity;
    var discountAmount = totalAmount * discount;
    var purchaseAmount = totalAmount - discountAmount;

    outputElement.textContent = "Discount amount: $" + discountAmount.toFixed(2) + "\nTotal purchase amount: $" + purchaseAmount.toFixed(2);
}