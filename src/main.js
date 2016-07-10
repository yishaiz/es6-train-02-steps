let calculateMonthlyPayment = function (principal, years, rate) {
    let monthlyRate = 0;

    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});


//Calculated Properties

let prefix = 'user';
let data = {
    [prefix + 'name']: 'bar',
    [prefix + 'type']: 'model'
};
// { username: 'bar', usertype: 'model' }


function f(x, ...y) {
    // y is an Array
    return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
    return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
