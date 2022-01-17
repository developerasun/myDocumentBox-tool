import http, { Server, IncomingMessage, ServerResponse } from 'http'
import os from 'os'
import path from 'path'
import fs from 'fs'

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

    // In server side programming, asychronous function is very common
    // Do not hard-code forward slash since it can be different 
    // based on OS : Linux, Mac, Windows.. This is where path comes into play
    fs.readFile(path.join(__dirname, 'data', 'node.txt'), 'utf-8', (err, result)=>{
        if (err) throw err
        response.end(`<pre>${result}</pre>`)
    })

    // response.end(`
    // <h1>Hello ts-node with nodemon</h1>
    // <h2>${JSON.stringify(myOS)}</h2>
    // `)
})

server.listen(3000, ()=>{console.log("listening at 3000")})


