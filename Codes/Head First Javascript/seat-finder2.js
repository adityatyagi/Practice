// global variable
var selSeat = -1; // initially the user has None seats selected

// 2D array of boolean seat availabilty is created
var seats = [
    [false, true, false, true, true, true, false, true, false],
    [false, true, false, false, true, false, true, true, true],
    [true, true, true, true, true, true, false, true, false],
    [true, true, true, false, true, false, false, true, false]
];


function initSeats() {
    // initialise the appearcances of all the seats
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {

            // checking the value of the array element
            if (seats[i][j]) {
                //Set the seat to available
                document.getElementById("seat" + (i * seats[i].length + j)).src = "seat_a.png";
                document.getElementById("seat" + (i * seats[i].length + j)).alt = "Available Seat";
            } else {
                //Set the seat to Unavailable
                document.getElementById("seat" + (i * seats[i].length + j)).src = "seat_u.png";
                document.getElementById("seat" + (i * seats[i].length + j)).alt = "Unavailable Seat";
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
                document.getElementById("seat" + (i * seats[i].length + j)).src = "seat_sel.png";
                document.getElementById("seat" + (i * seats[i].length + j)).alt = "Your Seat";
                document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "seat_sel.png";
                document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Your Seat";
                document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "seat_sel.png";
                document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Your Seat";

                // Prompt the user to confirm the seat selection
                accept = confirm("Seat " + (j + 1) + " through " + (j + 3) + " is available in row " + (i + 1) + ". Accept?");

                // if the user denies (cancels) in confirm box
                if (!accept) {
                    // mark the seat available again
                    selSeat = -1;
                    document.getElementById("seat" + (i * seats[i].length + j)).src = "seat_a.png";
                    document.getElementById("seat" + (i * seats[i].length + j)).alt = "Available Seat";
                    document.getElementById("seat" + (i * seats[i].length + j + 1)).src = "seat_a.png";
                    document.getElementById("seat" + (i * seats[i].length + j + 1)).alt = "Available Seat";
                    document.getElementById("seat" + (i * seats[i].length + j + 2)).src = "seat_a.png";
                    document.getElementById("seat" + (i * seats[i].length + j + 2)).alt = "Available Seat";
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