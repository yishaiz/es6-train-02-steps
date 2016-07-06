'use strict';

var calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
    var monthlyRate = 0;

    var name = 'yishai';

    debugger;

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

//document.getElementById('calcBtn').addEventListener('click', function () {
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

    //add template string:
    var html = "";
    amortization.forEach(function (year, index) {
        return html += '\n    <tr>\n        <td>' + (index + 1) + '</td>\n        <td class="currency">' + Math.round(year.principalY) + '</td> \n        <td class="stretch">\n    <div class="flex">\n    <div class="bar principal"\nstyle="flex:' + year.principalY + ';-webkit-flex:' + year.principalY + '">\n    </div>\n    <div class="bar interest"\nstyle="flex:' + year.interestY + ';-webkit-flex:' + year.interestY + '">\n    </div>\n    </div>\n    </td>\n    <td class="currency left">' + Math.round(year.interestY) + '</td>\n    <td class="currency">' + Math.round(year.balance) + '</td>\n    </tr>\n    ';
    });

    document.getElementById("amortization").innerHTML = html;
});
//# sourceMappingURL=all.js.map
