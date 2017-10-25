// A simple TCP server, with a socket listening for client communication on port 8124
var net = require('net');
const PORT = 8124;

var server = net.createServer(function(conn) {
    console.log('connected');

    conn.on('data', function(data) {
        console.log(data + ' from ' + conn.remoteAddress + ' and port: ' + conn.remotePort);

        // send back the data to the client
        conn.write('Repeating: ' + data);
    });

    conn.on('close', function() {
        console.log('Client closed the connection');
    });
}).listen(PORT);

server.on('listening', function() {
    console.log('Listening on Port: ' + PORT);
});

// if the port 8124 is in use by some other connection, then retry connecting to it after 1 sec
server.on('error', function(err) {
    if (err.code == 'EADDRINUSE') {
        console.warn('Address in use, retrying...');
        setTimeout(() => {
            server.close();
            server.listen(PORT);
        }, 1000);
    } else {
        console.log(err);
    }
});