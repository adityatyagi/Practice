// formatting the message using util.format() and util.inspect()

var test = {
    a: {
        b: {
            c: {
                d: {
                    e: 'test'
                }
            }
        }
    }
}

// only two level of nesting is printed
console.log(test);

// 3 levels of nesting is printed
var str = JSON.stringify(test, null, 3);
console.log(str);


var val = 5.6;
var string = "a string";

console.log("The value of the val variable is %d and the string is: %s", val, string);

// creating a string using util.format()
var util = require('util');
var variable = 10.5;
var string2 = "name is Aditya Tyagi";

var msg = util.format("The value of the variable is %d and -> %s", variable, string2);
console.log(msg);

// console.dir() -> whatever object is passed to it, it is then passed to util.inspect()
console.log(util.inspect.styles);
console.log(util.inspect.colors);


// Different formating options to print out the object
var today = new Date();

var test = {
    a: {
        b: {
            c: {
                d: 'test'
            },
            c2: 3.50
        },
        b2: true
    },
    a2: today
}

util.inspect.styles.boolean = 'blue';

// output with util.inspect direct formatting
var str = util.inspect(test, { depth: 4, colors: true });
console.log(str);

// output using console.dir and options
console.dir(test, { depth: 4, colors: true });

// output using basic console.log
console.log(test);

// and JSON stringify
console.log(JSON.stringify(test, null, 4));