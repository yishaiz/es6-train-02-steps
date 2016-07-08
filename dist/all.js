"use strict";

var functions = [];

var _loop = function _loop(i) {

    functions.push(function () {
        console.log(i);
    });
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}

functions.forEach(function (func) {
    func();
});

/*
 for (var i = 0; i < 10; i++) {
 doAsync(function () {
 console.log("Task # " + i + " completed.");
 });
 }

 function doAsync(callback) {
 setTimeout(function () {
 callback();
 }, 1500);
 }

 */

var x = 3;
//# sourceMappingURL=all.js.map
