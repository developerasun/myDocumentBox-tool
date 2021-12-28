const User = require('../model/user')

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
    // const { email, password } = req.body
    try {
        const user = await User.create(req.body)
        res.status(201).json(user)
    } catch(err) {
        console.log(err)
        res.status(400).send("error occured")
    }
}

module.exports = { 
    signup_get, 
    signup_post, 
    login_get, 
    login_post
}