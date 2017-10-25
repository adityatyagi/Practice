//this variable is global in this namespace
var base = 2;

exports.addtwo = function(number) {
    return parseInt(number) + base;
}