// global variable
var selSeat = -1; // initially the user has None seats selected

var seats = [false, true, false, true, true, true, false, true, false];


function initSeats() {
    // initialise the appearcances of all the seats
    for (var i = 0; i < seats.length; i++) {

        // dynamically loading the images in the frontend
        if (seats[i]) {
            //Set the seat to available
            document.getElementById("seat" + i).src = "seat_a.png";
            document.getElementById("seat" + i).alt = "Available Seat";
        } else {
            //Set the seat to Unavailable
            document.getElementById("seat" + i).src = "seat_u.png";
            document.getElementById("seat" + i).alt = "Unavailable Seat";
        }
    }
}


function findSeat() {

    // make sure that the first time, no seat is selected by any user
    if (selSeat > 0) {
        selSeat = -1;
        initSeats();
    }

    // Finding 3 consequtive seats
    for (var i = 0; i < seats.length; i++) {
        // checking if the current seat along with the next two seats are available or not
        if (seats[i] && seats[i + 1] && seats[i + 2]) {
            selSeat = i; // any value greater than 0 tells the seat is taken

            // mark the selected seats
            document.getElementById("seat" + i).src = "seat_sel.png";
            document.getElementById("seat" + i).alt = "Your Seat";
            document.getElementById("seat" + (i + 1)).src = "seat_sel.png";
            document.getElementById("seat" + (i + 1)).alt = "Your Seat";
            document.getElementById("seat" + (i + 2)).src = "seat_sel.png";
            document.getElementById("seat" + (i + 2)).alt = "Your Seat";

            // Prompt the user to confirm the seat selection
            accept = confirm("Seat " + (i + 1) + " through " + (i + 3) + " is available. Accept?");

            // if the user denies (cancels) in confirm box
            if (!accept) {
                // mark the seat available again
                selSeat = -1;
                document.getElementById("seat" + i).src = "seat_a.png";
                document.getElementById("seat" + i).alt = "Available Seat";
                document.getElementById("seat" + (i + 1)).src = "seat_a.png";
                document.getElementById("seat" + (i + 1)).alt = "Available Seat";
                document.getElementById("seat" + (i + 2)).src = "seat_a.png";
                document.getElementById("seat" + (i + 2)).alt = "Available Seat";
            } else {
                alert("Seats Confirmed!");
                break;
            }

        }


    }
}









/*
Seat selection for 1 seat



function findSeat() {
    // if the seat is already selected, re-initialise all the seats to clear them
    if (selSeat > 0) {
        selSeat = -1;
        initSeats();
    }

    // Search through all the seats for availablity
    // this will go in pair with the array seats, which already have the seat status
    for (var i = 0; i < seats.length; i++) {
        // see, if the current seat is available or not
        if (seats[i]) {
            selSeat = i; // any value >0 for selSeat signifies that it is selected

            //Set the seat to Selected
            document.getElementById("seat" + i).src = "seat_sel.png";
            document.getElementById("seat" + i).alt = "Your Seat";

            // Prompt the user to confirm the seat selection
            accept = confirm("Seat " + (i + 1) + " is available. Accept?");

            // if the user denies (cancels) in confirm box
            if (!accept) {
                // mark the seat available again
                selSeat = -1;
                document.getElementById("seat" + i).src = "seat_a.png";
                document.getElementById("seat" + i).alt = "Available Seat";
            } else {
                alert("Seat Confirmed!");
                break;
            }
        }
    }
}

*/