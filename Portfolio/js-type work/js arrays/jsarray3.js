function findAccount() {
    let numbers = Math.floor(Math.random() * 9999999) + 1000000;
    
    console.log(numbers);

    while (numbers.length < 7) {
        numbers = '0' + numbers;
    }

    const randomElement = document.getElementById('random');
    randomElement.innerHTML = `Account Numbers Available: ${numbers}`;
}