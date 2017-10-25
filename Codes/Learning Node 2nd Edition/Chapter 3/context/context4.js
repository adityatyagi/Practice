// Instead of writing the code out directly in the application, we can load it from a file.
// Given the following script to run:
var vm = require('vm');
var fs = require('fs');

global.count1 = 100;
var count2 = 100;

var script = new vm.Script(fs.readFileSync('sample.js', 'utf8'));
script.runInThisContext({ filename: 'count.vm' });
console.log('==================')
console.log(count1);
console.log(count2);

/*
What’s to stop us from using the File System module directly in the script? It’s
assigned to a local variable, and not accessible. Why can’t we just import it into the
script? Because require is not available. None of the global objects or functions, such
as require, are accessible in the script.

*/