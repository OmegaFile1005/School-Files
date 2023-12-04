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
    outputLength.innerHTML = `<h2>Separate Characters</h2><hr>${text.split('')}`;

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

    outputLength.innerHTML = `<h2>Number of Words</h2><hr>Word count is ${text.split(' ').length}`;

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
    outputLength.innerHTML = `<h2>Alphabet-Digits-Special</h2><hr>Letters: ${text.replace(/[^a-zA-Z]/g, '').length}
    <br>Digits: ${text.replace(/[^0-9]/g, '').length}
    <br>Special Characters: ${text.replace(/[a-zA-Z0-9]/g, '').length}`;

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

    array.push(text);

    const outputLength = document.getElementById('output');
    outputLength.innerHTML = `<h2>Vowels & Consonants</h2><hr>Vowels: ${text.replace(/[^aeiou]/gi, '').length}
    <br>Consonants: ${text.replace(/[aeiou]/gi, '').length}
    <br>Other Characters: ${text.replace(/[a-zA-Z]/gi, '').length}`;

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

    let output = `<h2>Asterisks</h2><hr>`;
    if (text.length < 20) {
        output += `${text}${'*'.repeat(20 - text.length)}`;
    } else if (text.length > 20) {
        output += `<p class="text-danger">Enter 20 characters or less</p>`;
        outputLength.innerHTML = output;
        return;
    } else {
        output += text;
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
    outputLength.innerHTML = `<h2>String Reverse</h2><hr>${reversedText}`;

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
        outputLength.innerHTML = `<h2>Count Occurences</h2><hr>${text.split(text1).length - 1}`
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
    outputLength.innerHTML = `<h2>Count Characters</h2><hr>${count}`;

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

    outputLength.innerHTML = `<h2>Extract Substring</h2><hr>${input.split(input1)}`.replace(/^,|,$/, '');

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
  
  outputLength.innerHTML = `<h2>Check Substring</h2><hr>${containsSubstring}`;
  
  console.log(array);
}

function switchUpperLower() {

}

function positionSubstring() {

}

function compareStrings() {

}