// Create a web server in Javascript
const http = require('http'); 
const fs = require('fs'); 

http.createServer(function(req, res){ 
    // For now, below code only opens up open.html
    // Learn Node.js more and return to this code exercise to fully
    // execute what it was intended to execute (delivering text data from html A -> to html B )
    res.writeHead(200, {'content-type':'text/html'});
    const myReadStream = fs.createReadStream(__dirname + '/open.html', 'utf-8'); 
    myReadStream.pipe(res);
}).listen(8080, '127.0.0.1');

// In website, turning off/on a pop-up is related to security topic. 
// Javascript can manipulate brower objects - if someone is able to open
// a A website in B website's pop-up, assume that window.open or other method 
// used for that, uninteded changes can happen in the A website. 
// Thus, web browsers have policy that user can set how a pop-up is displayed
// meaning that user can turn on/off the pop-up by their preference.

