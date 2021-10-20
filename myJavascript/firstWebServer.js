// Javascript's advance to server side
const http = require('http'); 

http.createServer(function(req, res) { 
    res.writeHead(200, {'content-type':'text/plain'});
    res.write('Hello World');
    res.end(); 
}).listen(8080, '127.0.0.1');
console.log("first web server in Javascript"); 