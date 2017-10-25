var promise = require('bluebird');

// promisify all the functions of the fs module
var fs = promise.promisifyAll(require('fs'));

fs.readFileAsync('./apples.txt', 'utf8')
    .then(function(data) {
        var adjData = data.replace(/apple/g, 'orange');
        return fs.writeFileAsync('./oranges.txt', adjData);
    })
    .catch(function(error) {
        console.error(error);
    });