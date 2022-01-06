import http, { Server, IncomingMessage, ServerResponse } from 'http'
import os from 'os'

const server : Server = http.createServer(
    (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200
    response.setHeader("Content-Type" , "text/html")
    const myOS = {
        totalMemory : os.totalmem(), 
        freeMemory : os.freemem(), 
        homeDir : os.homedir(), 
        computerName : os.hostname(), 
        uptime : os.uptime()
    }
    response.end(`
    <h1>Hello ts-node with nodemon</h1>
    <h2>${JSON.stringify(myOS)}</h2>
    `)
})

server.listen(3000, ()=>{console.log("listening at 3000")})


