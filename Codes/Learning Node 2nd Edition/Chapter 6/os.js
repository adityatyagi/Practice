var os = require('os');
console.log(os.endianness());
console.log('Using the end of line: ' + os.EOL + 'to insert a new line.');
console.log(os.tmpdir());
console.log(os.homedir());
console.log('RESOURCES==============');
console.log(os.freemem());
console.log(os.loadavg()); // this is for UNIX and thus it will return [0,0,0]
console.log(os.totalmem());
console.log(os.cpus());