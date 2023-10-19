function sendOrder() {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);

    const selectedDrinks = Array.from(document.querySelectorAll('#drinks input[type="number"]')).reduce((acc, drink) => {
        const name = drink.previousElementSibling.textContent;
        const quantity = parseInt(drink.value) || 0;
        const price = parseFloat(drink.getAttribute('data-price')) || 0;
        acc.push({ name, quantity, price });
        return acc;
    }, []);

    let totalCost = 0;

    switch (selectedSize) {
        case 'small':
            totalCost += 6.00;
            break;
        case 'medium':
            totalCost += 8.00;
            break;
        case 'large':
            totalCost += 10.00;
            break;
        case 'extra-large':
            totalCost += 12.00;
            break;
    }

    selectedToppings.forEach(topping => {
        switch (topping) {
            case 'pepperoni':
            case 'sausage':
                totalCost += 0.50;
                break;
            case 'extra-cheese':
            case 'olives':
            case 'onions':
                totalCost += 0.25;
                break;
        }
    });

    selectedDrinks.forEach(_drink => {
        const selectedDrink = document.querySelector('input[name="drink"]:checked').value;

        switch (selectedDrink) {
            case 'soda-can':
                totalCost += 1.50;
                break;
            case 'soda-20oz':
                totalCost += 2.00;
                break;
            case 'soda-2L':
                totalCost += 5.00;
                break;
            case 'orange-juice':
                totalCost += 2.50;
                break;
            case 'water':
                totalCost += 1.00;
                break;
        }
    });

    const receipt = `
    Size: ${selectedSize}
    Toppings: ${selectedToppings.join(', ')}
    Drinks: ${selectedDrinks.map(drink => `${drink.name} x ${drink.quantity}`).join(', ')}
    Total Cost: $${totalCost.toFixed(2)}
  `;

    document.getElementById('receipt').value = receipt;
    localStorage.setItem('order', JSON.stringify({ size: selectedSize, toppings: selectedToppings, drinks: selectedDrinks, totalCost }));
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);
}