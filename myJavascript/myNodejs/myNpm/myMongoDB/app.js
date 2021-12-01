// 
const express = require('express')
const mongoose = require('mongoose')
const port = 3000

// importing mongdo DB connection
const app = express('mongodb+srv://developerasun:guswhd8431!@mymongodb.xutbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify:false
})

if (app) { 
    console.log("mongoDB connected")
}

app.get('/', function(req, res) {
    res.send("my first mongoDB")
})

app.listen(port, ()=>{console.log(`app listening on port ${port}`)})