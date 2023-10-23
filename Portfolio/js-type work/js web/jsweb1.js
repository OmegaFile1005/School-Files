function sendOrder() {
    const selectedSize = document.querySelector('input[name="size"]:checked').value;
    const selectedToppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);
    const selectedDrinks = Array.from(document.querySelectorAll('#drinks input[type="number"]')).filter(drink => parseInt(drink.value) > 0).map(drink => {
        return {
            name: capitalize(drink.previousElementSibling.textContent),
            quantity: parseInt(drink.value) || 0,
            price: parseFloat(drink.value) || 0
        };
    });

    const sizeCosts = {
        small: 6.00,
        medium: 8.00,
        large: 10.00,
        extraLarge: 12.00
    };
    let totalCost = sizeCosts[selectedSize];

    const toppingCosts = {
        pepperoni: 0.50,
        sausage: 0.50,
        extraCheese: 0.25,
        olives: 0.25,
        onions: 0.25
    };

    selectedToppings.forEach(topping => {
        totalCost += toppingCosts[topping];
    });

    const drinkCosts = {
        sodaCan: 1.50,
        soda20oz: 2.00,
        soda2L: 5.00,
        orangeJuice: 2.50,
        water: 1.00
    };

    selectedDrinks.forEach(drink => {
        totalCost += drinkCosts[drink.name];
    });

    const receipt = `
        Size: ${capitalize(selectedSize)} - $${sizeCosts[selectedSize]}
        Toppings: 
        ${selectedToppings.map(topping => `${topping}`).join('\n')}
        Drinks: 
        ${selectedDrinks.map(drink => `${drink.name} x ${drink.quantity} (Cost: $${drink.price.toFixed(2)})`).join('\n')}
        Total Cost: $${totalCost.toFixed(2)}
    `;

    document.getElementById('receipt').value = receipt;
    localStorage.setItem('order', JSON.stringify({ size: selectedSize, toppings: selectedToppings, drinks: selectedDrinks, totalCost }));
    document.getElementById('receipt').textContent = `Total Cost: $${totalCost.toFixed(2)}`;
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