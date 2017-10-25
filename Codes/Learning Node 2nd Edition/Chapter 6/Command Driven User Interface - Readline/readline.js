// Using readline to create simple, command driven user interface

var readline = require('readline');

// create a new interface
var rl = readline.createInterface(process.stdin, process.stdout);

// ask questions
rl.question(">> What is your real name? ", function(answer) {
    console.log("Your real name is: " + answer);
    rl.setPrompt(">> ");
    rl.prompt();
});

// function to close the interface
function closeInterface() {
    rl.close();
    console.log('Leaving Readline...');
}

// listen for the command .leave
rl.on('line', function(cmd) {
    if (cmd.trim() == '.leave') {
        closeInterface();
        return;
    }
    console.log("repeating command: " + cmd);
    rl.prompt();
});

rl.on('close', function() {
    closeInterface();
});