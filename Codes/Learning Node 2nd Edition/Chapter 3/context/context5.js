// The last sandbox function is runInContext().
// It also takes a sandbox, but the sandbox
// must be contextualized (context explicitly created) before the function call.

var vm = require('vm');
var util = require('util');

// contextualising the sandbox
var sandbox = {
    count1: 1
};

vm.createContext(sandbox);
if (vm.isContext(sandbox)) {
    console.log('Contextualised');
}

vm.runInContext('count1++; counter=true;', sandbox, { filename: 'count.vm' });

console.log(util.inspect(sandbox));