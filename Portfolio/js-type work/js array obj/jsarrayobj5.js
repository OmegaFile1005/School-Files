const accounts = [];

function generateAccountNumber() {
    const accountNumber = Math.floor(Math.random() * 9000) + 1000;
    const accountNumberInput = document.getElementById('accountNumber');

    accountNumberInput.placeholder = accountNumber;
    accountNumberInput.value = accountNumber;

    localStorage.setItem('accountNumber', accountNumber);
    console.log(accountNumber + ' has been generated');
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
    const balance = document.getElementById('accountPredeposit').value;
    const holderName = document.getElementById('holderName').value;
    const holderLastName = document.getElementById('holderLastName').value;



    accounts.push({
        accountNumber: accountNumber,
        balance: balance,
        holderName: holderName,
        holderLastName: holderLastName
    })

    localStorage.setItem('accounts', JSON.stringify(accounts));

    console.log(accounts + ' has been created');
}

function deposit() {
    const accountNumber = document.getElementById('accountNumber').value;
    const amount = document.getElementById('amount').value;

    const accounts = JSON.parse(localStorage.getItem('accounts'));
}

function withdraw() {
    return;

}