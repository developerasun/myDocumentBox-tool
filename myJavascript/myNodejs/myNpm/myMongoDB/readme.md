# Learning MongoDB essentials 
MongoDB is a NO-SQL database that stores JSON documents. Mongoose is a npm package used to control MongoDB with Javascript, creating schemas. 

- SQL : saving all data across tables
- NO-SQL : saving all data within one record

# Create and connect

<ol>

- Create an account in MongoDB website
- Choose a plan : 1) serverless 2) dedicated 3) shared(free, 1 per account)
- Set database username and password, which will be used in Mongoose. 
- Set other configurations for the MongoDB, like IP Access List. One of the common reasons of DB connection failure is not to include your IP address.
- Get your MongoDB Atlas URI and set environment variables. 
- Require Mongoose/Express in your Javascript file and connect database like below.

```javascript
const mongoose = require('mongoose');

// MongoDB URI
mongoose.connect('mongodb://user:pass@localhost:port/database');


```

</ol>

## Protect DB admin info
<p>
During connecting MongoDB using mongoose/express, database info such as username and password is required and can be seen in codes. Also, sensitive information such as API key should not be displayed in public neither. Thus, environment variable/file is needed to manage that. 
</p>

```javascript
// Environment variable in Node.js
// The process.env property returns an object containing the user environment.
process.env // global object. approachable in whole application. 

```
(will be added : Environment variable in local 
Environment variable in deployment )

# Model and schema
- Model : a list of concepts describing data(abstract)
- Schema : a list of attributes and instructions where database engine reads/follows(concrete, physical) 

## Create a user schema
Signed-up user information is stored in database. User model/schema is created to store the information. 

```Javascript
const mongoose = require('mongoose') 
const userSchema = moongose.Schema({
    name : { 
        type: String, 
        maxlength : 50
    }, 
    email : { 
        type: String,
    }, 
    password : { 
        type: String
    }
})

```

# Collection, Login, and Hash
- Database : MongoDB 
- Client : [Advanced REST client](https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo)
- Password encryption : npm bcrypt library

<span>Checking user info in collection(before password hashing</span>

- <img src="reference/before-hash.png" width="800" height="600"/>

<span>User password after hashing</span>

- <img src="reference/after-hash.png" width="700" height="200"/>

<span>User login failed with wrong password</span>

- <img src="reference/login.failed.png" width="800" height="600"/>

# ECMA 6 Destructuring
ES6 provides a way to wrap and deliver properties by using curly braces. For example, 

``` Javascript
const { name, age } = { name : "Jake", age : 27 }
console.log(name, age) // result : "Jake", 27

```