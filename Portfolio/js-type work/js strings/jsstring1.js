const output = document.getElementById('output');

function javaString() {
    output.innerHTML = '';

    output.innerHTML = `<h2>String Length</h2>
    <hr>
    <input type="text" class="form-control mb-2" id="input" placeholder="Enter a string"><button type="button" id="process" class="btn btn-secondary" onclick="processString()">Process</button>
    `;

    function processString() {
        const input = document.getElementById('input');
        const output = document.getElementById('output');
        //Write a program to find the length of a string without using a library function.


        //Read the input value and convert it to a string
        const text = input.value;

        //Add the input value to the array
        array.push(input.value);    

        //Display the array's contents on the web page
        output.innerHTML += `<hr>Length of the string is ${text.length}`;
    }

    processString();
}

function separateCharacters() {

}

function wordCount() {

}

function alphabetDigitsSpecial() {

}

function VowelsConsonants() {

}

function asterisks() {

}

function stringReverse() {

}

function checkParenthesis() {

}

function countOccurences() {

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