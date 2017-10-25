function ConcatArray() {
    console.log('I am in a function constructor');
}

ConcatArray.prototype.joinArray = function(str, array) { // will return a object, rather than a function
    return array.map(function(element) { // will return an array
        return str + ' ' + element;
    });
}
var newAr = new ConcatArray();
module.exports = newAr;