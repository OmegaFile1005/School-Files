function calculateWeight() {
    var mass = parseFloat(document.getElementById("massInput").value);
    var outputElement = document.getElementById("output");

    var weight = mass * 9.8;

    if (weight > 1000) {
        outputElement.textContent = "The object is too heavy.";
    } else if (weight < 10) {
        outputElement.textContent = "The object is too light.";
    } else {
        outputElement.textContent = "The weight of the object is " + weight + " Newtons.";
    }
}