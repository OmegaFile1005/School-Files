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



    localStorage.setItem('Logged Account', JSON.stringify(accounts));
    accounts.push(account);
    document.getElementById('accountPredeposit').value = '';
    document.getElementById('holderName').value = '';
    document.getElementById('holderLastName').value = '';
    console.log(accounts + ' has been created');

}

function showAll() {
    const allAccounts = JSON.parse(localStorage.getItem('Logged Account'));
    const validAccounts = allAccounts.filter(account => account.accountExists);
    const allAccountsList = document.getElementById('accounts');

    allAccountsList.innerHTML = '<h1 class="text-center">All Accounts</h1>';

    let table = allAccountsList.querySelector('table');

    if (!table) {
        table = document.createElement('table');
        table.classList.add('table', 'table-dark');
        allAccountsList.appendChild(table);
    } else {
        table.innerHTML = '';
    }

    const createTableCell = (text) => {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
    };

    const createTableRow = (account) => {
        const tr = document.createElement('tr');
        tr.appendChild(createTableCell(account.accountNumber));
        tr.appendChild(createTableCell(account.holderName));
        tr.appendChild(createTableCell(account.holderLastName));
        tr.appendChild(createTableCell(account.balance));
        return tr;
    };

    const createTableHeader = () => {
        const thead = document.createElement('thead');
        const tr = document.createElement('tr');
        tr.appendChild(createTableCell('Account Number'));
        tr.appendChild(createTableCell('Holder Name'));
        tr.appendChild(createTableCell('Holder Last Name'));
        tr.appendChild(createTableCell('Balance'));
        thead.appendChild(tr);
        return thead;
    };

    const tbody = document.createElement('tbody');

    validAccounts.forEach(account => {
        const tr = createTableRow(account);
        tbody.appendChild(tr);
    });

    table.appendChild(createTableHeader());
    table.appendChild(tbody);
}