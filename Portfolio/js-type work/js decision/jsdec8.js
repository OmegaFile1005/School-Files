function calculateCalories() {
    var totalCalories = parseInt(document.getElementById("caloriesInput").value);
    var fatGrams = parseInt(document.getElementById("fatGramsInput").value);
    var isLowFat = document.getElementById("lowFatCheckbox").checked;
    var outputElement = document.getElementById("output");

    if (totalCalories < 0 || fatGrams < 0) {
        outputElement.textContent = "Error: Calories and fat grams cannot be less than 0.";
        return;
    }

    var caloriesFromFat = fatGrams * 9;
    var percentageFromFat = (caloriesFromFat / totalCalories) * 100;

    if (caloriesFromFat > totalCalories) {
        outputElement.textContent = "Error: Incorrectly entered calories or fat grams.";
        return;
    }

    var lowFatMessage = "";
    if (isLowFat && percentageFromFat < 30) {
        lowFatMessage = "This food is considered low fat.";
    }

    outputElement.textContent = "Calories from fat: " + caloriesFromFat + "\nPercentage of calories from fat: " + percentageFromFat.toFixed(2) + "%\n" + lowFatMessage;
}