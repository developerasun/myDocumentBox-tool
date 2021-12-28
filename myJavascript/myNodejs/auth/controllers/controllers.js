const User = require('../model/user')

const handleErrors = (err) => {
    console.log(err.message, err.code)

    let errors = { email : '', password : '' }

    // User creates a duplicated ID(email)
    if (err.code === 11000) {  
        errors.email = "Already existing email!"
        return errors
    }

    // MongoDB validator fails
    if(err.message.includes('User validation failed')){
        console.log(Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        }))
    }
    return errors
}

const signup_get = (req, res) => {
    res.render('signup')
}

const signup_post = (req, res) => {
    res.send('signup post request')
}

const login_get = (req, res) => {
    res.render('login')
}

const login_post = async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch(err) {
        const errors = handleErrors(err)
        res.status(400).json( { errors } )
    }
}

module.exports = { 
    signup_get, 
    signup_post, 
    login_get, 
    login_post
}