// Array to store the vegetable names
var vegetables = [];

// Function to add a new vegetable to the list
function addVegetable() {
    var inputElement = document.getElementById('input');
    var newVegetable = inputElement.value.trim();

    // Check if the input is not empty
    if (newVegetable !== '') {
        vegetables.push(newVegetable);
        inputElement.value = '';

        // Update the vegetable list
        updateVegetableList();
        sortVegetableList();
    }
}

// Function to update the vegetable list
function updateVegetableList() {
    var listElement = document.getElementById('list');
    listElement.innerHTML = '';

    // Create list items for each vegetable
    vegetables.forEach(function (vegetable) {
        var listItem = document.createElement('li');
        listItem.textContent = vegetable.charAt(0).toUpperCase() + vegetable.slice(1); // Capitalize the vegetable name
        listElement.appendChild(listItem);
    });
}

// Function to sort and display the vegetable list
function sortVegetableList() {
    // Sort the vegetable list alphabetically
    var sortedVegetables = vegetables.slice().sort(function (a, b) {
        return a.localeCompare(b, 'en', { sensitivity: 'base' });
    });

    // Capitalize the vegetable names
    sortedVegetables = sortedVegetables.map(function (vegetable) {
        return vegetable.charAt(0).toUpperCase() + vegetable.slice(1);
    });

    var outputElement = document.getElementById('output');
    outputElement.textContent = sortedVegetables.join(' | ');
}