// this method uses the File Discriptor to read/write from/into files.
// the advantage to is that you have more finite control of how the file is opened and what you can
// do with it once the file is opened.

// USING ES6

"use strict"

var fs = require('fs');
var util = require('util');
fs.open('./some55.txt', 'a+', 0x666, function(err, fd) {
    if (err) return console.log(err);
    //console.log(util.inspect(fd));

    // file descriptor: fd: it has all the details like mode and flags and name of the file
    // After opening the file in a controlled environment, we write to it
    fs.write(fd, 'First Line of data', 'utf-8', function(err, written) {
        if (err) return console.log(err);
        var buf = new Buffer(written);

        fs.read(fd, buf, 0, written, 0, function(err, bytes, buffer) {
            if (err) return console.log(err);
            console.log(buf.toString('utf8'));
        });
    });
});

// https://www.tutorialspoint.com/nodejs/nodejs_file_system.htm
/*
fs.open(path, flags[, mode], callback)

path − This is the string having file name including path.

flags − Flags indicate the behavior of the file to be opened. All possible values have been mentioned below.

mode − It sets the file mode (permission and sticky bits), but only if the file was created. It defaults to 0666, readable and writeable.

callback − This is the callback function which gets two arguments (err, fd).
*/