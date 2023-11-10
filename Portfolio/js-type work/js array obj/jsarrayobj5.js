function generateAccountNumber() {
    var accountNumber = Math.floor(Math.random() * 1000000000);
    return accountNumber;

}

function showAll() {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    var accounts = JSON.parse(localStorage.getItem('accounts'));

    if (accounts.length === 0) {
        var emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No accounts found';
        tbody.appendChild(emptyMessage);
        return;
    }

    accounts.forEach(function (account) {
        var row = document.createElement('tr');
        var accountNumberCell = document.createElement('td');
        accountNumberCell.textContent = account.accountNumber;
        row.appendChild(accountNumberCell);
    })

}

function openAccount() {
    var accountNumber = generateAccountNumber();
    var account = {
        accountNumber: accountNumber,
        balance: 0
    };

    var accounts = JSON.parse(localStorage.getItem('accounts'));

    accounts.push(account);

    localStorage.setItem('accounts', JSON.stringify(accounts));

    showAll();
}

function deposit() {
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = document.getElementById('amount').value;

    const accounts = JSON.parse(localStorage.getItem('accounts'));
}

function withdraw() {
    return;

}