// adding the eventEmitter functionality to objects using prototypal inheritance
// CREATING AN EVENT BASED OBJECT THAT INHERITS FROM EVENTEMITTER
"use strict";
var util = require('util');
var eventEmitter = require('events').EventEmitter;
var fs = require('fs');

// Object Constructor
function InputChecker(name, file) {
    this.name = name;
    this.writeStream = fs.createWriteStream('./' + file + '.txt', {
        'flags': 'a',
        'encoding': 'utf8',
        'mode': '0o666'
    });
}

util.inherits(InputChecker, eventEmitter);

// Adding a function to the prototype of the InputChecker object
InputChecker.prototype.check = function check(input) {
    let command = input.trim().substr(0, 3);

    // process command
    // if wr, write input to file
    if (command == 'wr:') {
        this.emit('write', input.substr(3, input.length));
    }

    // if en. end the process
    else if (command == 'en:') {
        this.emit('end');
    }

    // echo back to the standard output
    else {
        this.emit('echo', input);
    }
};

// testing new object and event handling

let ic = new InputChecker('Aditya', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.on('echo', function(data) {
    process.stdout.write(ic.name + ' wrote => ' + data); // process.stdout.write is used to write directly to the terminal
});

ic.on('end', function() {
    process.exit();
});

// capture input after setting encoding
process.stdin.setEncoding('utf8'); // without this, the input will be stored in buffer and then we have to use toString()

process.stdin.on('readable', function() {
    let input = process.stdin.read(); // read the user's input from the terminal
    if (input !== null) {
        ic.check(input);
    }
});