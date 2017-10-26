// we use the concatenate functionality of the js
function cc(string, num) {
    num = num % 26; // for numbers greater than 26 and less than -26
    var lowerString = string.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerString.length; i++) {
        // iterating over all the letters of the lowerString like an array
        var currentLetter = lowerString[i];

        // if the letter is a space, we concatenate it into the newString
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue; // continue to the next iteration
        }

        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;

        // Handling the special cases:
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;

        // if there is a uppercase character in the passed string
        if (string[i] === string[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }

    }
    return newString;
}

ho = cc('Hello There', 2)

console.log(ho);