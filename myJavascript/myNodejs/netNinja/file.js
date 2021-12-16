// File system CRUD

const fs = require('fs')

// read file
fs.readFile('./docs/hello.txt', (err, data)=> {
    if (err) return console.log(err)
    console.log(data) // result : buffer, a package of data
    console.log(data.toString()) // result : string
    console.log(data.toJSON()) // result : JSON
})