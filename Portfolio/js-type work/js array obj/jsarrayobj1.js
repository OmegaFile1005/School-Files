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

function getInventory() {
    const inventoryList = document.getElementById('inventory');
    inventoryList.innerHTML = '';

    const inventory = JSON.parse(localStorage.getItem('inventory'));

    if (inventory.length === 0) {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'Inventory is empty';
        inventoryList.appendChild(emptyMessage);
        return;
    }

    const table = createTable();

    inventory.forEach(function (product) {
        const row = createRow(product);
        table.appendChild(row);
    });

    inventoryList.appendChild(table);
}

function createTable() {
    const table = document.createElement('table');
    table.classList.add('table', 'table-hover', 'table-dark');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;
    return table;
}

function createRow(product) {
    const row = document.createElement('tr');
    row.classList.add('text-dark');
    row.innerHTML = `
        <td>${product.id}</td>
        <td>$${product.price.toFixed(2)}</td>
        <td>${product.quantity}</td>
    `;
    return row;
}
