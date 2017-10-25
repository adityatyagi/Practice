// Directory Access and Maintainance
/*
in the following code the files in the current directory are listed out, and if any are 
compressed (extension of .gz), they’re unlinked.

*/
"use strict"

var fs = require('fs');
var path = require('path');

fs.readdir('./', function(err, files) {
    for (let file of files) {
        console.log(file);
        if (path.extname(file) == 'gz') {
            fs.unlink('./' + file);
        }
    }
});