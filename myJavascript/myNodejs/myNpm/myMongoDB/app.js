const express = require('express')
const port = 3000
const { User } = require('./model/user')
const bodyParser = require('body-parser')

// importing mongdo DB connection
const app = express('mongodb+srv://developerasun:guswhd8431!@mymongodb.xutbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useCreateIndex: true, 
    useFindAndModify:false
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

if (app) { 
    console.log("mongoDB connected")
}

app.get('/', function(req, res) {
    res.send("my first mongoDB")
})

// Create a route for user sign-up
app.post('/register', (req, res) => {
    // user sign-up info from Front end => putting them into database
    const user = new User(req.body) // body-parser modules enables to use req.body, which contains the client info
    
    user.save((err, userInfo)=>{
        if(err) {
            return res.json({success:false, err})
        }
        return res.status(200).json({
            success:true
        })
    })
})

app.listen(port, ()=>{console.log(`app listening on port ${port}`)})