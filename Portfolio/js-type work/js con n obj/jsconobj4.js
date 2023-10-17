function updateCelsiusBackground() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");

    if (fahrenheitInput.value !== "") {
        celsiusInput.style.backgroundColor = "rgb(224, 240, 224)";
    } else {
        celsiusInput.style.backgroundColor = "";
    }
}

function fahrenheitToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusInput = document.getElementById("celsius");
    var calculationTextarea = document.getElementById("calculation");

    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;

    if (fahrenheitInput.value === "") {
        celsiusInput.value = "";
        calculationTextarea.value = "No input value present";
        calculationTextarea.style.backgroundColor = "";
    } else if (Number.isNaN(celsius)) {
        celsiusInput.value = "";
        calculationTextarea.value = "";
        fahrenheitInput.value = "";
        celsiusInput.placeholder = "Invalid input";
        calculationTextarea.style.backgroundColor = "";
    } else if (Number.isInteger(celsius)) {
        celsiusInput.value = celsius;
        calculationTextarea.value = `(${fahrenheit}°F - 32) * 5 / 9 = ${celsius}°C`;
        calculationTextarea.style.backgroundColor = "rgb(255, 0, 0)";
    } else {
        celsiusInput.value = celsius.toFixed(1);
        calculationTextarea.value = `(${fahrenheit}°F - 32) * 5 / 9 = ${celsius.toFixed(1)}°C`;
        calculationTextarea.style.backgroundColor = "rgb(224, 240, 224)";
    }

    updateCelsiusBackground();
}

function updateFahrenheitBackground() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");

    if (celsiusInput.value !== "") {
        fahrenheitInput.style.backgroundColor = "rgb(224, 240, 224)";
    } else {
        fahrenheitInput.style.backgroundColor = "";
    }
}

function celsiusToFahrenheit() {
    var celsiusInput = document.getElementById("celsius");
    var fahrenheitInput = document.getElementById("fahrenheit");
    var calculationTextarea = document.getElementById("calculation");

    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;

    if (celsiusInput.value === "") {
        fahrenheitInput.value = "";
        calculationTextarea.value = "No input value present";
        calculationTextarea.style.backgroundColor = "";
    } else if (Number.isNaN(fahrenheit)) {
        fahrenheitInput.value = "";
        calculationTextarea.value = "";
        celsiusInput.value = "";
        fahrenheitInput.placeholder = "Invalid input";
        calculationTextarea.style.backgroundColor = "";
    } else if (Number.isInteger(fahrenheit)) {
        fahrenheitInput.value = fahrenheit;
        calculationTextarea.value = `${celsius}°C * 9 / 5 + 32 = ${fahrenheit}°F`;
        calculationTextarea.style.backgroundColor = "rgb(255, 0, 0)"; // Custom RGB color
    } else {
        fahrenheitInput.value = fahrenheit.toFixed(1);
        calculationTextarea.value = `${celsius}°C * 9 / 5 + 32 = ${fahrenheit.toFixed(1)}°F`;
        calculationTextarea.style.backgroundColor = "rgb(224, 240, 224)"; // Custom RGB color
    }

    updateFahrenheitBackground();
}