const fruits = [];
function addFruit() {
    const inputElement = document.getElementById('fruit');
    const fruitList = inputElement.value.trim();
    fruits.push(input);

    if (input != '') {
        fruits.push(fruitList);
        inputElement.value = '';

        console.log(fruits);
    }

    const fruitsElement = document.createElement('p');
    fruitsElement.textContent = fruitList;
}