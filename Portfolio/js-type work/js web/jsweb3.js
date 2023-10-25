function sendInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const zipCode = document.getElementById('zipCode').value;
    const electricity = document.getElementById('electricity').value;
    const water = document.getElementById('water').value;
    const rentId = document.getElementById('rentId').value;
    const downPayment = document.getElementById('downPayment').value;
    const deposit = document.getElementById('deposit').value;
    const rentType = document.getElementById('rentType').value;
    const numberOfRooms = document.getElementById('numberOfRooms').value;
    const priceLocation = document.getElementById('priceLocation').value;
    const taxes = document.getElementById('taxes').value;

    const rentInfo = {
        firstName,
        lastName,
        phoneNumber,
        streetAddress,
        zipCode,
        electricity,
        water,
        rentId,
        downPayment,
        deposit,
        rentType,
        numberOfRooms,
        priceLocation,
        taxes
    };

    localStorage.setItem('rentInfo', JSON.stringify(rentInfo));
    console.log(rentInfo);

    window.location.href = 'jsweb3p2.html';
    console.log('Redirecting to jsweb3p2.html');

    console.log('Form values retrieved');

    console.log(rentInfo);

    console.log('Form values set');

    document.getElementById('firstName').innerHTML = firstName;
    document.getElementById('lastName').value = lastName;
    document.getElementById('phoneNumber').value = phoneNumber;
    document.getElementById('streetAddress').value = streetAddress;
    document.getElementById('zipCode').value = zipCode;
    document.getElementById('electricity').value = `${electricity.toFixed(2)}`;
    document.getElementById('water').value = `${water.toFixed(2)}`;
    document.getElementById('rentId').value = rentId;
    document.getElementById('downPayment').value = `${downPayment.toFixed(2)}`;
    document.getElementById('deposit').value = `${deposit.toFixed(2)}`;
    document.getElementById('rentType').value = rentType;
    document.getElementById('numberOfRooms').value = numberOfRooms;
    document.getElementById('priceLocation').value = priceLocation;
    document.getElementById('taxes').value = `${taxes.toFixed(2)}`;

    console.log('Form values set');
}

function goBack() {
    window.location.replace('jsweb3p1.html');
}