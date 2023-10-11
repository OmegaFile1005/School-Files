function convertSeconds() {
    var seconds = parseInt(document.getElementById("secondsInput").value);
    var outputElement = document.getElementById("output");

    if (seconds >= 86400) {
        var days = Math.floor(seconds / 86400);
        seconds %= 86400;
        outputElement.textContent = "Number of days: " + days;
    } else {
        outputElement.textContent = "";
    }

    if (seconds >= 3600) {
        var hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        outputElement.textContent += "\nNumber of hours: " + hours;
    }

    if (seconds >= 60) {
        var minutes = Math.floor(seconds / 60);
        seconds %= 60;
        outputElement.textContent += "\nNumber of minutes: " + minutes;
    }

    outputElement.textContent += "\nNumber of seconds: " + seconds;
}