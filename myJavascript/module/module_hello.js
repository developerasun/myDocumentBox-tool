// In Javascript, module concept is slightly different in host environment.
// e.g browser, server, app script ...
// Exploring various language is required to have a understanding of
// how JS works differently depending on each environment. 


// module.exports is an object available in every js file.
// what is exported with module.exports can be called with require like below
// const myTest = require('myTest')
function helloWorld() {
    return "hello world" ; 
}

const myModule = helloWorld()

module.exports.testing = myModule // myModule is exported as one of the properties of module.exports