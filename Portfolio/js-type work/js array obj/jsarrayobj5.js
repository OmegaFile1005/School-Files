const accounts = [];

function generateAccountNumber() {
    const newAccount = Math.floor(Math.random() * 9000) + 1000;
    const accountNumberInput = document.getElementById('accountNumber');

    accountNumberInput.placeholder = newAccount;
    accountNumberInput.value.innerHTML = newAccount;

    localStorage.setItem('accountNumber', newAccount);
    console.log(newAccount + ' has been generated');
}

function openAccount() {
    const balance = document.getElementById('accountPredeposit').value;
    const holderName = document.getElementById('holderName').value;
    const holderLastName = document.getElementById('holderLastName').value;

    const accounts = JSON.parse(localStorage.getItem('accounts'));

    accounts.push({
        accountNumber: localStorage.getItem('accountNumber'),
        balance: balance,
        holderName: holderName,
        holderLastName: holderLastName
    })

    if (balance === '' || holderName === '' || holderLastName === '') {
        accounts.pop();
        return;
    } else {
        for (var i = 0; i < accounts.length; i++) {
            if (accounts[i].accountNumber == localStorage.getItem('accountNumber')) {
                accounts[i].balance = balance;
                accounts[i].holderName = holderName;
                accounts[i].holderLastName = holderLastName;
            }
        }
    }

    localStorage.setItem('accounts', JSON.stringify(accounts));

    console.log(accounts + ' has been created');
}

function showAll() {
    var tbody = document.getElementById('tbody');
    tbody.innerHTML = '';

    var accounts = JSON.parse(localStorage.getItem('accounts'));

    if (accounts.length === 0) {
        var emptyMessage = document.createElement('p');
        emptyMessageasd.textContent = 'No accounts found';
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

function deposit() {

}

function withdraw() {

}