const output = document.getElementById('output');
const array = [];

function javaString() {
    output.innerHTML = '';

    output.innerHTML = `<h2>String Length</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processFirst()">Process</button>
    `;

    console.log(array);
}

function processFirst() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');
    outputLength.innerHTML = `<h2>String Length</h2><hr>Length of the string is ${text.length}`;

    console.log(array);
}

function separateCharacters() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Separate Characters</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processSecond()">Process</button>
    `;

    console.log(array);
}

function processSecond() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');
    outputLength.innerHTML = `
        <h2>Separate Characters</h2>
        <hr>
        ${[...text].join('')}
    `;

    console.log(array);
}

function wordCount() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Number of Words</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processThird()">Process</button>
    `;

    console.log(array);
}

function processThird() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');
    const wordCount = text.split(' ').length;
    outputLength.innerHTML = `<h2>Number of Words</h2><hr>Word count is ${wordCount}`;

    console.log(array);
}

function alphabetDigitsSpecial() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Alphabet-Digits-Special</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processFourth()">Process</button>
    `;

    console.log(array);
}

function processFourth() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');
    const letterCount = text.match(/[a-zA-Z]/g)?.length || 0;
    const digitCount = text.match(/[0-9]/g)?.length || 0;
    const specialCharacterCount = text.match(/[^a-zA-Z0-9]/g)?.length || 0;

    outputLength.innerHTML = `<h2>Alphabet-Digits-Special</h2><hr>Letters: ${letterCount}
    <br>Digits: ${digitCount}
    <br>Special Characters: ${specialCharacterCount}`;

    console.log(array);
}

function VowelsConsonants() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Vowels & Consonants</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processFifth()">Process</button>
    `;

    console.log(array);
}

function processFifth() {
    const input = document.getElementById('input');
    const text = input.value;
    const outputLength = document.getElementById('output');

    const vowels = text.replace(/[^aeiou]/gi, '').length;
    const consonants = text.replace(/[aeiou]/gi, '').length;
    const otherCharacters = text.replace(/[a-zA-Z]/gi, '').length;

    outputLength.innerHTML = `
        <h2>Vowels & Consonants</h2><hr>
        Vowels: ${vowels}
        <br>Consonants: ${consonants}
        <br>Other Characters: ${otherCharacters}
    `;

    array.push(text);

    console.log(array);
}

function asterisks() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Asterisks</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processSixth()">Process</button>
    `;

    console.log(array);
}

function processSixth() {
    const input = document.getElementById('input');
    const text = input.value;
    const outputLength = document.getElementById('output');

    let output = `<h2>Asterisks</h2><hr><p>New String: `;
    if (text.length < 20) {
        output += `${text}${'*'.repeat(20 - text.length)} </p>`;
    } else if (text.length > 20) {
        output += `<p class="text-danger">Enter 20 characters or less.</p>`;
        outputLength.innerHTML = output;
        return;
    } else {
        output += text + '</p>';
    }

    outputLength.innerHTML = output;
    array.push(text);
    console.log(array);
}

function stringReverse() {
    output.innerHTML = '';

    output.innerHTML = `<h2>String Reverse</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processSeventh()">Process</button>
    `;

    console.log(array);
}

function processSeventh() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');
    const reversedText = reverseString(text);
    outputLength.innerHTML = `<h2>String Reverse</h2><hr><p>${text} -> ${reversedText}</p>`;

    console.log(array);
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function checkParenthesis() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Check Parenthesis</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processEighth()">Process</button>
    `;

    console.log(array);
}

function processEighth() {
    const input = document.getElementById('input');
    const text = input.value;

    const outputLength = document.getElementById('output');
    let result = '';

    if (text.match(/[\(\)\[\]\{\}]/g)?.length % 2 !== 0) {
        result = 'Invalid Expression';
    } else {
        result = 'Valid Expression';
    }

    outputLength.innerHTML = `<h2>Check Parenthesis</h2><hr>${result}`;

    console.log(array);
}

function countOccurences() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Count Occurences</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processNinth()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter Substring">`;

    console.log(array);
}

function processNinth() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');

    const input1 = document.getElementById('input1');
    const text1 = input1.value;

    if (input1.value == '') {
        return;
    } else {
        outputLength.innerHTML = `<h2>Count Occurences</h2><hr><p class="text-info">${text1} appears ${text.split(text1).length - 1} times.</p>`;
    }

    console.log(array);
}

function countCharacters() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Count Characters</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processTenth()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter Character">`;

    console.log(array);
}

function processTenth() {
    const input = document.getElementById('input').value;
    const outputLength = document.getElementById('output');
    const input1 = document.getElementById('input1').value;

    if (input1 === '') {
        return;
    }

    const count = input.split(input1).length - 1;
    outputLength.innerHTML = `<h2>Count Characters</h2><hr><p>${input1} appears ${count} times.</p>`;

    console.log(array);
}

function extractSubstring() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Extract Substring</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processEleventh()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter Substring">`;

    console.log(array);
}

function processEleventh() {
    const input = document.getElementById('input').value;
    const outputLength = document.getElementById('output');
    const input1 = document.getElementById('input1').value;

    if (input1 === '') {
        return;
    }

    const substrings = input.split(input1);
    const output = substrings.join('');
    outputLength.innerHTML = `<h2>Extract Substring</h2><hr><p>${output}</p>`;

    console.log(array);
}

function checkSubstring() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Check Substring</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processTwelfth()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter Substring">`;

    console.log(array);
}

function processTwelfth() {
    const input = document.getElementById('input');
    const text = input.value;

    array.push(text);

    const outputLength = document.getElementById('output');

    const input1 = document.getElementById('input1');
    const text1 = input1.value;

    if (!text1) return;

    const containsSubstring = text.includes(text1);

    outputLength.innerHTML = `<h2>Check Substring</h2><hr><p class="text-info">${text1} ${containsSubstring ? 'is' : 'is not'} a substring of ${text}.</p>`;

    console.log(array);
}

function switchUpperLower() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Switch Upper Lower</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processThirteenth()">Process</button>`;

    console.log(array);
}

function processThirteenth() {
    const input = document.getElementById('input');
    const text = input.value;

    const transformedText = Array.from(text, char => {
        return char === char.toLowerCase() ? char.toUpperCase() : char.toLowerCase();
    }).join('');

    const outputLength = document.getElementById('output');
    outputLength.innerHTML = `<hr><h2>Switch Upper Lower</h2><hr><p>${transformedText}</p>`;

    console.log(array);
}
function positionSubstring() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Position Substring</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processFourteenth()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter Substring">`;

    console.log(array);
}

function processFourteenth() {
    const input = document.getElementById('input');
    const text = input.value;
    const array = [];

    array.push(text);

    const outputLength = document.getElementById('output');

    const input1 = document.getElementById('input1');
    const text1 = input1.value;

    if (text1) {
        const position = text.indexOf(text1);
        outputLength.innerHTML = `<h2>Position Substring</h2><hr><p class="text-info">${text1} is at position ${position}.</p>`;
    }

    console.log(array);
}

function compareStrings() {
    output.innerHTML = '';

    output.innerHTML = `<h2>Compare Strings</h2><hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processFifteenth()">Process</button>
    <hr><input type="text" class="form-control mb-2" id="input1" placeholder="Enter a string">`;

    console.log(array);
}

function processFifteenth() {
    const input = document.getElementById('input').value;
    const input1 = document.getElementById('input1').value;
    const outputLength = document.getElementById('output');

    array.push(input);

    if (!input1) return;

    const comparison = input.localeCompare(input1);

    outputLength.innerHTML = `<h2>Compare Strings</h2><hr><p class="text-info">The string is ${comparison === -1 ? 'Before' : comparison === 1 ? 'After' : 'Equal'} to the other.</p>`;

    console.log(array);
}
