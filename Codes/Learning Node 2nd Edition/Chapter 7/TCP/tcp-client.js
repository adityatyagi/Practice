// The client socket sending data to the server
var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');

// connect to the server
client.connect('8124', 'localhost', function() {
    console.log('Connected to the server.');
    // send data to the server immediately on connection
    client.write('Who needs a browser to communicate??');
});

// when recieve data from the terminal in the client, send it to the server
process.stdin.on('data', function(data) {
    client.write(data);
});

// when data is recieved back from the server in response, print to the console
client.on('data', function(data) {
    console.log(data);
});

// when server is closed
client.on('close', function() {
    console.log('Server is closed, hence the connection is closed.');
});