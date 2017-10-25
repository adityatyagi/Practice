let buf = new Buffer(24); // once the size of the buffer is programmed, it cannot be changed
// one has to fill the buffer as soon as the buffer is made
buf.fill(0); // filling the buffer with 0's
console.log(buf);

// strings in Node are encoded as UTF-8 (utf8 or utf-8) by default.

var str = "Aditya tyagi";
let buf2 = new Buffer(str);
console.log(buf2);

console.log('----------------------------------------------')

// Converting String to BUffer to JSON and then back to String from the JSON data
let buf3 = new Buffer("This is a string");
let json = JSON.stringify(buf3);
console.log(json);
/*
The JSON specifies that the type of object being transformed is a Buffer, and its data follows. Of course, what we’re 
seeing is the data after it’s been stored in a buffer as a sequence of octets, which aren’t human-readable.
*/

// We can parse the buffer data back out of the JSON object, and then use the Buffer.toString() method to convert to
// a string.
console.log(JSON.parse(json));
console.log(JSON.parse(json).data); // .data is used to access the property "data" of the JSON.
let buf4 = new Buffer(JSON.parse(json));
console.log(buf4.toString());
// console.log(buf4.toString('ascii'));


// ====== CONVERTING BUFFER TO A STRING ======
// Using StringDecoder is a better way to convert buffer data into a string.

let StringDecoder = require('string_decoder').StringDecoder;
let decoder = new StringDecoder('utf8');
let euro = new Buffer([0xE2, 0x82]);
let euro2 = new Buffer([0xAC]);
console.log(decoder.write(euro));
console.log(decoder.write(euro2));
console.log(euro.toString());
console.log(euro2.toString());


// By providing the size of the buffer in advance and then adding the data to the buffer of the same size.
// Special mention is given to size because if the size is not approproate then, complete data will not be there.
let buf5 = new Buffer(3);
buf5.write('€', 'utf-8');
console.log(buf5.toString());



// which writes out four unsigned 8-bit integers to a buffer, then reads them in again and prints them out:
var buf6 = new Buffer(4);
// write values to buffer
buf6.writeUInt8(0x63, 0);
buf6.writeUInt8(0x61, 1);
buf6.writeUInt8(0x74, 2);
buf6.writeUInt8(0x73, 3);
// now print out buffer as string
console.log(buf6.toString());


console.log('============== Buffers and Sub-Buffers ==============');
// ============== Buffers and Sub-Buffers ==============
// Creating new buffer from an old buffer using buffer.slice()
// when we change the contents of the new sub-buffer, the contents in the main buffer also changes.
var oldBuffer = new Buffer('This is the way we make our buffer.');
var oldLength = oldBuffer.length;

// create new buffer as a slice of old
var newBuffer = oldBuffer.slice(19, oldLength);
console.log(newBuffer.toString());

// modify the new buffer
newBuffer.fill('*', 0, 5);
console.log(newBuffer.toString());
console.log(oldBuffer.toString());