// // Get the pickup date from the "pickup" input element
// var pickupDateInput = document.getElementById("pickup");
// pickupDateInput.addEventListener("change", function () {
//     var pickupDate = new Date(pickupDateInput);

//     // Add a few hours to the pickup date
//     var returnDate = new Date(pickupDate.getTime() + (60 * 60 * 1000)); // Adding 3 hours

//     // Format the return date as "YYYY-MM-DD"
//     var year = returnDate.getFullYear();
//     var month = String(returnDate.getMonth() + 1).padStart(2, '0');
//     var day = String(returnDate.getDate()).padStart(2, '0');
//     var formattedDate = year + '-' + month + '-' + day;

//     // Set the minimum date attribute of the "return" input element
//     document.getElementById("return").min = formattedDate;
// });

function calculate() {
    const userObj = {
        lastName: document.getElementById("last").value,
        Name: document.getElementById("first").value,
        carType: document.getElementById("car").value,
        pickupDate: new Date(document.getElementById("pickup").value),
        returnDate: new Date(document.getElementById("return").value)
    };

    const timeDifference = userObj.returnDate.getTime() - userObj.pickupDate.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    if (
        userObj.lastName == "" ||
        userObj.firstName == "" ||
        userObj.carType == "" ||
        userObj.pickupDate == "" ||
        userObj.returnDate == ""
    ) {
        alert("Please fill out all fields");
    } else if (userObj.pickupDate > userObj.returnDate) {
        alert("Return date must be after pickup date");
    } else if (timeDifference > 15 * 24 * 60 * 60 * 1000) {
        alert("You are eligible for a discount! Enjoy your trip!");
    } else {
        alert("Have a safe trip!");
    }

    const discount = daysDifference > 15 ? 0.9 : 1;
    const pricePerDay = parseFloat(userObj.carType); // Assuming carType is the price per day

    const payment = pricePerDay * daysDifference * discount;
    userObj.payment = payment;

    localStorage.setItem("car rent info", JSON.stringify(userObj));
}

function showInfo() {
    const userObj = JSON.parse(localStorage.getItem("car rent info"));
    let infoDiv = document.getElementById("info");
    infoDiv.innerHTML = "";
    for (const key in userObj) {
        const p = document.createElement("p");
        if (key == "pickupDate" || key == "returnDate")
            p.textContent = `${key}: ${userObj[key].substring(0, 10)}`;
        else
            p.textContent = `${key}: ${userObj[key]}`;
        if (key == "payment")
            p.textContent = `${key}: $${userObj[key].toFixed(2)}`;
            infoDiv.appendChild(p);
    }
}