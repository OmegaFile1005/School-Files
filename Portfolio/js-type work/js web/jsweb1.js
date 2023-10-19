function sendOrder() {
    const size = document.querySelector('input[name="size"]:checked');
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked')).map(topping => topping.value);

    const drinks = Array.from(document.querySelectorAll('.drink')).reduce((acc, drink) => {
        const name = drink.querySelector('.drink-name').textContent;
        const quantity = parseInt(drink.querySelector('.drink-quantity').value);
        const price = parseFloat(drink.querySelector('.drink-price').textContent);
        acc.push({ name, quantity, price });
        return acc;
    }, []);

    let totalCost = 0;

    if (size === 'small') {
        totalCost += 6.00;
    } else if (size === 'medium') {
        totalCost += 8.00;
    } else if (size === 'large') {
        totalCost += 10.00;
    } else if (size === 'extra-large') {
        totalCost += 12.00;
    }

    toppings.forEach(topping => {
        if (topping === 'pepperoni' || topping === 'sausage') {
            totalCost += 0.50;
        } else if (topping === 'extra-cheese' || topping === 'olives' || topping === 'onions') {
            totalCost += 0.25;
        }
    });

    const selectedDrink = document.querySelector('input[name="drink"]:checked');
    if (selectedDrink === 'soda-can') {
        totalCost += 1.50;
    } else if (selectedDrink === 'soda-20oz') {
        totalCost += 2.00;
    } else if (selectedDrink === 'soda-2L') {
        totalCost += 5.00;
    } else if (selectedDrink === 'orange-juice') {
        totalCost += 2.50;
    } else if (selectedDrink === 'water') {
        totalCost += 1.00;
    }

    localStorage.setItem('order', JSON.stringify({ size, toppings, drinks, totalCost }));
    document.getElementById('total-cost').textContent = totalCost.toFixed(2);

    console.log('Order sent:', { size, toppings, drinks, totalCost });
}