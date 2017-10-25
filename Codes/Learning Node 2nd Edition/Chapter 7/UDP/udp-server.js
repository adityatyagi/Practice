// A UDP socket server, bound to port 8124, listening for messages
var dgram = require('dgram');
var server = dgram.createSocket("udp4");

server.on('message', function(msg, rinfo) {
    console.log('Message: ' + msg + " from " + rinfo.address + ':' + rinfo.port);
});

server.bind(8124);