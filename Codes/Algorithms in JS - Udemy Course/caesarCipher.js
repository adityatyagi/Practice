function caesarCipher(word, num) {
    num = num % 26; // 26 is the length of the validChar
    string = word.split('');

    validChar = "abcdefghijklmnopqrstuvwxyz".split('');

    newArray = [];
    string.forEach(char => {

        if (validChar.indexOf(char) > -1 || char === ' ') {

            if (char === ' ') {
                newArray.push(char);
            } else {
                index = validChar.indexOf(char);
                index += num;
                if (!(index <= 25)) {
                    index = index - 26; // 26 is the length of the alphabet array
                }
                newChar = validChar.join('').charAt(index);

                newArray.push(newChar);
            }

        }

    });
    return newArray.join('');
}
var newString = caesarCipher('hello there aditya', -27);
console.log(newString);