function add() {
    const input = document.getElementById('input');
    const listItem = document.createElement('li');
    listItem.textContent = input.value;
    const list = document.getElementById('list');
    list.appendChild(listItem);
    input.value = '';
}