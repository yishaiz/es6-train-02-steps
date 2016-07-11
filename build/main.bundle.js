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
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Employee = function () {
	    function Employee(firstName, lastName) {
	        _classCallCheck(this, Employee);
	
	        this._firstName = firstName;
	        this._lastName = lastName;
	    }
	
	    _createClass(Employee, [{
	        key: 'getFullName',
	        value: function getFullName() {
	            return this._firstName + ' ' + this._lastName;
	        }
	    }]);
	
	    return Employee;
	}();
	
	var Manager = function (_Employee) {
	    _inherits(Manager, _Employee);
	
	    function Manager(firstName, lastName) {
	        _classCallCheck(this, Manager);
	
	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Manager).call(this, firstName, lastName));
	
	        _this._managedEmployees = [];
	        return _this;
	    }
	
	    _createClass(Manager, [{
	        key: 'addEmployee',
	        value: function addEmployee(employee) {
	            this._managedEmployees.push(employee);
	        }
	    }, {
	        key: 'getEmployeesNames',
	        value: function getEmployeesNames() {
	            return this._managedEmployees.map(function (item) {
	                return item.getFullName();
	            });
	        }
	    }, {
	        key: 'getEmployeesNames2',
	        value: function getEmployeesNames2() {
	            return this._managedEmployees.map(function (item) {
	                return item.getFullName();
	            });
	        }
	    }]);
	
	    return Manager;
	}(Employee);
	
	var employee1 = new Employee('Bar', 'Refaeli');
	var employee2 = new Employee('Sandi', 'Bar');
	var employee3 = new Employee('Yael', 'Bar Zohar');
	
	var manager = new Manager('Super', 'Manager');
	
	manager.addEmployee(employee1);
	manager.addEmployee(employee2);
	manager.addEmployee(employee3);
	
	console.log("Manager :", manager.getFullName());
	
	console.log("  Employees of manager :");
	
	manager.getEmployeesNames().forEach(function (employeeName) {
	    console.log('       employee : ', employeeName);
	});
	
	console.log("  Employees of manager (other way):");
	
	manager.getEmployeesNames2().forEach(function (employeeName) {
	    console.log('       employee : ', employeeName);
	});
	
	/*
	
	manager.getEmployeesNames3().forEach(function(employeeName)   {
	    console.log('       employee : ', employeeName);
	}) ;
	*/
	
	console.log("  Employees of manager (arrow function):");
	
	manager.getEmployeesNames().forEach(function (employeeName) {
	    return console.log('  employee : ', employeeName);
	});
	
	//
	// console.log("  Employees of manager (arrow function - new):");
	//
	// manager.getEmployeesNames3().forEach(     employeeName =>  console.log('  employee : ', employeeName) );

	/*class Employee {
	    constructor(firstName, familyName) {
	        this._firstName = firstName;
	        this._familyName = familyName;
	    }

	    getFullName() {
	        return `${this._firstName} ${this._familyName}`;
	    }
	}

	class Manager {
	    constructor(firstName, familyName) {
	        this._firstName = firstName;
	        this._familyName = familyName;
	        this._managedEmployees = [];
	    }

	    getFullName() {
	        return `${this._firstName} ${this._familyName}`;
	    }

	    addEmployee(employee) {
	        this._managedEmployees.push(employee);
	    }
	}*/

	/*
	class Mortgage {

	    constructor(principal, years, rate) {
	        this.principal = principal;
	        this.years = years;
	        this.rate = rate;

	        // this.privateMember ='xxx';
	        // let privateMember2 ='xxx';
	    }

	    get monthlyPayment() {
	        let monthlyRate = this.rate / 100 / 12;
	        return this.principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate),
	                this.years * 12)));
	    }

	    get amortization() {
	        let monthlyPayment = this.monthlyPayment;
	        let monthlyRate = this.rate / 100 / 12;
	        let balance = this.principal;
	        let amortization = [];

	        for (let y = 0; y < this.years; y++) {
	            let interestY = 0;
	            let principalY = 0;
	            for (let m = 0; m < 12; m++) {
	                let interestM = balance * monthlyRate;
	                let principalM = monthlyPayment - interestM;
	                interestY = interestY + interestM;
	                principalY = principalY + principalM;
	                balance = balance - principalM;
	            }
	            amortization.push({principalY, interestY, balance});
	        }
	        return amortization;
	    }

	}




	// require('./mortgage.js')

	// let calculateAmortization = null;

	// import {calculateAmortization}   from './mortgage';


	document.getElementById('calcBtn').addEventListener('click', ()=> {
	    let principal = document.getElementById("principal").value;

	    let years = document.getElementById("years").value;
	    let rate = document.getElementById("rate").value;

	    // let {monthlyPayment, monthlyRate, amortization} =  calculateAmortization(principal, years, rate);
	    let mortgage = new Mortgage(principal, years, rate);

	    // document.getElementById("monthlyPayment").innerHTML = monthlyPayment;
	    document.getElementById("monthlyPayment").innerHTML = mortgage.monthlyPayment.toFixed(2);
	// debugger;
	// console.log(mortgage.privateMemver);

	    // amortization.forEach(month => console.log(month));

	});

	*/

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map