function fizzbuzz(num) {
	
    var i = 1;
    for (i; i <= num; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {

            if ((i % 3 === 0) && (i % 5 === 0)) {
                console.log('fizzbuzz ' + i);

            } else if (i % 3 === 0) {
                console.log('fizz ' + i);

            } else if (i % 5 === 0) {
                console.log('buzz ' + i);

            }

        } else {
            console.log(i);
        }
    }
}

fizzbuzz(20);


// if a number is divisible by both 3 and 5, it is then also divisible by 15