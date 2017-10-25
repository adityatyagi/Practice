/*
The only safe way to execute an arbitrary chunk of JavaScript is in a separate process.
However, if you’re comfortable with the source of the JavaScript but are interested in avoiding unintended and 
accidental consequences, then you can isolate that script from your local environment with VM.
*/
var vm = require('vm');

// specifying the context of the sandbox in a object literal format
var sandbox = {
    process: 'this baby',
    require: 'that',
    console: console // Here, addition of console is important as this is the only way i can access global node objects
};

vm.runInNewContext('console.log(process); console.log(require)', sandbox);