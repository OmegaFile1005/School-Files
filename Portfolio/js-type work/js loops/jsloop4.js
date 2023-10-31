window.onload = function calculateRise() {
    var result = document.getElementById("result")

    var baseHeight = 0
    var growthRate = 1.5
    var years = 10

    for (let i = 1; i <= years; i++) {
        baseHeight += growthRate;
        result.value += `Year: ${i} | Ocean Level: ${baseHeight}\n`
    }
}