// using function references to seprate the html and the javascript

//window.onload = initSeats;
window.onload = function(event) {
    initSeats();

    // wire the find 3 consequtive seats button
    document.getElementById("find").onclick = findSeat;

    document.getElementById("seat0").onclick = function(event) { getSeatStatus(0); };
    document.getElementById("seat1").onclick = function(event) { getSeatStatus(1); };
    document.getElementById("seat2").onclick = function(event) { getSeatStatus(2); };
}



// global variable
var selSeat = -1; // initially the user has None seats selected

// 2D array of boolean seat availabilty is created
var seats = [
    [false, true, false, true, true, true, false, true, false],
    [false, true, false, false, true, false, true, true, true],
    [true, true, true, true, true, true, false, true, false],
    [true, true, true, false, true, false, false, true, false]
];


// generic function to display the images
// seatNum, status: image, description: alt, are the 3 things that are different in the code and hence
// they are the arguments of the function.
// status for the seats:
// a = available, u = unavailable, sel = selected and it is your seat 
function setSeat(seatNum, status, description) {
    document.getElementById('seat' + seatNum).src = "seat_" + status + ".png";
    document.getElementById('seat' + seatNum).alt = description;
}



function initSeats() {
    // initialise the appearcances of all the seats
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {

            // checking the value of the array element
            if (seats[i][j]) {
                //Set the seat to available
                setSeat(i * seats[i].length + j, "a", "Seat Available");
            } else {
                //Set the seat to Unavailable
                setSeat(i * seats[i].length + j, "u", "Seat Unavailable");
            }
        }
    }
}


function findSeat() {

    // make sure that the first time, no seat is selected by any user
    if (selSeat > 0) {
        selSeat = -1;
        initSeats();
    }

    var i = 0;
    var finished = false;


    // Using the while loop to iterate through the rows and checking the finished flag
    while ((i < seats.length) && (!finished)) {

        // using the for loop to iterate through the columns
        for (var j = 0; j < seats[i].length; j++) {

            if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
                selSeat = i * seats[i].length + j; // any value greater than 0 tells the seat is taken

                // mark the selected seats
                // setSeat(seatNum, status, description)
                setSeat(i * seats[i].length + j, "sel", "Your Seat");
                setSeat(i * seats[i].length + j + 1, "sel", "Your Seat");
                setSeat(i * seats[i].length + j + 2, "sel", "Your Seat");

                // Prompt the user to confirm the seat selection
                accept = confirm("Seat " + (j + 1) + " through " + (j + 3) + " is available in row " + (i + 1) + ". Accept?");

                // if the user denies (cancels) in confirm box
                if (!accept) {
                    // mark the seat available again
                    selSeat = -1;
                    setSeat(i * seats[i].length + j, "a", "Seat Available");
                    setSeat(i * seats[i].length + j + 1, "a", "Seat Available");
                    setSeat(i * seats[i].length + j + 2, "a", "Seat Available");


                } else {
                    alert("Seats Confirmed!");
                    finished = true;
                    break;
                }

            }

        }

        i++;

    }


}

function getSeatStatus(seatNum) {
    if (selSeat != -1 && (seatNum === selSeat) || (seatNum === (selSeat + 1)) || (seatNum === (selSeat + 2))) {
        alert("yours");
    } else if (seats[Math.floor(seatNum / seats[0].length)][seatNum % seats[0].length]) {
        alert("available");
    } else {
        alert("unavailable");
    }
}