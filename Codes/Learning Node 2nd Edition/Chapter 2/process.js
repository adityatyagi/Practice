/*
In a Node application, these channels provide communication between the Node application and the terminal. 
They’re a way for you to communicate directly with the application.

Node supports the channels with three process functions:
• process.stdin: a readable stream for stdin
• process.stdout: a writable stream for stdout
• process.stderr: a writable stream for stderr 

 */

// To process incoming data using process.stdin, you first of all need to set the encoding for the stream.
// If you don’t, you’ll get the results as a buffer rather than a string:

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();

    if (input !== null) {
        // echo the text
        process.stdout.write(input);

        // exiting the application automatically, using the user's input
        var command = input.trim(); // trims the white spaces before and after the 'exit' 
        if (command == 'exit') {
            process.exit(0);
        }
    }
});


/* 
If we remove the process.stdin.setEncoding() function call at the beginning, the application will fail. The reason is 
there is no trim() function on a buffer. We could convert the buffer to a string, and then run trim:

var command = input.toString().trim();
*/