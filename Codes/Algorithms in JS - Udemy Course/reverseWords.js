// 1. reversing a string using the in-built js functions
// Here we are also reversing the entire string: This should not happen at all.
// The strings should be the same but the words must be reversed in there place.
function reverseWords(str) {

    var stringArray = str.split('');
    console.log(stringArray);
    var newStringArray = stringArray.reverse();
    console.log(newStringArray);
    var revString = newStringArray.join("");

    return revString;
}

console.log(reverseWords('hello there'));


// 2. reversing the string using the for loop
function revStrFor(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(revStrFor('hello Aditya Tyagi'));


// 3. Reversing the string using recursion
function revStringRec(string) {
    if (string === "") return "";
    else return revStringRec(string.substr(1)) + string.charAt(0); // + has L-R associavity
}
console.log(revStringRec('Hello'));