const populationData = [151868, 153982, 156393, 158956, 161884, 165069, 168088, 171187, 174149, 177135, 179979, 182992, 185771, 188483, 191141, 193526, 195576, 197457, 199399, 201385, 203984, 206827, 209284, 211357, 213342, 215465, 217563, 219760, 222095, 224567, 227225, 229466, 231664, 233792, 235825, 237924, 240133, 242289, 244499, 246819, 249623];

function calculateAverageAnnualChange() {
    const firstYear = 1950;
    const lastYear = 1990;
    const numYears = lastYear - firstYear + 1;
    const totalChange = populationData.slice(1).reduce((sum, current, i) => sum + (current - populationData[i]), 0);

    const avgChange = (totalChange / numYears).toFixed(0);

    const statisticsElement = document.getElementById('statistics');
    if (statisticsElement) {
        statisticsElement.textContent = `Average Increase: ${avgChange}`;
    }
}
function calculateGreatestIncrease() {
    let greatestIncrease = 0;
    let yearGreatestIncrease = 0;

    for (let i = 1; i < populationData.length; i++) {
        const currentYear = populationData[i];
        const previousYear = populationData[i - 1];
        const greatestIncreasechange = currentYear - previousYear;

        if (greatestIncreasechange > greatestIncrease) {
            greatestIncrease = greatestIncreasechange;
            yearGreatestIncrease = 1950 + i - 1;
        }
    }

    let statisticsElement = document.getElementById('statistics');
    if (statisticsElement) {
        statisticsElement.textContent = `Greatest Increase: ${greatestIncrease} in the year ${yearGreatestIncrease}`;
    }
}

function calculateLeastIncrease() {
    let leastIncrease = Infinity;
    let yearLeastIncrease = 0;

    for (let i = 1; i < populationData.length; i++) {
        const currentYear = populationData[i];
        const prevYear = populationData[i - 1];
        const leastIncreaseChange = currentYear - prevYear;

        if (leastIncreaseChange < leastIncrease) {
            leastIncrease = leastIncreaseChange;
            yearLeastIncrease = 1950 + i - 1;
        }
    }

    const result = `Smallest Increase: ${leastIncrease} in the year ${yearLeastIncrease}`;
    document.getElementById('statistics').textContent = result;
}

// Calculate the statistics
const avgChange = calculateAverageAnnualChange(populationData);
const greatestIncreasechange = calculateGreatestIncrease(populationData);
const leastIncreasechange = calculateLeastIncrease(populationData);

function resetStatistics() {
    const statisticsElement = document.getElementById('statistics');
    if (statisticsElement) {
        statisticsElement.textContent = '';
    }
}

// Output the results
console.log(avgChange);
console.log(greatestIncreasechange);
console.log(leastIncreasechange);