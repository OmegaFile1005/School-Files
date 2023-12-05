function logIn() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Login successful!');
    } else {
        alert('Invalid username or password. Please try again.');
    }
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    document.getElementById('username').focus();

    return false;
}

function createAccount() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please enter a username and password.');
    } else {
        alert('Account created successfully!');
    }
}

function logOut() {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
}

function addTask() {
    const task = document.getElementById('task').value;
}

function updateTask() {
    const task = document.getElementById('task').value;
    //when element is selected, replace button with a selectable icon and vice versa
}

function showAllTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].classList.add('selected');
    }
}

function showCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }
}

function showIncompleteTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains('completed')) {
            tasks[i].classList.add('selected');
        }
    }
}

function clearCompletedTasks() {
    const tasks = document.getElementsByClassName('task');
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].classList.contains('completed')) {
            tasks[i].classList.remove('completed');
        }
    }
}
