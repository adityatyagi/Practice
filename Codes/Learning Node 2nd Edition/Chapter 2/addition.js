var add = require('./add2').addtwo;

// this is a global variable in this namespace
var base = 10;
console.log(add(12));

// prints out all the globally available objects and functions.
console.log(global);