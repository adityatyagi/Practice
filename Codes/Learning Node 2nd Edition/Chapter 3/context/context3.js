/*
If you want to specify a filename for the Script object, though, you
need to pass it in when you create the Script object, not in the context function call:
*/

var vm = require('vm');

global.count1 = 100;
var count2 = 100;

var text = 'count1++;' +
    'count2++;' +
    'console.log(count1); console.log(count2);';

var script = new vm.Script(text, { filename: 'count.vm' });

try {
    script.runInThisContext();
} catch (err) {
    console.log(err.stack)
}

// in context2.js, if count2 is not defined, the program will throw an error but it will not show count.vm in the error stack
// here, count2 is not defined again, but the error message shows the count.vm file in error stack.