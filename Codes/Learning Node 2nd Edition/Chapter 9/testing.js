//testing the inputChecker module made using ES6 Classes
var inputChecker = require('./inputChecker').InputChecker;

// testing new Object and event handling
var ic = new inputChecker('Aditya', 'output');

ic.on('write', function(data) {
    this.writeStream.write(data, 'utf8');
});

ic.addListener('echo', function(data) {
    console.log(this.name + ' wrote: ' + data);
});

ic.on('end', function() {
    process.exit();
});

process.stdin.setEncoding('utf8');
process.stdin.on('data', function(input) {
    ic.check(input);
});