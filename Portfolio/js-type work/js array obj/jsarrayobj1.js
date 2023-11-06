function addToInventory() {
    const idInput = document.getElementById('id').value;
    const priceInput = document.getElementById('price').value;
    const quantityInput = document.getElementById('quantity').value;

    const inventoryItem = {
        id: idInput,
        price: priceInput,
        quantity: quantityInput
    };

    inventory.push(inventoryItem);

    console.log(inventory);
}
