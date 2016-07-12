class Employee {

    constructor(firstName, lastName)    {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFullName(){
        return `${this._firstName} ${this._lastName}`;
    }

}

class Manager {

    constructor (firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;

        this._managedEmployees = [];
    }

    getFullName(){
        return `${this._firstName} ${this._lastName}`;
    }

    addEmployee(employee){
        this._managedEmployees.push(employee)
    }


getEmployeesNames( ){
    return this._managedEmployees.map (function(item){
        return item.getFullName();
    });
};

 getEmployeesNames2( ){
     return this._managedEmployees.map( item => item.getFullName() );
 };


}


let employee1 = new Employee('Bar', 'Refaeli');
let employee2 = new Employee('Sandi', 'Bar');
let employee3 = new Employee('Yael', 'Bar Zohar');

let manager = new Manager('Super', 'Manager');

manager.addEmployee(employee1);
manager.addEmployee(employee2);
manager.addEmployee(employee3);



console.log("Manager :",  manager.getFullName());

console.log("  Employees of manager :");

manager.getEmployeesNames().forEach(function(employeeName)   {
    console.log('       employee : ', employeeName);
}) ;

console.log("  Employees of manager (other way):");

manager.getEmployeesNames2().forEach(function(employeeName)   {
    console.log('       employee : ', employeeName);
}) ;


/*

manager.getEmployeesNames3().forEach(function(employeeName)   {
    console.log('       employee : ', employeeName);
}) ;
*/



console.log("  Employees of manager (arrow function):");

manager.getEmployeesNames().forEach(     employeeName =>  console.log('  employee : ', employeeName) );

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
