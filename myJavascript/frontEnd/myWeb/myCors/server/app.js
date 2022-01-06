const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors( {
    origin: 'http://127.0.0.1:5500',
    methods: ['GET', 'POST', 'DELETE']
}))

app.get('/', (req, res) => {
    // must be abolute path or specify root
    res.sendFile('../client/index.html', { root : __dirname })
})

app.get('/data', (req, res) => {
    res.json( {
        name : "Jake", 
        age : 27
    })
})

app.listen(5500, ()=>console.log("listening at port 5500"))