// The two console functions we’re using for this functionality are console.time() and 
// console.timeEnd(), passing a timer name to both.
console.time('the-loop');
for (var i = 0; i < 1000000; i++) {}
console.timeEnd('the-loop');

/*
But the timer functionality isn’t limited
to synchronous events. Being able to use a specific name with the timer means we
can use the functionality with asynchronous events.

*/

var http = require('http');
console.time('hello-timer');
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello World\n');
    console.timeEnd('hello-timer');
    console.time('hello-timer');
}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');