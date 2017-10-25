// Using async.waterfall to read, modify, and write a file’s contents asynchronously
var fs = require('fs');
var async = require('async');

async.waterfall([

    function readData(callback) {
        fs.readFile('./data/data1.txt', 'utf8', function(err, data) {
            callback(err, data);
        });
    },

    // the first parameter of modify() will be the return value of the previous function i.e readData()
    function modify(text, callback) {
        var adjData = text.replace(/somecompany\.com/g, 'burningbird.net');
        callback(null, adjData);
    },

    // the first parameter of writeData() will be the return value of the previous function i.e modify()
    function writeData(text, callback) {
        fs.writeFile('./data/data1.txt', text, function(err) {
            callback(err, text);
        });
    }


], function(err, result) {
    if (err) {
        console.log(err.message);
    } else {
        console.log(result);
    }
});