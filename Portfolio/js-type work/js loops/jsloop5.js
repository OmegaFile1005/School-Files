function calculateTuition() {
    const initialTuition = 6000;
    let tuition = initialTuition;
    let result = "";

    for (let year = 1; year <= 5; year++) {
        tuition += tuition * 0.02;
        result += `Year ${year} Tuition: $${tuition.toFixed(2)}\n`;
    }

    document.getElementById("result").value = result;
}