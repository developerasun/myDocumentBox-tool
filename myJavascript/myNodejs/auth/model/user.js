const mongoose = require('mongoose')
const { isEmail } = require('validator')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email : {
        type: String, 
        // mongoose validation here
        required: [true, 'Please enter an email'], 
        unique : true, 
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    }, 
    password : {
        type: String, 
        required: [true, 'Please enter an password'], 
        unique : true, 
        minlength: [6, 'Password length should be long than 6']
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User