// Reversing the words of the string while the place of the words remain the same
function revWords(words) {
    wordsArr = words.split(' ');
    //New array with each word reversed
    newArr = [];
    wordsArr.forEach(word => {
        newString = '';
        for (var i = word.length - 1; i >= 0; i--) {
            newString += word[i];
        }
        newArr.push(newString);
    });

    return newArr.join(" ");

}

console.log(revWords('Hello there'));