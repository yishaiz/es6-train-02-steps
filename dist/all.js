'use strict';

//let calculateMonthlyPayment = function(principal, years, rate) {
var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
    var monthlyRate = 0;

    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));

    return { principal: principal,
        years: years,
        rate: rate,
        monthlyPayment: monthlyPayment,
        monthlyRate: monthlyRate
    };
};

var calculateAmortization = function calculateAmortization(principal, years, rate) {
    var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate);

    var monthlyRate = _calculateMonthlyPaym.monthlyRate;
    var monthlyPayment = _calculateMonthlyPaym.monthlyPayment;

    var balance = principal;
    var amortization = [];
    for (var y = 0; y < years; y++) {
        var interestY = 0; //Interest payment for year y
        var principalY = 0; //Principal payment for year y
        for (var m = 0; m < 12; m++) {
            var interestM = balance * monthlyRate; //Interest payment for month m
            var principalM = monthlyPayment - interestM; //Principal payment for month m
            interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
        amortization.push({ principalY: principalY, interestY: interestY, balance: balance });
    }
    return { monthlyPayment: monthlyPayment, monthlyRate: monthlyRate, amortization: amortization };
};

document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;

    var _calculateAmortizatio = calculateAmortization(principal, years, rate);

    var monthlyPayment = _calculateAmortizatio.monthlyPayment;
    var monthlyRate = _calculateAmortizatio.monthlyRate;
    var amortization = _calculateAmortizatio.amortization;


    document.getElementById("monthlyPayment").innerHTML = monthlyPayment;

    amortization.forEach(function (month) {
        return console.log(month);
    });
});
//# sourceMappingURL=all.js.map
