const express = require('express')
const port = 3000
const { User } = require('./model/user')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const config = require('./config/key')

// importing mongdo DB connection
 mongoose.connect(config.MONGO_URI, {
    // useNewUrlParser: true, => no longer necessary as of Mongoose 6.0
    // useUnifiedTopology: true, => no longer necessary as of Mongoose 6.0
    // useCreateIndex: true, 
    // useFindAndModify:false
}).then(()=>{ console.log("mongodb connected")})
  .catch(err => {console.log(err, "connection failed")})

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send("learning mongodb essetials")
})

// Create a route for user sign-up
app.post('/register', (req, res) => {
    // user sign-up info from Front end => putting them into database
    const user = new User(req.body) // body-parser modules enables to use req.body, which contains the client info
    
    user.save((err, userInfo)=>{
        if(err) {
            return res.json({
                success:false, 
                err, 
                delivered : user}) // check the result using web client program like Advanced REST 
        }
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, ()=>{console.log(`app listening on port ${port}`)})