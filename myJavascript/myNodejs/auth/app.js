require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/routes');

const MONGO_URI = process.env.MONGO_URI
const app = express();

// middleware
app.use(express.static('public'));

// view engine
app.set('view engine', 'ejs');

// Express JSON parser middleware(JSON => js object)
app.use(express.json())

// Express router middleware
app.use(router)

// database connection
mongoose.connect(MONGO_URI, {  })
  .then((result) => {
    console.log("connected")
    app.listen(3000)})
  .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));