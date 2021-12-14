// module.exports is an object available in every js file.
// what is exported with module.exports can be called with require like below
// const myTest = require('myTest')
function helloWorld() {
    return "hello world" ; 
}

const myModule = helloWorld()