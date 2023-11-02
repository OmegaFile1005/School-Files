function findAccount() {
    const accountNumbers = [];

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 9999999) + 1000000;
        accountNumbers.push(randomNumber);
    }

    const account = document.getElementById('random').value;

    console.log(accountNumbers);

    document.getElementById('account').value = '';

    account.innerHTML = `Account Numbers Available: ${accountNumbers.join(' | ')}<br>`;

    if (accountNumbers.includes(account)) {
        alert(`The account number ${account} is available!`);
    } else {
        alert(`The account number ${account} is not available!`);
    }
}