require('dotenv').config()
var express = require('express');
var app = express();

app.use(function(req, res, next) {
    // example format : GET /json - ::ffff:127.0.0.1
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html'); 
});

app.use('/public', express.static(__dirname+'/public'));

app.get('/json', function(req, res) {

    if (process.env.MESSAGE_STYLE === "uppercase") { 
        res.json( { "message" : "Hello json".toUpperCase() } )
    } else { 
        res.json( { "message" : "Hello json" } ) 
    }
    // res.json( { "message" : "Hello json" } ) // This method closes the request-response loop, returning the data. 
    // then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back.
    // Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
})

app.get('/now', function(req, res, next){
    req.time = new Date().toString()
    next()
}, function(req, res){
    res.json( {
        time: req.time
    } )
})



module.exports = app;
