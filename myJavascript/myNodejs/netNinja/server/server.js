const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('request made') // will be logged in terminal, not browser
    console.log(req.url) // depending on the url, server responds differently
    console.log(req.method)
})

server.listen(3000, 'localhost', ()=>{
    console.log("listening for request on port 3000")
})

