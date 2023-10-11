function performCalculations() {

    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);

    let sum = a + b;
    document.getElementById('sum').innerHTML = `${sum}`;

    let difference = a - b;
    document.getElementById('difference').innerHTML = `${difference}`;

    let product = a * b;
    document.getElementById('product').innerHTML = `${product}`;

    let quotient = a / b;
    document.getElementById('quotient').innerHTML = `${quotient}`;

    let remainder = a % b;
    document.getElementById('remainder').innerHTML = `${remainder}`;

    let incrementedA = a + 1;
    document.getElementById('incrementedA').innerHTML = `${incrementedA}`;

    let decrementedB = b - 1;
    document.getElementById('decrementedB').innerHTML = `${decrementedB}`;

    let comparisonOutput = '';

    let equalTo = a === b;
    document.getElementById('equalTo').innerHTML = `${equalTo}`;

    let lessThan = a < b;
    document.getElementById('lessThan').innerHTML = `${lessThan}`;

    let greaterThan = a > b;
    document.getElementById('greaterThan').innerHTML = `${greaterThan}`;

    let notEqualTo = a !== b;
    document.getElementById('notEqualTo').innerHTML = `${notEqualTo}`;

    let lessThanOrEqual = a <= b;
    document.getElementById('lessThanOrEqual').innerHTML = `${lessThanOrEqual}`;

    let greaterThanOrEqual = a >= b;
    document.getElementById('greaterThanOrEqual').innerHTML = `${greaterThanOrEqual}`;

    let assignmentOutput = '';

    let c = a;

    c += b;
    document.getElementById('a-sum').innerHTML = `${c}`;

    c -= a;
    document.getElementById('a-difference').innerHTML = `${c}`;

    c *= b;
    document.getElementById('a-product').innerHTML = `${c}`;

    c /= b;
    document.getElementById('a-quotient').innerHTML = `${c}`;

    c %= b;
    document.getElementById('a-remainder').innerHTML = `${c}`;

}

function clearOutput() {
    document.getElementById('number1').innerHTML = ``;
    document.getElementById('number2').innerHTML = ``;
    document.getElementById('sum').innerHTML = ``;
    document.getElementById('difference').innerHTML = ``;
    document.getElementById('product').innerHTML = ``;
    document.getElementById('quotient').innerHTML = ``;
    document.getElementById('remainder').innerHTML = ``;
    document.getElementById('incrementedA').innerHTML = ``;
    document.getElementById('decrementedB').innerHTML = ``;
    document.getElementById('equalTo').innerHTML = ``;
    document.getElementById('lessThan').innerHTML = ``;
    document.getElementById('greaterThan').innerHTML = ``;
    document.getElementById('notEqualTo').innerHTML = ``;
    document.getElementById('lessThanOrEqual').innerHTML = ``;
    document.getElementById('greaterThanOrEqual').innerHTML = ``;
    document.getElementById('a-sum').innerHTML = ``;
    document.getElementById('a-difference').innerHTML = ``;
    document.getElementById('a-product').innerHTML = ``;
    document.getElementById('a-quotient').innerHTML = ``;
    document.getElementById('a-remainder').innerHTML = ``;
}