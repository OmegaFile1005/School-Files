function sendOrder() {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
        .map(topping => capitalize(topping));

    const selectedDrinks = Array.from(document.querySelectorAll('#drinks input[type="number"]'))
        .map(drink => ({
            name: capitalize(drink.previousElementSibling.textContent),
            quantity: parseInt(drink.value) || 0,
            price: parseFloat(drink.getAttribute('data-price')) || 0
        }));

    const sizeCosts = {
        small: 6.00,
        medium: 8.00,
        large: 10.00,
        "extra-large": 12.00
    };
    let totalCost = sizeCosts[selectedSize];

    const toppingCosts = {
        pepperoni: 0.50,
        sausage: 0.50,
        "extra-cheese": 0.25,
        olives: 0.25,
        onions: 0.25
    };
    selectedToppings.forEach(topping => {
        totalCost += toppingCosts[topping];
    });

    const drinkCosts = {
        "soda-can": 1.50,
        "soda-20oz": 2.00,
        "soda-2L": 5.00,
        "orange-juice": 2.50,
        water: 1.00
    };
    selectedDrinks.forEach(drink => {
        totalCost += drinkCosts[drink.name];
    });

    const receipt = `
        Size: ${capitalize(selectedSize)}
        Toppings: 
        ${selectedToppings.map(topping => `- ${topping}`).join('\n')}
        Drinks: 
        ${selectedDrinks.map(drink => `- ${drink.name} x ${drink.quantity}`).join('\n')}
        Total Cost: $${totalCost.toFixed(2)}
    `;

    document.getElementById('receipt').value = receipt;
    localStorage.setItem('order', JSON.stringify({ size: selectedSize, toppings: selectedToppings, drinks: selectedDrinks, totalCost }));
    document.getElementById('total-cost').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

function capitalize(str) {
    return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
