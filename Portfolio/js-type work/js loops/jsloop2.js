function simulateGrowth() {
  const baseNumberInput = document.getElementById("baseNumber");
  const growthRateInput = document.getElementById("growthRate");
  const dayDeadlineInput = document.getElementById("dayDeadline");

  const baseNumber = baseNumberInput.value;
  const growthRate = ((growthRateInput.value / 100) + 1);
  const dayDeadline = dayDeadlineInput.value;

  let result = ""; // Create a variable to store the table of data

  for (let i = 0; i < dayDeadline; i++) {
    if (dayDeadline >= dayDeadline + 2) { break; }
    const finalConversion = growthRate ** (i + 1);
    const growthProduct = finalConversion * parseInt(baseNumber);
    result += `Day: ${i + 1} | Final Count: ${growthProduct}\n`; // Append each row of data to the result variable
  }

  document.getElementById("result").value = result; // Set the value of the textarea to the result variable
}