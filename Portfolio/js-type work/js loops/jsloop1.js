function loop() {
    var textarea = document.getElementById("result");

    for (var celsius = 0; celsius <= 20; celsius++) {
      var fahrenheit = (celsius * 9 / 5) + 32;
      textarea.value += celsius + "°C = " + fahrenheit.toFixed(2) + "°F\n";
    }
}