"use strict";

var functions = [];

for (var i = 0; i < 10; i++) {
    functions.push(function () {
        console.log(i);
    });
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
