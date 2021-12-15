# Table of Contents
## Node Js
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()

## Express
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()
- [Node Package Manager]()

# Learning Node JS and Express essentials
Learn server-side Javascript for single page application development(SPA, built with Ajax usually). Backend essentials for SPA is as follows :


# Contents learned
- Managing Packages with NPM
- Basic NOde And Express
- MongoDB And Mongoose 

## Client and Server interaction
|Front End|Interaction|Backend|
|:-------:|:-------:|:-------:|
|event, DOM, template, routing|HTTP, Ajax, JSON, RESTful|Web server, template, routing, database, APIs|

There a few tech combinations for Node JS, which is MERN stack.
- MongoDB : database
- Express : framework
- React : UI library
- Node JS : server

# Node.js
## Node Package Manager
<p>
One of the advantages to use npm is dependency control. Through package.json file, npm automatically install everything you need. 
</p>

<p>
Since node modules are usually massive, installing dependency through package.json is recommended.

- npm install => project dependency installed based on package.json
- sharing node_modules => not recommended

</p>

```
npm install A -g : install A package globally, works in PC anywhere
npm install A --save : install A package and save its info in package.json for future reuse.
```

## Package.json
A center of any Node JS project, storing the project information in a single JSON object. The information displayed is as follows

- dependency
- author
- version
- license 

<details>
    <summary>Note</summary>
    all field names and values in JSON should be in double quotes("") and separated by comma(,). Number and boolean are okay to be not in double quotes. 

```json
{
    "name":"Jake", 
    "age" : "27", 
    "handsome" :"true"
}
```

<img src="reference/invalid-json.png" width=650 height=700 />

</details>

Beside package.json file, there is also a package-lock.json. This file is to track every package version so that anyone can reproduce the project in future.

## .env file
.env is a hidden file that you can store data that needs to be hidden such as API keys and database URI. Only you can access to this file with below syntax.

```javascript
process.env.variableName
```

processs.env is a global Node object that defines environment variables. 

- No white space in .env file
- Variable name is in uppercase(convention)
- Put each variable on a seperate line
- .env is a shell file, requiring no qutoes in variables and values.

Install dotenv package through npm to use .env file. The dotenv package loads your .env files to Node process.env global object.

```javascript
// npm install dotenv --save
require('dotenv').config() // dotenv.config methods loads your .env to global Node object.

```

## Semantic Vesioning
Package.json file follows Semantic Versioing, which is a industry standard for software versioing. Libraries and frameworks published through npm should follow below standard.

```Javascript
"package":"MAJOR.MINOR.PATCH"
```

- MAJOR : new features added, incompatible with previous features
- MINOR : new features added, compatible with previous features. Use caret character to get latest MINOR & PATCH => e.g. "^1.3.8"
- PATCH : bug fixes. Use tilde character to get latest PATCH => e.g. "~1.3.8"

# Require and Import
- require : synchronous, selective
- import : asynchronous, nonselective

<img src="reference/commonjs-es6.png" width=600 height=170/>

# Express
## Middleware
<p>
Serving static webpages and assets could be simpler with express since it provides a middleware. 
</p>
<p>
Middleware is a function that takes route handlers and adds information. Express provdies the middleware to manage static assets. Without this middleware, all the static assets would require corresponding routes. 
</p>

```javascript
// syntax : express.static(root + endpoint)
// Normal usage
app.use(express.static(__dirname + "/public")) // directory 'public' is a convention where static assets are kept. 

// Assets at public dir
app.use('/public', express.static(__dirname + "/public"))
```

<p>
Middleware function takes three arguments : 1) request object 2) response object 3) next function. 

- add information to request/response object
- end cycle by sending a response or start next function in stack, calling the next. 

Express evaluates functions in the order they appear in the code. Middleware shoule also be created before all the routes depending on it.

</p>

```javascript
function (req, res, next) { 
    console.log("I am a middle ware")
    next()
}
```

### Middleware chaining
Middleware can be chained inside route definition. Chaining middleware is useful to divide server operaions into more smaller units, increasing code reusuability.

For example, 
```javascript
app.get('/user', function(req, res, next) {
    // do something here
    console.log(req.user)
    next()
}, function(req, res) {
    res.send(req.user)
})

```

# Writing basic routing

```javascript
// route in Express : app.method(path, handler)
// app : Express object
// path : relatvie path on the server
// handler : function(req, res). A function called when the route is matched
app.get('/', function(req, res){
    res.sendFile(__dirname + '/views/index.html'); 
});

```

<details>
    <summary>What is __dirname?(tab to unfold)</summary>
__dirname is your project root path, provided by Node.js. It is a string that can be concatenated with other directory resources. 
</details>


```javascript
app.get('/json', function(req, res) {
    res.json( { "message" : "Hello json" } ) // This method closes the request-response loop, returning the data. 
    // then sets the appropriate headers to tell your browser that you are serving JSON, and sends the data back.
    // Note that despite the method being named json(), the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
})
```

## Route parameter
Getting route parameter is one way to get inputs from user. Route paramters are named segments of the URL, differentiated by slash. Each segment holds an actual value of the URL. For example, 

```
route_path: '/user/:userId/book/:bookId'
actual_request_URL: '/user/546/book/6754'
req.params: {userId: '546', bookId: '6754'}
```

Approach route parameter with request.params.
```javascript
app.get('/:userId/location', function(req, res){
    const { userId } = req.params
    res.json( {location : userId} )
})
```

## Query parameter
Encoding data with query string is also a way to get inputs from user. Query string is differentiated with question mark in the format of field and value.

```
route_path: '/library'
actual_request_URL: '/library?userId=546&bookId=6754'
query string : '?userId=546&bookId=6754'
req.query: {userId: '546', bookId: '6754'}
```

Express breaks down the data from the query string and fills with req.query.
For example,  

```javascript
app.get('/library', function(req, res){
    const userId = req.query.userId
    const bookId = req.query.bookId

    res.json( { library : `${userId} ${bookId}` } )
})
```

## Body Parser For Post Request
HTTP Post method is a default method used to send client data with HTML form. It is conventioinally used to create a new record in database. 

<p>
These types of request, sending information to the database, the information is not presented in URL since it can contain user password or such things. Instead, the data is hidden in HTTP request body, which is a called payload, also.
</p>

<details>
    <summary>What is a payload?</summary>

Quoted from [Wikipedia - payload](https://en.wikipedia.org/wiki/Payload_(computing))

```
In computing and telecommunications, the payload is the part of transmitted data that is the actual intended message. Headers and metadata are sent only to enable payload delivery.

In the context of a computer virus or worm, the payload is the portion of the malware which performs malicious action.

The term is borrowed from transportation, where payload refers to the part of the load that pays for transportation.
```
</details>

Http request body by default is encoded with urlencoded, which looks like the above query string. You can also implement this with Ajax in JSON format.  <br/>

<img src="reference/http-request-body.png" width=650 height=270 />

To parse the data from HTTP request body, install body parser with npm package. It allows to use middleware to decode the data in many formats. 

- Front End ===(send a encoded data with HTTP POST method) ==>
- ====> Backend ===(decoding the data in request body with body parser)===>
- ========> Database(saving the data)


# Learning materials
- [Free code campe - ENG](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [Inflearn - KOR](https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C#)