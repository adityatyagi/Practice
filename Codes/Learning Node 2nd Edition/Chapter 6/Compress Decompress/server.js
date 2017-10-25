// Example 6-5. Creating a web server that accepts compressed data and decompresses it to a file
// This is the server side. We know that the file from the client will come in compressed format

var http = require('http');
var zlib = require('zlib');
var fs = require('fs');

var server = http.createServer().listen(8124);

server.on('request', function(request, response) {
    if (request.method == 'POST') {
        var chunks = [];

        request.on('data', function(chunk) {
            chunks.push(chunk);
        });

        request.on('end', function() {
            var buf = Buffer.concat(chunks);
            zlib.unzip(buf, function(err, result) {
                if (err) {
                    response.writeHead(500);
                    response.end();
                    return console.log('error: ' + err);
                }

                var timestamp = Date.now();
                var filename = './done-' + timestamp + '-.png';
                var writable = fs.createWriteStream(filename);
                writable.write(result);
            });

            // creating the response for the success
            response.writeHead(200, { 'Content-Type': 'text/plain' });
            response.end('Recivied and Undecompressed file\n');
        });
    }
});

console.log('Server listening on localhost:8124');