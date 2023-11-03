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
    var input = document.getElementById('fruit');
    var fruit = input.value.trim();

    if (fruit) {
        fruits.unshift(fruit);
        input.value = '';
    }
    updateFruitList();
}

function addAtEnd() {
    var input = document.getElementById('fruit');
    var fruit = input.value.trim();

    if (fruit) {
        fruits.push(fruit);
        input.value = '';
    }
    updateFruitList();
}

function removeFirst() {
    fruits.shift();
    updateFruitList();
}

function removeAtPosition() {
    var input = document.getElementById('position');
    var position = parseInt(input);
    var positionInput = document.getElementById('position');
    var position = parseInt(positionInput?.value || 0);

    if (isNaN(position) || position < 0 || position >= fruits.length) return;

    fruits.splice(position, 1);
    positionInput = '';
    updateFruitList();
}


function addAtPosition() {
    var input = document.getElementById('fruit');
    var positionInput = document.getElementById('position');
    var position = parseInt(positionInput ? positionInput.value : 0);
    var fruit = input.value;

    if (isNaN(position) || position < 0 || position > fruits.length) return;

    fruits.splice(position, 0, fruit);
    updateFruitList();
}

function sortFruits() {
    fruits.sort();
    updateFruitList();
}