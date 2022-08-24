var fs = require("fs");
var d = '';
// Create a readable stream
var readerStream = fs.createReadStream('abcnew.txt');
// Set the encoding to be utf8. 
readerStream.setEncoding('UTF8');

// Handle stream events --> data, end, and error
readerStream.on('data', function(chunk) {
   d += chunk;
});

readerStream.on('end',function() {
   console.log(d);
});

readerStream.on('error', function(err) {
   console.log(err.stack);
});

