function harmlessMagzine(noteText, magzineText) {
    noteArr = noteText.split(' ');
    magArr = magzineText.split(' ');
    console.log(noteArr);
    console.log(magArr);

    // creating object that will have the words and the number of times the words occur
    magzineObj = {}; // empty object

    // creating a hash table
    magArr.forEach(function(element) {
        if (!magzineObj[element]) {
            magzineObj[element] = 0;
        }
        magzineObj[element]++;
    });

    console.log(magzineObj);
    //using a flag to check if note making is possible or not
    var isNotePossible = true;
    noteArr.forEach(word => {
        // there is a difference between magzineObj[word] and magzineObj.word in boolean terms
        // use obj[prop] to check if the object has that property or not
        if (magzineObj[word]) {
            magzineObj[word]--;
            console.log(magzineObj);
            // check the remaining number of the words
            if (magzineObj[word] < 0) {
                isNotePossible = false;
            }
        } else {
            isNotePossible = false;
        }
    });

    return isNotePossible;
}

ans = harmlessMagzine('aditya tyagi', 'my name is aditya tyagi');
console.log(ans);