// creating a very  simple https server
// key in site.key and a certificate in final.crt is required.
var fs = require('fs');
var https = require('https');

var privateKey = fs.readFileSync('site.key').toString();
var certificate = fs.readFileSync('final.crt').toString();

console.log(privateKey);
console.log(certificate);

var options = {
    key: privateKey,
    cert: certificate
};

https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end('Hello Secure World');
}).listen(443);