/*
Before we can make any sort of Ajax requests, we need to access the relevant object in the browser that facilitates 
asynchronous HTTP requests. window.XMLHttpRequest is your formal object, though it is NOT supported in IE6-, and in IE7,
it's buggy. All other modern browsers support this object correctly. In IE browsers, there is an ActiveX alternative that
can be used instead. Taking all of this into account, we'll roll a cross browser, generic Ajax object that will be the 
foundation for both of our GET and POST Ajax requests moving forward:
*/
function AjaxRequest() {
    var activexmodes = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]; //activeX versions to check for in IE
    if (window.ActiveXObject) { //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
        for (var i = 0; i < activexmodes.length; i++) {
            try {
                return new ActiveXObject(activexmodes[i])
            } catch (e) {
                //suppress error
            }
        }
    } else if (window.XMLHttpRequest) // if Mozilla, Safari etc
        return new XMLHttpRequest();
    else
        return false;
}