function checkOut() {
    const buyerOption = document.querySelector('input[name="orderChange"]:checked').value;
    const specificCountry = document.getElementById('country').value;
    const beanCount = parseFloat(document.getElementById('beans').value) * 1;
    const riceCount = parseFloat(document.getElementById('rice').value) * 1;
    const meatCount = parseFloat(document.getElementById('meat').value) * 1;
    const vegetablesCount = parseFloat(document.getElementById('vegetables').value) * 1;
    const paymentWay = document.querySelector('input[name="payment"]:checked').value;


    const products = {
        beanCount: 3.00,
        riceCount: 2.50,
        meatCount: 5.00,
        vegetablesCount: 2.00
    };

    const total = (beanCount * products.beanCount + riceCount * products.riceCount + meatCount * products.meatCount + vegetablesCount * products.vegetablesCount).toFixed(2);

    const capitalizedProducts = {
        beanCount: capitalize('beans'),
        riceCount: capitalize('rice'),
        meatCount: capitalize('meat'),
        vegetablesCount: capitalize('vegetables')
    };

    const order = `Virtual Grocery Plus+
===================================================================
Channel:
${capitalize(buyerOption)}
===================================================================
Country:
${capitalize(specificCountry)}
===================================================================
Products:
${capitalizedProducts.beanCount}: $${products.beanCount.toFixed(2) * beanCount}
${capitalizedProducts.riceCount}: $${products.riceCount.toFixed(2) * riceCount}
${capitalizedProducts.meatCount}: $${products.meatCount.toFixed(2) * meatCount}
${capitalizedProducts.vegetablesCount}: $${products.vegetablesCount.toFixed(2) * vegetablesCount}
===================================================================
Payment Option:
${capitalize(paymentWay)}
===================================================================
Total: $${total}`;

    document.getElementById('total').value = order;
    localStorage.setItem('total', JSON.stringify(order));
    console.log(order);
}

function capitalize(str) {
    if (typeof str !== 'string') {
        return '';
    }
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}