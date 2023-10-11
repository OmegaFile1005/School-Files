function calculateBonus() {
    const digitInput = document.getElementById('digit');
    const digit = parseInt(digitInput.value);

    let bonus = 0;

    switch (digit) {
        case 1:
        case 2:
        case 3:
            bonus = digit * 10;
            break;
        case 4:
        case 5:
        case 6:
            bonus = digit * 100;
            break;
        case 7:
        case 8:
        case 9:
            bonus = digit * 1000;
            break;
        default:
            document.getElementById('bonus').textContent = 'Error: Invalid input';
            return;
    }

    document.getElementById('bonus').textContent = 'Bonus: ' + bonus;
}