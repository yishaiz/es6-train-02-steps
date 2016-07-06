let calculateMonthlyPayment = function(principal, years, rate) {
    let monthlyRate = 0;

    let name='yishai';

    debugger;

    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate /
        (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));

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
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;


//    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    let {monthlyPayment, monthlyRate} =
        calculateMonthlyPayment(principal, years, rate);


    // document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);

    document.getElementById("monthlyPayment").innerHTML = monthlyPayment;
});

