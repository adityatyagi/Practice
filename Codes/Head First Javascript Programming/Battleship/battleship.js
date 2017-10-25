var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc,
    location2 = randomLoc + 1,
    location3 = randomLoc + 2;
var guess;
var hits = 0,
    guesses = 0;

var isSunk = false;

while (isSunk === false) {
    guess = prompt("Enter your attack location (between 0 and 6): ");

    // check the user validation
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid attack location (between 0 and 6): ");
    } else {
        guesses += 1;

        // validating if it's a HIT
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("HIT!")
            hits += 1;

            // validating if the ship sank or not
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship.")
            }
        } else {
            alert("MISS!");
        }
    }
}

var stats = "You took " + guesses + " guesses to sink my battleship, and your accuracy is " + (3 / guesses) + ".";
alert(stats);