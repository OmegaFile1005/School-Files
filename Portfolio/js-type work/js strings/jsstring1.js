const output = document.getElementById('output');

function javaString() {
    output.innerHTML = '';

    output.innerHTML = `<h2>String Length</h2>
    <hr>
    <input type="text" class="form-control mb-2" id="input"><button type="button" id="process" class="btn btn-secondary" onclick="processString()">Process</button>
    `;

    function processString() {
        const input = document.getElementById('input');

        if (!input.value) {
            output.innerHTML = 'Please enter a string';
            return;
        }

        

        output.innerHTML += input.value.length;
    }

    processString();
}

function separateCharacters() {
    let name = "John Doe";
    let age = 25;
}

function wordCount() {
    let name = "John Doe";
    let age = 25;
}

function alphabetDigitsSpecial() {
    let name = "John Doe";
    let age = 25;
}

function VowelsConsonants() {
    let name = "John Doe";
    let age = 25;
}

function asterisks() {
    let name = "John Doe";
    let age = 25;
}

function stringReverse() {
    let name = "John Doe";
    let age = 25;
}

function checkParenthesis() {
    let name = "John Doe";
    let age = 25;
}

function countOccurences() {
    let name = "John Doe";
    let age = 25;
}

function extractSubstring() {

}

function checkSubstring() {

}

function switchUpperLower() {

}

function positionSubstring() {

}

function compareStrings() {

}