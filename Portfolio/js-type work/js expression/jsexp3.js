function calculateHypotenuse() {
  var sideA = parseFloat(document.getElementById("side1").value);
  var sideB = parseFloat(document.getElementById("side2").value);

  if (isNaN(sideA) || isNaN(sideB)) {
    // Handle invalid input
    document.getElementById("hypotenuse").textContent = "Please enter valid numbers for both sides.";
    return;
  }

  var hypotenuse = Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  document.getElementById("hypotenuse").textContent = hypotenuse.toFixed(2);
}