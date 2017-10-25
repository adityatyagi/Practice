// Creating Asynchronous version of the apples-oranges 
var fs = require('fs');

// async doesnt have try-catch block.
fs.readFile('./apples.txt', 'utf8', function(err, data) {
    if (err) {
        console.log(err);
    } else {
        // after the file is opened and read
        var adjData = data.replace(/[A|a]pple/g, 'mango');
        fs.writeFile('./mangoes.txt', adjData, function(err) {
            if (err) console.log(err);
        });
    }
})