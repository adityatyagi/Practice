function checkPali(word) {
    string = word.toLowerCase();
    var arr1 = string.split('');
    var validChar = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var letters = [];
    arr1.forEach(char => {
        if (validChar.indexOf(char) > -1) {
            letters.push(char);
        }
    });
    if (letters.join('') === letters.reverse().join('')) answer = true;
    else answer = false;

    return answer;
}

console.log(checkPali('Race Car'));