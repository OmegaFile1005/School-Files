function sendInfo() {
    const getInputValue = (id) => document.querySelector(id).value;
    const getCheckedValue = (name) => document.querySelector(`input[name="${name}"]:checked`).value;
    const parseFloatValue = (value) => parseFloat(value);
    const parseIntValue = (value) => parseInt(value);

    const customer = {
        firstName: getInputValue('#firstName'),
        lastName: getInputValue('#lastName'),
        phoneNumber: getInputValue('#phoneNumber'),
        address: getInputValue('#streetAddress'),
        zipCode: getInputValue('#zipCode')
    };

    const rentDetails = {
        rentId: getInputValue('#rentId'),
        downPayment: parseFloatValue(getInputValue('#downPayment')),
        deposit: parseFloatValue(getInputValue('#deposit')),
        propertyType: getCheckedValue('propertyType'),
        numberOfRooms: parseIntValue(getInputValue('#numberOfRooms')),
        price: parseFloatValue(getInputValue('#price')),
        location: getInputValue('#location')
    };

    let totalPrice = rentDetails.downPayment + rentDetails.deposit;
    if (rentDetails.propertyType === 'flat') {
        totalPrice += rentDetails.numberOfRooms * rentDetails.price;
    } else if (rentDetails.propertyType === 'house') {
        totalPrice += rentDetails.numberOfRooms * rentDetails.price * 1.2;
    }

    const utilityBills = {
        electricityBill: parseFloatValue(getInputValue('#electricityBill')),
        waterBill: parseFloatValue(getInputValue('#waterBill')),
        taxes: parseFloatValue(getInputValue('#taxes'))
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

    const rentInfo = JSON.parse(localStorage.getItem('rentInfo'));

    // Update the DOM with the retrieved data
    document.getElementById('firstName').value = rentInfo.customer.firstName;
    document.getElementById('lastName').value = rentInfo.customer.lastName;
    document.getElementById('phoneNumber').value = rentInfo.customer.phoneNumber;
    document.getElementById('street-address').value = rentInfo.customer.address;
    document.getElementById('zipCode').value = rentInfo.customer.zipCode;
    document.getElementById('rentId').value = rentInfo.rentDetails.rentId;
    document.getElementById('downPayment').value = rentInfo.rentDetails.downPayment;
    document.getElementById('deposit').value = rentInfo.rentDetails.deposit;
    document.querySelector(`input[name="propertyType"][value="${rentInfo.rentDetails.propertyType}"]`).checked = true;
    document.getElementById('numberOfRooms').value = rentInfo.rentDetails.numberOfRooms;
    document.getElementById('price').value = rentInfo.rentDetails.price;
    document.getElementById('location').value = rentInfo.rentDetails.location;
    document.getElementById('electricityBill').value = rentInfo.utilityBills.electricityBill;
    document.getElementById('waterBill').value = rentInfo.utilityBills.waterBill;
    document.getElementById('taxes').value = rentInfo.utilityBills.taxes;
}