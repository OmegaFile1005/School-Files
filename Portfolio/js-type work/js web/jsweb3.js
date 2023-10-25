function sendInfo() {
    const FirstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const zipCode = document.getElementById('zipCode').value;
    const electricity = document.getElementById('electricity').value;
    const water = document.getElementById('water').value;
    const rentId = document.getElementById('rentId').value;
    const downPayment = document.getElementById('downPayment').value;
    const deposit = document.getElementById('deposit').value;
    const rentType = document.getElementById('rentType').checked;
    const numberOfRooms = document.getElementById('numberOfRooms').value;
    const priceLocation = document.getElementById('priceLocation').value;
    const taxes = document.getElementById('taxes').value;

    const totalPrice = priceLocation.split('/');
    const price = totalPrice[0];
    const propertyType = totalPrice[1];

    if (propertyType === 'flat') {
        totalPrice += numberOfRooms * price;
    } else (propertyType === 'house') 
        totalPrice += numberOfRooms * price * 1.2;

    const rentInfo = {
        FirstName,
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

    document.querySelector('#firstName').innerHTML = FirstName;
    document.querySelector('#lastName').value = lastName;
    document.querySelector('#phoneNumber').value = phoneNumber;
    document.querySelector('#streetAddress').value = streetAddress;
    document.querySelector('#zipCode').value = zipCode;
    document.querySelector('#electricity').value = `${electricity.toFixed(2)}`;
    document.querySelector('#water').value = `${water.toFixed(2)}`;
    document.querySelector('#rentId').value = rentId;
    document.querySelector('#downPayment').value = `${downPayment.toFixed(2)}`;
    document.querySelector('#deposit').value = `${deposit.toFixed(2)}`;
    document.querySelector('#rentType').value = rentType;
    document.querySelector('#numberOfRooms').value = numberOfRooms;
    document.querySelector('#priceLocation').value = priceLocation;
    document.querySelector('#taxes').value = `${taxes.toFixed(2)}`;

    console.log('Form values set');
}

function goBack() {
    window.location.replace('jsweb3p1.html');
}