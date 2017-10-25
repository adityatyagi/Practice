function writeCookie(name, value, days) {
    // by default, the there is no expiration date to a cookie, therefore it works like a variable.
    // it gets destroyed when the browser is reloaded or the page is refreshed
    var expires = "";

    // Specifying the number of days, makes the cookies persistent
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    //set the cookie to name, value and the expiration date
    // e.g of a cookie "name=value expiration3/3/2017;"

    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    // find the specified cookie and return its value
    var searchName = name + "=";
    console.log(searchName);


    // cookies are stored as a list, seprated by ;
    // cookie1; cookie2; cookie3; cookkie4
    // creating a list of the cookies
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        console.log(cookies[i]);
    }

    // iterating over the list and finding the name of the cookie
    for (var i = 0; i < cookies.length; i++) {
        var c = cookies[i];

        while (c.charAt(0) == " ") {
            // this is because there is a space between thwo cookies: cookie1; cookie2; cookie3;
            c = c.substring(1, c.length);
        }

        if (c.indexOf(searchName) == 0) {
            console.log(searchName.length);
            //substring() method extracts the characters in a string between "start" and "end", not including "end" itself.
            return c.substring(searchName.length, c.length); // will start from searchNamer.length and end at c.length-1
        }
    }
    return null;
}

function eraseCookie(name) {
    // Erase the specified cookie
    // 1. You erase a cookie by writing it with no value and putting -1 as the expiration date
    writeCookie(name, "", -1);
}