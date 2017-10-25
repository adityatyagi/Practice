// Client that compresses a file and pipes it to a web request
var http = require('http');
var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();

var options = {
    hostname: 'localhost',
    port: '8124',
    method: 'POST',
    headers: {
        'Content-Type': 'application/javascript',
        'Content-Encoding': 'gzip,deflate'
    }
};

var req = http.request(options, function(res) {
    res.setEncoding('utf8');

    var data = '';

    res.on('data', function(chunk) {
        data += chunk;
    });

    res.on('end', function() {
        console.log(data);
    });

});

req.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
});

// stream gzipped file to the server
var readable = fs.createReadStream('./test.png');
readable.pipe(gzip).pipe(req); // because req is a writable stream