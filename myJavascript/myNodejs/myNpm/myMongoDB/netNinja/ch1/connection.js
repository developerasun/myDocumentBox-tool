const mongoose = require('mongoose'); 
const Mario = require('./model/mario');

// connect to mongoDB
mongoose.connect("mongodb://localhost/test")
        .then(()=>{console.log("connected")})
        .catch((err)=> {console.log(err)});;

// import Mario model
const testing = new Mario({name: "testing mario", weight:55});
console.log(testing); 