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

    if (balance === '' || holderName === '' || holderLastName === '') {
        return;
    }

    const accountNumber = localStorage.getItem('accountNumber');

    const account = {
        accountNumber,
        balance,
        holderName,
        holderLastName
    };

    const accountExists = accounts.some(acc => acc.accountNumber === accountNumber);

    if (accountExists) {
        alert('Account number already exists');
        return;
    }

    accounts.push(account);

    localStorage.setItem('accounts', JSON.stringify(accounts));
    document.getElementById('accountPredeposit').value = '';
    document.getElementById('holderName').value = '';
    document.getElementById('holderLastName').value = '';
    console.log(accounts + ' has been created');
}

function showAll() {
    const allAccounts = JSON.parse(localStorage.getItem('accounts'));
    const ValidAccounts = allAccounts.filter(account => accountExists);
    const allAccountsList = document.getElementById('accounts');
 
    let table = allAccountsList.querySelector('table');

    if (!table) {
        table = document.createElement('table');
        table.classList.add('table', 'table-dark');
        allAccountsList.appendChild(table);
    } else {
        while (table.firstChild) {
            table.firstChild.remove();
        }
    }
    
    const thead = document.createElement('thead');
}