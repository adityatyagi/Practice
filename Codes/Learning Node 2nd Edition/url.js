var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {

    // if the query "name=anythingOtherThanshowcase"
    var name = require('url').parse(req.url, true).query.name;

    // if no query string is passed
    if (name === undefined) name = "World";

    // if the query "name=showcase"
    if (name == "showcase") {
        var file = "hello.png";

        // checking if this file exists or not,
        // if the file exists, return the file name with the details of the file in the json format
        fs.stat(file, function(err, stat) {
            if (err) {
                console.log(err);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('Sorry, the hello.png picture isn\'t available right now\n');
            } else {
                var img = fs.readFileSync(file); // this file can also be read asynchronously with readFile()
                res.contentType = 'image/png';
                res.contentLenght = stat.size;
                res.end(img, 'binary');
            }
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello ' + name + '\n');
    }
}).listen(3000);