function add() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var result = number1 + number2;
  document.getElementById("result").textContent = result;
}

function subtract() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var result = number1 - number2;
  document.getElementById("result").textContent = result;
}

function multiply() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var result = number1 * number2;
  document.getElementById("result").textContent = result;
}

function divide() {
  var number1 = parseInt(document.getElementById("number1").value);
  var number2 = parseInt(document.getElementById("number2").value);
  var result = number1 / number2;
  document.getElementById("result").textContent = result;
}

function assignmentEqual() {
  var a = /* assign value to variable a */;
  var b = /* assign value to variable b */;

  var result = a == b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentGreaterThan() {
  var a = /* assign value to variable a */;
  var b = /* assign value to variable b */;

  var result = a > b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentLessThan() {
  var a = /* assign value to variable a */;
  var b = /* assign value to variable b */;

  var result = a < b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentNotEqual() {
  var a = /* assign value to variable a */;
  var b = /* assign value to variable b */;

  var result = a != b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}