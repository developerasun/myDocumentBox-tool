var express = require('express');
var app = express();

// route in Express : app.method(path, handler)
// app : Express object
// path : relatvie path on the server
// handler : function(req, res). A function called when the route is matched
app.get('/', function(req, res){
    res.send('Hello Express');
});























 module.exports = app;
