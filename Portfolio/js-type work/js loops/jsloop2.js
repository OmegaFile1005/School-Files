// function simulateGrowth() {
//     var baseNumber = parseInt(document.getElementById("baseNumber").value);
//     var growthRate = parseInt(document.getElementById("growthRate").value) / 100;
//     var dayDeadline = parseInt(document.getElementById("dayDeadline").value);
//     var textarea = document.getElementById("textarea");

//     if (baseNumber <= 0 || growthRate <= 0 || dayDeadline <= 0) {
//         alert("Please enter positive values for base number, growth rate, and day deadline.");
//         return;
//     }

//     if (growthRate > 1) {
//         alert("Growth rate must be less than or equal to 1.");
//         return;
//     }

//     if (dayDeadline > 365) {
//         alert("Day deadline must be less than or equal to 365.");
//         return;
//     }

//     // textarea.value = "Day\tPopulation\n";

//     for (var day = 1; day <= dayDeadline; day++) {
//         var population = baseNumber * Math.pow(1 + growthRate, day);
//         textarea.value += day + "\t" + population.toFixed(2) + "\n";

//     }
// }

function simulateGrowth() {
  var baseNumberInput = document.getElementById("baseNumber");
  var growthRateInput = document.getElementById("growthRate");
  var dayDeadlineInput = document.getElementById("dayDeadline");

  if (!baseNumberInput || !growthRateInput || !dayDeadlineInput) {
    console.error("One or more input elements not found.");
    return;
  }

  var baseNumber = parseInt(baseNumberInput.value);
  var growthRate = parseInt(growthRateInput.value) / 100;
  var dayDeadline = parseInt(dayDeadlineInput.value);

  textarea.value = "Day\tPopulation\n";

  for (var day = 1; day <= dayDeadline; day++) {
    var population = baseNumber * Math.pow(1 + growthRate, day);
    textarea.value += day + "\t" + population.toFixed(2) + "\n";
  }
}