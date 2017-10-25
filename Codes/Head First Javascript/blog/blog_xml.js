window.onload = function(event) {
    showBlog(1);
}


// the constructor now focuses on only creating and initializing the properties.
// image is just a string for the object
function Blog(date, body, image) { // optional "image" argument is always set to last in the argument list

    this.date = date; // Date object
    this.body = body; // String Object
    this.image = image; // optional is always at the last, and if nothing comes from the constructor, then = null
}




// return a string representation of the blog entry
Blog.prototype.toString = function() {
    return "[" + (this.date.getMonth() + 1) + "/" + (this.date.getDate()) + "/" + (this.date.getFullYear()) + "] =>  " + (this.body);
}

// return a formatted HTML blog post
Blog.prototype.toHTML = function(highlight) {
    var blogHTML = "";
    blogHTML += highlight ? "<p style='background-color: #eeeeee'>" : "<p>";

    if (this.image) {
        blogHTML += "<strong>" + (this.date.getMonth() + 1) + "/" + (this.date.getDate()) + "/" + (this.date.getFullYear()) + "</strong><br />" + (this.body) + "</p><table><tr><td><img src='" + this.image + "'</td></tr></table><p>By: " + (this.signature) + "</p><hr>";
    } else {
        blogHTML += "<strong>" + (this.date.getMonth() + 1) + "/" + (this.date.getDate()) + "/" + (this.date.getFullYear()) + "</strong><br />" + (this.body) + "</p><p>By: " + (this.signature) + "</p><hr>";
    }
    //Generate the formatted HTML code
    return blogHTML;
}

// method to search for a substring
Blog.prototype.containsText = function(text) {
    return ((this.body.toLowerCase().indexOf(text.toLowerCase()) !== -1));
}

// Class property
Blog.prototype.signature = "Aditya Tyagi";


// blog array is a global array and any function can use it
var blog = [
    new Blog(new Date("08/14/2017"), "Hello", "seat_a.png"),
    new Blog(new Date("08/16/2017"), "There"),
    new Blog(new Date("08/15/2017"), "Aditya"),
    new Blog(new Date("08/13/2017"), "Tyagi"),
];

// show the list of blog entries
function showBlog(numEntries) {

    // sort the blog
    blog.sort(Blog.blogSorter);

    if (!numEntries) {
        numEntries = blog.length;
    }

    var i = 0,
        blogListHTML = "";
    while (i < numEntries && i < blog.length) {
        // using gray bg for alternate  blog entry
        blogListHTML += blog[i].toHTML(i % 2 === 0);
        i++;
    }

    // Set the blogText the HTML page
    document.getElementById("blogs").innerHTML = blogListHTML;

}

function getDaysBetween(date1, date2) {
    var daysBetween = (date2 - date1) / (1000 * 60 * 60 * 24);
    return Math.round(daysBetween);
}


/*
// blog1 and blog2 are Blog objects as the array contains the Blog objects.
// blog2.date-blog1.date results in reverse choronological order.
// the two dates are subtracted in milliseconds.
function blogCompare(blog1, blog2) {
    return blog2.date - blog1.date;
}

blog.sort(blogCompare);
*/


// Creating CLASS - MEHTODS
Blog.blogSorter = function(blog1, blog2) {
    return blog2.date - blog1.date;
}

// function to search the entire blog for a particular string
function searchBlog() {
    var searchText = document.getElementById("searchText").value;

    // iterate through the blog
    for (var i = 0; i < blog.length; i++) {
        if (blog[i].containsText(searchText)) {
            //alert(blog[i].toString());
            alert(blog[i]); // the Blog object automatically calls the toString() method as alert expects a string.
            break;
        }
    }

    // If the search text wasn't found, display a message
    if (i == blog.length) {
        alert("Sorry, there are no blogs of such kind. ");
    }
}


// choose any random blog and display it in an alert from the blog array
function randomBlog() {
    // value of i varies between 0 and one less than the blog array's length.
    var i = Math.floor(Math.random() * blog.length);
    console.log(i); // repeated values of i shows it is not completely random but pseudorandom. 
    alert(blog[i]);

}

// Extending the Date object, which is a built-in object of JS
Date.prototype.shortFormat = function() {
    return ((this.date.getMonth() + 1) + "/" + (this.date.getDate()) + "/" + (this.date.getFullYear()));
};