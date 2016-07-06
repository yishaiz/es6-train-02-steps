'use strict';

var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
    var monthlyRate = 0;

    var name = 'yishai';

    debugger;

    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));

    // return monthlyPayment;

    return {
        principal: principal,
        years: years,
        rate: rate,
        monthlyPayment: monthlyPayment,
        monthlyRate: monthlyRate
    };
};

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;

    //    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);

    var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate);

    var monthlyPayment = _calculateMonthlyPaym.monthlyPayment;
    var monthlyRate = _calculateMonthlyPaym.monthlyRate;

    // document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);

    document.getElementById("monthlyPayment").innerHTML = monthlyPayment;
});
//# sourceMappingURL=all.js.map
