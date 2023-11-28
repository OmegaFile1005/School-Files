function generateAccountNumber() {
    const newAccount = Math.floor(Math.random() * 9000) + 1000;
    const accountNumberInput = document.getElementById('accountNumber');

    accountNumberInput.placeholder = newAccount;
    accountNumberInput.value.innerHTML = newAccount;

    localStorage.setItem('accountNumber', newAccount);
    console.log(newAccount + ' has been generated');
}

function openAccount() {
    let accounts = JSON.parse(localStorage.getItem('Logged Account')) || []; // This line was added
    const balance = document.getElementById('accountPredeposit').value;
    const holderName = document.getElementById('holderName').value;
    const holderLastName = document.getElementById('holderLastName').value;

    if (balance === '' || holderName === '' || holderLastName === '') {
        return;
    }

    const accountNumber = localStorage.getItem('accountNumber');

    const account = {
        accountNumber,
        balance: balance * 1, // Balance must be a number
        holderName,
        holderLastName
    };

    const accountExists = accounts.some(acc => acc.accountNumber === accountNumber);

    if (accountExists) {
        alert('Account number already exists');
        return;
    }
    accounts.push(account);
    console.log(accounts);
    localStorage.setItem('Logged Account', JSON.stringify(accounts)); // Was moved here
    document.getElementById('accountPredeposit').value = '';
    document.getElementById('holderName').value = '';
    document.getElementById('holderLastName').value = '';
    console.log(accounts + ' has been created');

}

function showAll() {
    const allAccounts = JSON.parse(localStorage.getItem('Logged Account'));
    const allAccountsList = document.getElementById('accounts');

    console.log('Creating "All Accounts" header');
    allAccountsList.innerHTML = '<h1 class="text-center">All Accounts</h1>';

    let table = allAccountsList.querySelector('table');

    if (!table) {
        console.log('Creating new table');
        table = document.createElement('table');
        table.classList.add('table', 'table-dark');
        allAccountsList.appendChild(table);
    } else {
        console.log('Clearing existing table');
        table.innerHTML = '';
    }

    const createTableCell = (text) => {
        const td = document.createElement('td');
        td.textContent = text;
        return td;
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

    const createTableRow = (account) => {
        const tr = document.createElement('tr');
        tr.appendChild(createTableCell(account.accountNumber));
        tr.appendChild(createTableCell(account.holderName));
        tr.appendChild(createTableCell(account.holderLastName));
        tr.appendChild(createTableCell(account.balance.toFixed(2)));
        return tr;
    };

    const tbody = document.createElement('tbody');

    allAccounts.forEach(account => { // Changed validAccounts to allAccounts
        const tr = createTableRow(account);
        tbody.appendChild(tr);
    });

    table.appendChild(createTableHeader());
    table.appendChild(tbody);

    console.log('Table created successfully');
}

function deposit() {
    const accounts = JSON.parse(localStorage.getItem('Logged Account')); // This line was added
    const accountNumber = prompt("Enter account number:");
    const depositAmount = prompt("Enter amount to deposit:");

    const specificAccount = accounts.find(account => account.accountNumber === accountNumber);

    if (specificAccount) {
        specificAccount.balance += parseFloat(depositAmount);
        const formattedBalance = specificAccount.balance.toFixed(2);
        alert(`New balance for account ${specificAccount.accountNumber}: $${formattedBalance}`);
        localStorage.setItem('Logged Account', JSON.stringify(accounts));
        showAll(); // This line was added
    } else {
        alert("Account not found");
    }
}

function withdraw() {
    const accounts = JSON.parse(localStorage.getItem('Logged Account')); // This line was added
    const accountNumber = prompt("Enter account number:");
    const withdrawAmount = prompt("Enter amount to withdraw:");

    const specificAccount = accounts.find(account => account.accountNumber === accountNumber);

    if (specificAccount) {
        if (specificAccount.balance >= withdrawAmount) {
            specificAccount.balance -= parseFloat(withdrawAmount);
            const formattedBalance = specificAccount.balance.toFixed(2);
            alert(`New balance for account ${specificAccount.accountNumber}: $${formattedBalance}`);
            localStorage.setItem('Logged Account', JSON.stringify(accounts));
            showAll(); // This line was added
        } else {
            alert("Insufficient funds");
        }
    }
}