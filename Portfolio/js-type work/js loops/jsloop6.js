function generateRandomNumber() {
    return Math.floor(Math.random() * 401) + 100;
}

function generateNewProblem() {
    var number1 = generateRandomNumber();
    var number2 = generateRandomNumber();

    var problemElement = document.getElementById('problem');
    problemElement.textContent = `${number1} + ${number2} = `;

    var answerInput = document.getElementById('answer');
    answerInput.value = '';
}

function checkAnswer() {
    const answerInput = document.getElementById('answer');
    const userAnswer = parseInt(answerInput.value);

    const problemElement = document.getElementById('problem');
    const problemText = problemElement.textContent;
    const [number1, number2] = problemText.match(/\d+/g).map(Number);

    const correctAnswer = number1 + number2;

    const resultElement = document.getElementById('result');
    resultElement.textContent = userAnswer === correctAnswer ? 'Correct!' : 'Incorrect. The correct answer is ' + correctAnswer;

    generateNewProblem();
}
