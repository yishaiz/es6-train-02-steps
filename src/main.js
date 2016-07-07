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

var x='s'
