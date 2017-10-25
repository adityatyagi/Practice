/*
To create a new instance of Console, we either need to import the Console class or
access it via the global console object. Both of the following result in a new consolelike
object:

console.log()
console.info()
console.warn()
console.error()
console.dir() -> whatever object is passed to it, it is then passed to util.inspect()

*/
// importing the class Console
var Console = require('console').Console;
var cons = new Console(process.stdout, process.stderr);
cons.log("hi");

// creating my own logger
//var logger = new Console(process.stdout, process.stderr);
//logger.log("My personal logger");

// Directing the log and the error messages to two different files
var fs = require('fs');
var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');

// custom sample logger
var logger = new Console(output, errorOutput);
var count = 5;
logger.log(count); // this will not be logged in the terminal like console.log() does.
// This will be written in the file stdout.log