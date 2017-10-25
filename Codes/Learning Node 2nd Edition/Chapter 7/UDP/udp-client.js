// A datagram client that sends messages typed into the terminal
var dgram = require('dgram');

// type of UDP connection
var client = dgram.createSocket('udp4');

// reading the data typed into the terminal and sending it to the server
process.stdin.on('data', function(data) {
    // udp only sends buffer data, and process.stdin also works with the buffer values
    console.log(data.toString('utf8'));

    client.send(data, 0, data.length, 8124, "examples.aditya.net", function(err, bytes) {
        if (err) {
            console.error('error: ' + err);
        } else {
            console.log('successful');
        }
    });
});