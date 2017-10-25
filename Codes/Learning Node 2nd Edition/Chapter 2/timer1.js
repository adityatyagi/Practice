// setTimeout and setInterval
// setTimeout() function is asynchronous.
setTimeout(function(name) {
    console.log("My name is " + name);
}, 2000, 'Aditya');
console.log('Waiting on timer');

var timer1 = setTimeout(function(name) {
    console.log('This is ' + name);
}, 30000, 'Saksham');

// now cancelling timer1 before it completes its 30 sec
setTimeout(function(timer) {
    clearTimeout(timer);
    console.log('Timer cleared');
}, 3000, timer1);

// Note:
/*
setImmediate() has precedence over setTimeout and setInterval(), but doesn't have precedence over I/O events.
The setIm
setImmediate() event is emitted after all I/O events, before any timer events, and in the current event queue.
*/