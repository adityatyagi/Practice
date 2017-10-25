// read and write directtly into the files
var fs = require('fs');
var data = 'This is another text, this will replace the first one.';

// the data will be stored in the buffer format
fs.writeFile('./some.txt', data, function(err) {
    if (err) return console.log(err);

    // reading the file once the data has been written to it
    fs.readFile('./some.txt', 'utf8', function(err, data) {
        if (err) return console.log(err);
        else {
            // console.log(data.toString()); if the encoding is not set
            console.log(data);
        }
    })
});