const correctAnswers = ['B', 'D', 'A', 'A', 'C', 'A', 'B', 'A', 'C', 'D', 'B', 'C', 'D', 'A', 'D', 'C', 'C', 'B', 'D', 'A'];

function start() {
    const result = document.getElementById('result');
    result.textContent = '';

    const questionsContainer = document.getElementById('questions');
    questionsContainer.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        const questionNumber = i + 1;
        const questionElement = document.createElement('p');
        questionElement.textContent = `Question ${questionNumber}:`;

        const selectElement = document.createElement('select');
        selectElement.setAttribute('id', `question-${questionNumber}`);

        const options = ['A', 'B', 'C', 'D'];
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option;
            optionElement.textContent = option;
            selectElement.appendChild(optionElement);
        });

        questionsContainer.appendChild(questionElement);
        questionsContainer.appendChild(selectElement);
    }
}

function checkAnswers() {
    const form = document.getElementById('questions');
    const userAnswers = [];

    for (let i = 0; i < form.children.length; i += 2) {
        const selectElement = form.children[i + 1];
        const selectedOption = selectElement.value;
        userAnswers.push(selectedOption);
    }

    let correctValues = 0;
    let incorrectValues = 0;
    const incorrectAnswers = [];
    for (let i = 0; i < userAnswers.length; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
            correctValues++;
        } else {
            incorrectValues++;
            incorrectAnswers.push(i + 1);
        }
    }

    const resultForm = document.getElementById('result');
    resultForm.innerHTML = `Correct answers: ${correctValues}<br>
    Incorrect answers: ${incorrectValues}<br>
    Incorrect answers: ${incorrectAnswers.join(', ')}<br>
    ${correctValues >= 15 ? 'Congratulations, you have passed the exam!' : 'Sorry, you have failed the exam. Please try again.'}`;
}

console.log(correctAnswers);