var exec = require('child_process').exec;
var cd = exec('cd');

cd.stdout.on('data', function(data) {
    console.log(data);
});

cd.stderr.on('data', function(data) {
    console.log(data);
});

cd.on('close', function(code) {
    console.log('Child process exited with code: ' + code);
});