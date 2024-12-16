"use strict";
function solveEquation(a, b, c) {

    const d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        return [];
    } else if (d === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const root1 = (-b + Math.sqrt(d)) / (2 * a);
        const root2 = (-b - Math.sqrt(d)) / (2 * a);
        return [root1, root2];
    }
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let monthlyPercent = (percent / 100) / 12;
    let loanBody = amount - contribution;
if (loanBody <= 0) {
        return 0; 
    }
    let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1)));

    let totalAmount = monthlyPayment * countMonths;

    return Math.round(totalAmount * 100) / 100; 
}
