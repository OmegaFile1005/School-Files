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
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);

  var result = a == b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentGreaterThan() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);

  var result = a > b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentLessThan() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);

  var result = a < b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}

function assignmentNotEqual() {
  var a = parseInt(document.getElementById("number1").value);
  var b = parseInt(document.getElementById("number2").value);

  var result = a != b ? "Yes" : "No";
  document.getElementById("result").textContent = result;
}