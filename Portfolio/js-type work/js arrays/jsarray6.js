const fruits = [];
function addFruit() {
    const inputElement = document.getElementById('fruit');
    const fruitList = inputElement.value.trim();
    fruits.push(input);

    if (input != '') {
        fruits.push(fruitList);
        inputElement.value = '';

        updateFruitList();
    }
}