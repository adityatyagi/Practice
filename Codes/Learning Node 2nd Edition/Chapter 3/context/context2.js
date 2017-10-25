// Running a script to access the global console without specifying the sandbox
var vm = require('vm');

// specifying the global variables
global.count1 = 100;

// local variable
var count2 = 100;

// creating the text/code to be used in a new context
var text = 'if(count1 === undefined) var count1 = 0; count1++;' + 'if(count2 === undefined) var count2 = 0; count2++;' +
    'console.log(count1); console.log(count2);';

var script = new vm.Script(text);
script.runInThisContext({ filename: 'count.vm' }); // The filename option is used to specify a filename that shows up in stack traces when the script is run.

console.log("--------------------");
console.log(count1);
console.log(count2); // altering the local variable in a different context doesnt change the variable in real.
/*
Changes to the local variable in the sandboxed script do not
impact the local variable of the same name in the containing application.
*/