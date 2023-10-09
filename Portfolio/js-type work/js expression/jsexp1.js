function calculateAndDisplayArea() {
    let side1 = parseFloat(document.getElementById("side1").value);
    let side2 = parseFloat(document.getElementById("side2").value);
    let side3 = parseFloat(document.getElementById("side3").value);

    let area = calculateArea(side1, side2, side3);

    document.getElementById("area-result").textContent = area;
}

function calculateArea(side1, side2, side3) {
    let s = (side1 + side2 + side3) / 2;

    let area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return area;
}