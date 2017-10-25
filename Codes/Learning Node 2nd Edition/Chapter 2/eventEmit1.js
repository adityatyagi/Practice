// basic test for the eventEmitter functionality

var eventEmitter = require('events').EventEmitter;
var counter = 0;

var em = new eventEmitter();

// after ever 3s, this will run
setInterval(function() {
    em.emit('timed', counter++);
}, 3000);

em.on('timed', function(data) {
    console.log('Timed ' + data);
});