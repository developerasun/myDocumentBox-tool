const mongoose = require('mongoose')

// Model and Schema in database
// Model : a list of concepts describing data(abstract)
// Schema : a list of attributes and instructions where 
// database engine reads/follows(concrete, physical)
const userSchema = mongoose.Schema({
    name : {
        type:String,
        maxlength: 50,
    }, 
    email: { 
        type: String, 
        trim: true, // trim removes white space
        unique: 1
    }, 
    password: {
        type: String, 
        minlength: 5
    }, 
    role: { 
        type: Number, 
        default: 0
    }, 
    image: String, 
    token: { // token is used for validation
        type: String
    }, 
    tokenExp: {
        type: Number
    }
})

// model wraps schema 
// mongoose.model('model name', schema)
const User = mongoose.model('User', userSchema) 

export default User // export a module for future usage