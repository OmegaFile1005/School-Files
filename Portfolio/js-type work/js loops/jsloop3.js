// Susan is hired for a job, and her employer agrees to pay her every day.Her employer also agrees that Susan’s salary is 1 penny on the first day, 2 pennies on the second day, and 4 pennies on the third day, continuing to double each day.Create a program that allows the user to enter the number of days that Susan will work and calculates the total amount of pay she will receive over that period of time.

function calculatePay() {
    var baseNumberInput = document.getElementById("baseNumber");
    var growthRateInput = document.getElementById("growthRate");
    var dayDeadlineInput = document.getElementById("dayDeadline");

    for (var day = 1; day <= dayDeadlineInput; day++) {
        var payment = baseNumberInput * Math.pow(1 + growthRateInput, day);
        document.getElementById("output").innerHTML += day + "\t" + payment.toFixed(2) + "\n";
    }
}