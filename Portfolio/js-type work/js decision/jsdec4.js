function mixColors() {
    var firstColor = document.querySelector('input[name="firstColor"]:checked').value;
    var secondColor = document.querySelector('input[name="secondColor"]:checked').value;
    var formElement = document.querySelector('form');

    var mixedColor = mix(firstColor, secondColor);
    formElement.style.backgroundColor = mixedColor;
}

function mix(color1, color2) {
    if (color1 === color2) {
        return color1;
    } else if ((color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red")) {
        return "purple";
    } else if ((color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red")) {
        return "orange";
    } else if ((color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue")) {
        return "green";
    }
}