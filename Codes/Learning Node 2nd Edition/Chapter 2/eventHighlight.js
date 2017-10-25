var http = require('http');
var server = http.createServer();

// there are 3 events now:
// connection, request and listening 


// the browser will fire two requests, for resources and for favicon.ico
server.on('request', function(req, res) {
    console.log('request event');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

server.on('connection', function() {
    console.log('Connection Event');
});

server.listen(3000, function() {
    console.log('Listening Event');
});

console.log('The server is listening at localhost: 3000');