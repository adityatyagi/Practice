// HTTP client POSTing data to a server
var http = require('http');
var queryString = require('querystring');

// creating the data that will be sent to the server in the POST format
var postData = queryString.stringify({
    'message': 'Hello, this is data from client'
});

// options for the request being sent to the sever
var options = {
    hostname: 'localhost',
    port: 8124,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
    }
};


// creating the request to be sent to the server and handling the response that comes
var request = http.request(options, function(response) {
    // after the request is made this callback function runs with the response object
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    response.setEncoding('utf8');

    // fetching the data from the response and displaying it
    response.on('data', function(chunk) {
        console.log('BODY: ' + chunk);
    });

    //end response
    response.on('end', function() {
        console.log('No more data in response.');
    });
});

// if while making a request, we encounter a error
request.on('error', function(e) {
    console.log('Problem with request: ' + e.message);
});

// send the data in the request body
request.write(postData);
request.end();