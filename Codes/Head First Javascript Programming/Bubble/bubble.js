// we are given with a set of parallel arrays.
// All the functions should be together. 

var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];



function displayAndGetHighScore(score) {
    var highScore = 0;
    var output;
    for (var i = 0; i < score.length; i++) {
        output = "Bubble Solution #" + i + " has a score of " + score[i];
        console.log(output + "\n");

        // finding out the highest score
        if (score[i] > highScore) {
            highScore = score[i];
        }
    }
    return highScore;
}


// to get the best solutions
function getBestSolutions(score, highScore) {
    var bestSolutions = [];
    for (var i = 0; i < score.length; i++) {
        if (score[i] == highScore) {
            bestSolutions.push(i); // push the index of the test with highest scores
        }
    }
    return bestSolutions; // returning an array
}

// to get the most effective solution
/* 
The most effective solution will have the highest score and the lowest cost. 

The pseudocode for the function is:
FUNCTION GETMOSTCOSTEFFECTIVESOLUTION (SCORE, COSTS, HIGHSCORE)
    DECLARE a variable cost and set to 100.
    DECLARE a variable index.
    FOR: var i=0; i < scores.length; i++
        IF the bubble solution at score[i] has the highest score
            IF the current value of cost is greater than the cost of the bubble solution
                THEN
                SET the value of index to the value of i
                SET the value of cost to the cost of the bubble solution
            END IF
        END IF
    END FOR
    RETURN index
*/

function getMostEffectiveSolution(score, costs, highScore) {
    var currentCost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (score[i] == highScore) {
            if (costs[i] < currentCost) {
                console.log(i);
                console.log(score[i]);
                console.log(costs[i]);
                index = i;
                currentCost = costs[i];
            }
        }
    }
    return index;
}


var highScore = displayAndGetHighScore(scores);
console.log(highScore);
console.log("The number of tests are: " + scores.length);

var bestSolutions = getBestSolutions(scores, highScore);
console.log("The test with best solutions are: " + bestSolutions);

var index = getMostEffectiveSolution(scores, costs, highScore);
console.log("The index of the most effective solution is: " + index);