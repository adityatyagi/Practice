// async.parallel helps to execute certain set of functions simultaneously and then log the results together
// OPENING 3 FILES IN PARALLEL AND READING THEIR CONTENTS

var fs = require('fs');
var async = require('async');

async.parallel({
    data1: function(callback) {
        fs.readFile('./asyncData/data1.txt', 'utf8', function(err, data) {
            callback(err, data);
        });
    },
    data2: function(callback) {
        fs.readFile('./asyncData/data2.txt', 'utf8', function(err, data) {
            callback(err, data);
        });
    },
    data3: function(callback) {
        fs.readFile('./asyncData/data3.txt', 'utf8', function(err, data) {
            callback(err, data);
        });
    }

}, function(err, result) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log(result);
    }
})