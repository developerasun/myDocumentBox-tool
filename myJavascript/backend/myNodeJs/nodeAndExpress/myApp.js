require('dotenv').config()
var express = require('express');
var app = express();
const bodyParser = require('body-parser')

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

app.get('/:word/echo', function(req, res) {
    const { word } = req.params
    res.json( {
        echo : word
    } )
})

app.get('/name', function(req, res){
    // query string : ?first=firstname&last=lastname
    const firstName = req.query.first
    const lastName = req.query.last
    res.json( {name : `${firstName} ${lastName}`})
})

app.use(bodyParser.urlencoded({extended:false})) // querystring library applied

app.post('/name', function(req, res){
    const firstName = req.body.first 
    const lastName = req.body.last
    res.json( { name : `${firstName} ${lastName}`} )
})

module.exports = app;
