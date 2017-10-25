// In the following, we create a child process to call the Unix pwd command to print the
// current directory.
var spawn = require('child_process').exec;
var cd = spawn('dir');

cd.stdout.on('data', function(data) {
    console.log(data);
});

cd.stderr.on('data', function(data) {
    console.log(data);
});

cd.on('close', function(code) {
    console.log('Child process exited with code: ' + code);
});