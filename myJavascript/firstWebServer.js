// Javascript's advance to server side
// To use the HTTP server and client one must require('http').
const http = require('http'); 

// HTTP message headers are represented by an object like this:
// { 'content-length': '123',
// 'content-type': 'text/plain',
// 'connection': 'keep-alive',
// 'host': 'mysite.com',
// 'accept': '*' }
// Keys are lowercased. Values are not modified.
http.createServer(function(req, res) { 
    res.writeHead(200, {'content-type':'text/plain'});
    res.write('Hello World');
    res.end(); 
}).listen(8080, '127.0.0.1');
console.log("first web server in Javascript"); 