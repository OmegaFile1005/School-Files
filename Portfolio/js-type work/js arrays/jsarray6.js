const fruits = [];

function addFruit() {
    const inputElement = document.getElementById('fruit');
    const fruitName = inputElement.value.trim();

    if (fruitName !== '') {
        fruits.push(fruitName);
        inputElement.value = '';

        console.log(fruits);
        updateFruitList();
    }
}

function updateFruitList() {
    const fruitsElement = document.getElementById('fruits');
    fruitsElement.innerHTML = '';

    fruits.forEach(function (fruit) {
        const listItem = document.createElement('p');
        listItem.textContent = fruit.charAt(0).toUpperCase() + fruit.slice(1); // Capitalize the fruit name
        fruitsElement.appendChild(listItem);
    });
}

function addAtBeginning() {
}

function addAtEnd() {
}

function removeFirst() {
}

function removeAtPosition() {
}

function addAtPosition() {
}

function sortFruits() {
}