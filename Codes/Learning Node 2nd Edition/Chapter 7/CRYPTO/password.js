// Using Crypto’s createHash method and a salt to encrypt a password

var mysql = require('mysql');
var crypto = require('crypto');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'nodedatabase'
});

connection.connect();

// The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] 
// is needed. The second element will be the path to the JavaScript file being executed. The remaining 
// elements will be any additional command line arguments.
var username = process.argv[2];
var password = process.argv[3];
//console.log(username);
//console.log(password);

var salt = Math.round((Date.now() * Math.random())) + '';

// created by password+salt
var hashPassword = crypto.createHash('sha512').update(salt + password, 'utf8').digest('hex');

// create user record
connection.query('INSERT INTO users ' +
    'SET username = ?, passwordhash = ?, salt = ?', [username, hashPassword, salt],
    function(err, result) {
        if (err) console.error(err);
        console.log('User record inserted');
        connection.end();
    });