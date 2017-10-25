["apple", "mango"]
_.length
var ssre = /^\d{3}-\{2}-\d{4}$/;
ssre.test('555-55-5555');
var ssre = /^\d{3}-\d{2}-\d{4}$/;
ssre.test('555-55-5555');
var decRe = /^\s*(\+|-)?((\d+(\.\d+)?)|(\.\d+))\s*$/;
decRe.test(56.5)
var myFruit = function(fruitArray, pickone) {
    return fruitArray[pickone - 1]
}
fruit = ['apples', 'oranges', 'limes', 'cherries'];
myFruit(fruit, 2);