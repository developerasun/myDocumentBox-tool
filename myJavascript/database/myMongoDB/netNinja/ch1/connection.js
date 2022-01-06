const mongoose = require('mongoose'); 

// ES6 Promises
mongoose.Promise = global.Promise; 

// before, beforeEach : Only available when invoked via the mocha CLI.
// connect to mongoDB before test runs
before(function(done){
        mongoose.connect("mongodb://localhost/test")
                .then(()=>{
                        console.log("connected");
                        done();
                })
                .catch((err)=> {console.log(err)});;
});

// Drop(delete) the character collections before each test
beforeEach(function(){
        mongoose.connection.collections.Marios.drop(function(done){
                done();
        })
})

// Save records with Mongoose methods : 1) find 2) findOne
// 1) find : returns a multiple records matche
// 2) findOne : find the first one matched and returns a single record