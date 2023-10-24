function sendInfo() {
    const customer = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('firstName').value,
        phoneNumber: document.getElementById('phoneNumber').value,
        address: document.getElementById('streetAddress').value,
        zipCode: document.getElementById('zipCode').value
    };

    const rentDetails = {
        rentId: document.getElementById('rentId').value,
        downPayment: parseFloat(document.getElementById('downPayment').value).toFixed(2),
        deposit: parseFloat(document.getElementById('deposit').value).toFixed(2),
        propertyType: document.querySelector('propertyType'),
        numberOfRooms: document.getElementById('numberOfRooms').value,
        location: {
            location1: 2000,
            location2: 3500,
            location3: 500
        }
    };

    let totalPrice = rentDetails.downPayment + rentDetails.deposit;
    if (rentDetails.propertyType === 'flat') {
        totalPrice += rentDetails.numberOfRooms * rentDetails.price;
    } else if (rentDetails.propertyType === 'house') {
        totalPrice += rentDetails.numberOfRooms * rentDetails.price * 1.2;
    }

const utilityBills = {
    electricityBill: parseFloat(document.getElementById('electricity').value).toFixed(2),
    waterBill: parseFloat(document.getElementById('water').value).toFixed(2),
    taxes: parseFloat(document.getElementById('taxes').value).toFixed(2)
};

    const totalUtilityBills = utilityBills.electricityBill + utilityBills.waterBill + utilityBills.taxes;

    const grandTotal = totalPrice + totalUtilityBills;

    const rentInfo = {
        customer,
        rentDetails,
        utilityBills,
        totalPrice,
        totalUtilityBills,
        grandTotal
    };

    console.log('rentInfo:', rentInfo);
    localStorage.setItem('rentInfo', JSON.stringify(rentInfo));

    console.log('Redirecting to jsweb3p2.html...');
    window.location.href = 'jsweb3p2.html';
}

function goBack() {
    window.location.replace('jsweb3p1.html');
}