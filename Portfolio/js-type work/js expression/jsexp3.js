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

function calculateTime() {
    var seconds = parseInt(document.getElementById("seconds").value);
    console.log(seconds);
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor(seconds/ 60);
    document.getElementById("hours").innerHTML = hours.toFixed(2);
    document.getElementById("minutes").innerHTML = minutes.toFixed(2);
    document.getElementById("Seconds").innerHTML = seconds.toFixed(2);
}

function calculateAverage() {
    var firstValue = parseInt(document.getElementById("firstvalue").value);
    var secondValue = parseInt(document.getElementById("secondvalue").value);
    var thirdValue = parseInt(document.getElementById("thirdvalue").value);
    var average = (firstValue + secondValue + thirdValue) / 3;
    document.getElementById("average").textContent = average.toFixed(2);
}
function clearHypotenuse() {
    document.getElementById("side1").value = "";
    document.getElementById("side2").value = "";
    document.getElementById("hypotenuse").textContent = "";
}

function clearTime() {
    document.getElementById("seconds").value = "";
    document.getElementById("time").textContent = "";
}

function clearAverage() {
    document.getElementById("firstvalue").value = "";
    document.getElementById("secondvalue").value = "";
    document.getElementById("thirdvalue").value = "";
    document.getElementById("average").textContent = "";
}