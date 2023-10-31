function calculateTotalPrice(flavor, containerSize, ingredients, numScoops) {
    const flavorPrice = {
        vanilla: 2.00,
        chocolate: 2.50,
        strawberry: 3.00,
        mint: 3.50,
        caramel: 4.00
    };

    const containerSizePrice = {
        small: 1.00,
        medium: 1.50,
        large: 2.00,
        extraLarge: 2.50,
        jumbo: 3.00
    };

    const ingredientPrice = {
        sprinkles: 0.50,
        chocolateChips: 0.75,
        sprinklesAndChocolateChips: 1.00,
        sugar: 0.25
    };

    const totalPrice = (flavorPrice[flavor] + containerSizePrice[containerSize] + ingredientPrice[ingredients]) * numScoops;
    return totalPrice.toFixed(2);
}

function placeOrder() {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const flavor = document.getElementById('flavor').value;
    const containerSize = document.getElementById('size').value;
    const ingredients = document.getElementById('ingredients').value;
    const numScoops = parseInt(document.getElementById('scoopCount').value);

    const totalPrice = calculateTotalPrice(flavor, containerSize, ingredients, numScoops);

    console.log("Order Details:");
    console.log("Date:", date);
    console.log("Time:", time);
    console.log("Flavor:", flavor);
    console.log("Container Size:", containerSize);
    console.log("Ingredients:", ingredients);
    console.log("Number of Scoops:", numScoops);
    console.log("Total Price:", totalPrice);

    localStorage.setItem('orderDetails', JSON.stringify({
        date: date,
        time: time,
        flavor: flavor,
        containerSize: containerSize,
        ingredients: ingredients,
        numScoops: numScoops,
        totalPrice: totalPrice
    }))

    alert("Your order has been placed. Thank you for your order!");
}

const resetForm = () => document.getElementById('form').reset();