const express = require('express')
const app = express() // Creates an Express application. The app is an instance of Express

// register view engine 
// app.set sets application setting.
app.set('view engine', 'ejs')

app.listen(8080, ()=>{
    console.log("app listening at port 8080")
})

app.get('/', (req, res)=>{
   const blogs = [ 
       {title : "hello world", blog : "hello hello"},
       {title : "wow dinner", blog : "for today"},
       {title : "cat dog", blog : "is cool"},
   ]
    res.render('index', { title: 'sweet', blogs:blogs }) 
})

app.get('/about', (req, res)=>{
    // res.sendFile('./views/about.html', {root : __dirname})
    res.render('about')
})

// redirect
app.get('/about-us', (req, res)=>{
    res.redirect('/about') // same with res.setHeader('Location', '/about') in Node js
})

app.get('/blogs/create', (req, res)=>{
    res.render('create')
})

// page 404 should be at the bottom in Express
// app.use fires on every request regardless of url.
// order is important since Express evaluates top-down. 
app.use((req,res)=>{
    res.status(404)
       .render('404')
    //    .sendFile('./views/404.html', {root : __dirname})
})