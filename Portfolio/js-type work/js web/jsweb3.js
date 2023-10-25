function sendInfo() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const streetAddress = document.getElementById('streetAddress').value;
    const zipCode = document.getElementById('zipCode').value;
    const electricity = document.getElementById('electricity').value * 1;
    const water = document.getElementById('water').value * 1;
    const rentId = document.getElementById('rentId').value;
    const downPayment = document.getElementById('downPayment').value * 1;
    const deposit = document.getElementById('deposit').value * 1;
    const rentType = document.querySelector('input[name="rentType"]:checked').value;
    const numberOfRooms = document.getElementById('numberOfRooms').value;
    const location = document.getElementById('priceLocation').value;
    const taxes = document.getElementById('taxes').value * 1;
    if (location == 'Bali') {
        priceLocation = 2000;
    } else if (location == 'Cape Town') {
        priceLocation = 3500;
    } else if (location == 'New York City') {
        priceLocation = 500;
    }
    
    const price = rentType * priceLocation;

    let totalPrice = 0;
    if (rentType === 'flat') {
        totalPrice += numberOfRooms * price;
    } else (rentType === 'house')
    totalPrice += numberOfRooms * price * 1.2;

    totalPrice += taxes;
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
        location,
        totalPrice,
        taxes
    };

    localStorage.setItem('rentInfo', JSON.stringify(rentInfo));
    console.log(rentInfo);

    window.location.href = 'jsweb3p2.html';
    console.log('Redirecting to jsweb3p2.html');
}

function getInfo() {
    const rentInfo = JSON.parse(localStorage.getItem('rentInfo'));
    console.log(rentInfo);

    document.querySelector('#firstName').value = rentInfo.firstName;
    document.querySelector('#lastName').value = rentInfo.lastName;
    document.querySelector('#phoneNumber').value = rentInfo.phoneNumber;
    document.querySelector('#streetAddress').value = rentInfo.streetAddress;
    document.querySelector('#zipCode').value = rentInfo.zipCode;
    document.querySelector('#electricity').value = `${rentInfo.electricity.toFixed(2)}`;
    document.querySelector('#water').value = `${rentInfo.water.toFixed(2)}`;
    document.querySelector('#rentId').value = rentInfo.rentId;
    document.querySelector('#downPayment').value = `${rentInfo.downPayment.toFixed(2)}`;
    document.querySelector('#deposit').value = `${rentInfo.deposit.toFixed(2)}`;
    document.querySelector('#rentType').value = rentInfo.rentType;
    document.querySelector('#numberOfRooms').value = rentInfo.numberOfRooms;
    document.querySelector('#priceLocation').value = rentInfo.location;
    document.querySelector('#taxes').value = `${rentInfo.taxes.toFixed(2)}`;

}

function goBack() {
    window.location.replace('jsweb3p1.html');
}