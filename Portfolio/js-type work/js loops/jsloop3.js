function calculatePay() {
    var dayLimit = parseInt(document.getElementById("days").value);
    var startingPay = 1;
    var finalPay = 0;

    for (var i = 1; i <= dayLimit; i++) {
        finalPay += startingPay;
        startingPay *= 2;
    }

    var result = document.getElementById("result");
    result.innerHTML = `Total Pay: ${finalPay} pennies`;
}