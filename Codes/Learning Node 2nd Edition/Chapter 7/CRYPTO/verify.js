var mysql = require('mysql');
var crypto = require('crypto');

// connection options of the database
var connection = mysql.createConnection({
    user: 'root',
    password: null,
    database: 'nodedatabase'
});

var username = process.argv[2];
var password = process.argv[3];

connection.query('SELECT passwordhash, salt FROM users WHERE username =?', [username], function(err, result) {
    if (err) return console.error(err);
    console.log(result);

    // created by password+salt
    var newHash = crypto.createHash('sha512').update(result[0].salt + password, 'utf8').digest('hex');

    if (result[0].passwordhash === newHash) {
        console.log('Welcome, you are successfully logged in.');
    } else {
        console.log('Sorry, wrong password or username');
    }
    connection.end();
});