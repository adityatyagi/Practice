// A simple static web server
var http = require('http');
var fs = require('fs');
var mime = require('mime');
var path = require('path');

// In Node, you can use the predefined __dirname as a way of specifying the current
// working directory for a Node application. 
var base = '/home/examples/public_html';

http.createServer(function(req, res) {

    pathname = path.normalize(base + req.url);
    console.log(pathname);

    // checking the existence of the file or if the pathname is a file or a directory
    fs.stat(pathname, function(err, stats) {
        if (err) {
            console.log(err);
            res.writeHead(404);
            res.write('Resource Missing 404\n');
            res.end();
        } else {
            // specifying the content type
            var type = mime.getType(pathname); // will extract the content-type, .lookup() is changed to .getType()
            console.log(type);
            res.setHeader('Content-Type', type);

            // create and pipe readable stream
            var file = fs.createReadStream(pathname);

            file.on('open', function() {
                res.statusCode = 200;
                file.pipe(res);
            });

            file.on('error', function(err) {
                console.log(err);
                res.writeHead(403);
                res.write('File Missing or permission problem');
                res.end();
            });
        }
    });
}).listen(8124);

console.log('Server running at localhost:8124');