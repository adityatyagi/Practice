// converting js library into a node module using exports

exports.concatArray = function(str, array) { // will return a object, rather than a function
    return array.map(function(element) { // will return an array
        return str + ' ' + element;
    });
}