// async.series is used to execute a particular set of functions in series.
var async = require('async');

async.series([
    function functionOne(callback) {
        callback(null, 'Result of functionOne');
    },
    function functionTwo(callback) {
        callback(null, 'Result of functionTwo');
    },
    function functionThree(callback) {
        callback(null, 'Result of functionThree');
    }
], function(err, result) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log(result);
    }
})