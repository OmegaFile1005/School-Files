function sendInfo() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const zipCode = document.getElementById("zipCode").value;

    const rentId = document.getElementById("rentId").value;
    const downPayment = parseFloat(document.getElementById("downPayment").value);
    const deposit = parseFloat(document.getElementById("deposit").value);
    const rentType = document.querySelector('input[name="rentType"]:checked').value;
    const numberOfRooms = parseInt(document.getElementById("numberOfRooms").value);
    const priceLocation = document.getElementById("priceLocation").value;

    const electricity = parseFloat(document.getElementById("electricity").value);
    const water = parseFloat(document.getElementById("water").value);
    const taxes = parseFloat(document.getElementById("taxes").value);

    // Calculate total rent price
    const rentPrice = downPayment + deposit;
    
    // Calculate total utility bills
    const utilityBills = electricity + water + taxes;
    
    // Calculate total price of the rent
    const totalPrice = rentPrice + utilityBills;
}