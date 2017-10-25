var http = require('http');

var server = http.createServer().listen(3000);

server.on('request', function(req, res) {
    console.log(req.headers);
    console.log('----------------------')
    console.log(req.rawHeaders);
    console.log('-------------')
    console.log(req.headers.host);
    console.log(req.rawHeaders[0] + ' is ' + req.rawHeaders[1]);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
});

console.log('The server is listening on localhost:3000');