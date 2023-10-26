function checkOut() {
    const BuyerOption = document.querySelector('input[name="orderChange"]:checked').value;
    const specificCountry = document.getElementById('country').value;
    const beanCount = document.getElementById('beans').value;
    const riceCount = document.getElementById('rice').value;
    const meatCount = document.getElementById('meat').value;
    const vegetablesCount = document.getElementById('vegetables').value;
    const PaymentWay = document.querySelector('input[name="payment"]:checked').value;

    const products = {
        beanCount: 3.00,
        riceCount: 2.50,
        meatCount: 5.00,
        vegetablesCount: 2.00
    }

    const order = ` Virtual Grocery Plus+ 
    
    `

    localStorage.setItem('total', JSON.stringify(order));
    console.log(order);
    
}