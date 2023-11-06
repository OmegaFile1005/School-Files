// Function to add a new product to the inventory
function addToInventory() {
    const idInput = document.getElementById('id').value;
    const priceInput = parseFloat(document.getElementById('price').value);
    const quantityInput = parseInt(document.getElementById('quantity').value, 10);

    if (!idInput || isNaN(priceInput) || isNaN(quantityInput)) {
        console.error('Invalid input');
        return;
    }

    const inventoryItem = {
        id: idInput,
        price: priceInput,
        quantity: quantityInput
    };

    let inventory = [];

    if (localStorage.getItem('inventory')) {
        // Retrieve the existing inventory from localStorage
        inventory = JSON.parse(localStorage.getItem('inventory'));
    }

    // Add the new item to the inventory array
    inventory.push(inventoryItem);

    // Store the updated inventory in localStorage
    localStorage.setItem('inventory', JSON.stringify(inventory));

    // Clear input fields
    document.getElementById('id').value = '';
    document.getElementById('price').value = '';
    document.getElementById('quantity').value = '';

    console.log('Item added to inventory');
}

function showInventory() {
    const inventoryList = document.getElementById('inventory');
    inventoryList.innerHTML = '';

    const inventory = JSON.parse(localStorage.getItem('inventory'));

    if (inventory.length === 0) {
        // Display a message when the inventory is empty
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Inventory is empty';
        inventoryList.appendChild(emptyMessage);
        return;
    }

    const table = document.createElement('table');
    table.innerHTML = `
      <tr>
        <th>ID</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
    `;

    inventory.forEach(function (product) {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${product.id}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.quantity}</td>
      `;

        table.appendChild(row);
    });

    inventoryList.appendChild(table);
}