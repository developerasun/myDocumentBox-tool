// Create a web server in Javascript
const http = require('http'); 
const fs = require('fs'); 

http.createServer(function(req, res){ 
    // Sends a response header to the request. 
    // The status code is a 3-digit HTTP status code, like 404
    res.writeHead(200, {'content-type':'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf-8'); 
    myReadStream.pipe(res);
}).listen(8080, '127.0.0.1');

