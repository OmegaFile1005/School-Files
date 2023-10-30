// Susan is hired for a job, and her employer agrees to pay her every day.Her employer also agrees that Susan’s salary is 1 penny on the first day, 2 pennies on the second day, and 4 pennies on the third day, continuing to double each day.Create a program that allows the user to enter the number of days that Susan will work and calculates the total amount of pay she will receive over that period of time.
// the value must start as 1 then multiply by 2 and add the previous value.
function calculatePay() {
    let dayLimit = document.getElementById("days").value * 1;
    let startingPay = 1;

    for (let i = 0; i < dayLimit; i++) {
        finalPay = startingPay * (2 ** dayLimit);
        console.log(finalPay);
        document.getElementById("result").value = finalPay;
    }
}