/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mortgage = __webpack_require__(1);
	
	// console.log (mortgage.otherFnction());
	
	document.getElementById('calcBtn').addEventListener('click', function () {
	    var principal = document.getElementById("principal").value;
	
	    var years = document.getElementById("years").value;
	    var rate = document.getElementById("rate").value;
	
	    // let {monthlyPayment, monthlyRate, amortization} = calculateAmortization (principal, years, rate);
	    // let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization (principal, years, rate);
	
	    var _calculateAmortizatio = (0, _mortgage.calculateAmortization)(principal, years, rate);
	
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
	
	/*
	
	 let calculateMonthlyPayment = (principal, years, rate) => {
	 let monthlyRate = 0;
	
	 let name='yishai';
	
	 debugger;
	
	 if (rate) {
	 monthlyRate = rate / 100 / 12;
	 }
	 let monthlyPayment = principal * monthlyRate /
	 (1 - (Math.pow(1/(1 + monthlyRate), years * 12)));
	
	
	 return {principal,
	 years,
	 rate,
	 monthlyPayment,
	 monthlyRate
	 }
	
	 };
	
	 let calculateAmortization = (principal, years, rate) => {
	 let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
	 let balance = principal;
	 let amortization = [];
	 for (let y=0; y<years; y++) {
	 let interestY = 0;  //Interest payment for year y
	 let principalY = 0; //Principal payment for year y
	 for (let m=0; m<12; m++) {
	 let interestM = balance * monthlyRate;       //Interest payment for month m
	 let principalM = monthlyPayment - interestM; //Principal payment for month m
	 interestY = interestY + interestM;
	 principalY = principalY + principalM;
	 balance = balance - principalM;
	 }
	 amortization.push({principalY, interestY, balance});
	 }
	 return {monthlyPayment, monthlyRate, amortization};
	 };
	 */
	
	// require('./mortgage.js')
	
	// import * as mortgage from './mortgage';
	var sqrt = Math.sqrt;
	
	function square(x) {
	    return x * x;
	}
	
	function diag(x, y) {
	    return sqrt(square(x) + square(y));
	}
	
	module.exports = {
	    sqrt: sqrt,
	    square: square,
	    diag: diag
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var calculateMonthlyPayment = exports.calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
	    var monthlyRate = 0;
	    if (rate) {
	        monthlyRate = rate / 100 / 12;
	    }
	    var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
	    return { principal: principal, years: years, rate: rate, monthlyPayment: monthlyPayment, monthlyRate: monthlyRate };
	};
	
	var calculateAmortization = exports.calculateAmortization = function calculateAmortization(principal, years, rate) {
	
	    debugger;
	
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
	
	var otherFnction = exports.otherFnction = function otherFnction() {
	    return 'hello world';
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map