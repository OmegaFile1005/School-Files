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

    document.getElementById('accountPredeposit').value = '';
    document.getElementById('holderName').value = '';
    document.getElementById('holderLastName').value = '';
    console.log(accounts + ' has been created');
}

function showAll() {
    const accountNumbers = document.getElementById('accounts');
    accounts.innerHTML = '';

    const accounts = JSON.parse(localStorage.getItem('accounts'));

    if (accounts == null) {
        return;
    }
    const table = document.createElement('table');
}

function deposit() {

}

function withdraw() {

}