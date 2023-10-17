var lastName = document.getElementById("last");
var firstName = document.getElementById("first");
var carType = document.getElementById("car");
var pickupDate = document.getElementById("pickup");
var returnDate = document.getElementById("return");

var date1 = new Date(pickupDate);
var date2 = new Date(returnDate);

// Get the pickup date from the "pickup" input element
var pickupDateInput = document.getElementById("pickupDate");
pickupDateInput.addEventListener("change", function () {
    var pickupDate = new Date(pickupDateInput);

    // Add a few hours to the pickup date
    var returnDate = new Date(pickupDate.getTime() + (3 * 60 * 60 * 1000)); // Adding 3 hours

    // Format the return date as "YYYY-MM-DD"
    var year = returnDate.getFullYear();
    var month = String(returnDate.getMonth() + 1).padStart(2, '0');
    var day = String(returnDate.getDate()).padStart(2, '0');
    var formattedDate = year + '-' + month + '-' + day;

    // Set the minimum date attribute of the "return" input element
    document.getElementById("return").min = formattedDate;
});

function calculate() {

    var timeDifference = date2.getTime() - date1.getTime(); // Difference in milliseconds

    var discount = .85;
    var discountAmount = (returnDate - pickupDate) * discount;

    if (lastName == "" || firstName == "" || carType == "" || pickupDate == "" || returnDate == "") {
        alert("Please fill out all fields");
    } else {
        if (timeDifference < returnDate) {
            alert("Return date must be after pickup date");

            if (timeDifference >= 15 * 24 * 60 * 60 * 1000) {
                alert("You are eligible for a discount! Enjoy your trip!");
            } else {
                alert("Have a safe trip!");
            }

        } else {
            window.location.href = "jslocal2.html";
        }

        Math

    }
}

    // function showInfo() {
    //     var lastName = document.getElementById("last").value;
    //     var firstName = document.getElementById("first").value;
    //     var carType = document.getElementById("car").value;
    //     var pickupDate = document.getElementById("pickup").value;
    //     var returnDate = document.getElementById("return").value;


    //     discountAmount
    // }