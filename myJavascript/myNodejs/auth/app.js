require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const cookieParser = require('cookie-parser')

const MONGO_URI = process.env.MONGO_URI
const app = express();

// view engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public')); // for static assets
app.use(express.json()) // JSON parser(JSON => JS obj)
app.use(router) // Router
app.use(cookieParser()) // Cookie setting

// database connection
mongoose.connect(MONGO_URI, {  })
  .then((result) => {
    console.log("connected")
    app.listen(3000)})
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));

// create a cookie with cookie parser middleware
app.get('/set-cookies', (req, res)=>{
  res.cookie('newUser', false)
  res.cookie('isChrome', true, {
    // maxAge is about how long a cookie is stored. Default value of this
    // is session, which means as soon as user turns off browser
    // the cookie disaapear. Millisecond unit.
    maxAge: 1000 * 60 * 60 * 24,

    // secure option makes sure that cookie is only sent through https
    secure: false,

    // httpOnly option prevent front end Javascript code interfere with cookie.
    httpOnly: true
  })
  res.send("this is cookie page")
})

// read a cookie
app.get('/read-cookies', (req,res)=>{
  const cookies = req.cookies
  console.log(req.cookies.isChrome)
  res.json(cookies)
})