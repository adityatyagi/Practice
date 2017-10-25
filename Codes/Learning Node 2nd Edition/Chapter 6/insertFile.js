// modifying an existing file by inserting a string 
// r+ : read + write
var fs = require('fs');
fs.open('./working.txt', 'r+', function(err, fd) {
    if (err) return console.error(err);
    var writable = fs.createWriteStream(null, {
        fd: fd,
        start: 10,
        defaultEncoding: 'utf8'
    });
    writable.write(' inserting this text ');
});

var readable = fs.createReadStream('./working.txt').setEncoding('utf8');

var data = '';
readable.on('data', function(chunk) {
    data += chunk;
});

readable.on('end', function(err) {
    console.log(data);
});



var writable2 = fs.createWriteStream('./working3.txt');
readable.pipe(writable2);
var readable2 = fs.createReadStream('./working3.txt').setEncoding('utf8');
var data2 = '';
readable2.on('data', function(err, chunk) {
    if (err) return console.log(err);
    data += chunk;
});
readable2.on('end', function() {
    console.log(data);
});