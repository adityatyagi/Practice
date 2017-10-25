var cp = require('child_process'),
    cp1 = cp.fork('server2.js'),
    http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('handled by parent\n');
});

server.on('listening', function() {
    cp1.send('server', server); // msg, httpServer
});
server.listen(3000);

/*
Order of execution: listening -> request
if we remove the server.on('listening'), then the 'request' will run and the request will be handled by parent
*/