// Basics of file system
var fs = require('fs');
var util = require('util');

fs.stat('./hello.png', function(err, stats) {
    if (err) console.log(err);
    else {
        console.log(stats);
        console.log('Now with the UTIL module');
        console.log(util.inspect(stats));
    }
});

// Node provides a utility function, for debugging purposes, that returns a string representation of an 
// object. util.inspect() can be a true lifesaver while working with properties of large, complex objects.

// GETTING THE FILE PERMISSIONS USING THE STAT-MODE
var Mode = require('stat-mode');
fs.stat('./hello.png', function(err, stats) {
    if (err) return console.log(err);

    // get permissions
    var mode = new Mode(stats);
    console.log(mode.toString());
    console.log("Group execute: " + mode.group.execute);
    console.log("Others execute: " + mode.group.write);
    console.log("owners execute: " + mode.group.read);
});