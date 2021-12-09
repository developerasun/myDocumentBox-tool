# Table of Contents
- [Installation]()
- [Installation]()
- [Installation]()
- [Installation]()
- [Installation]()

# Learning MongoDB essentials 
MongoDB is a NO-SQL database that stores JSON documents. Mongoose is a npm package used to control MongoDB with Javascript, creating schemas. 

- SQL : saving all data across tables
- NO-SQL : saving all data within one record

MongoDB has a merit combinated with Javascript that its format is JSON, which is Javascript Object Notation. 

<span>Web - Server - Database</span>
<img src="reference/client-mongoose-db.png" width=250 height=350 />

- Web client : HTML, CSS, <strong>Javascript</strong>
- Web server : <strong>Node.js, Mongoose(npm package)</strong>
- Database : <strong>JSON</strong>

# Installation
Deployment with MongoDB can be served with 
- Atlas : MongoDB as a service
- On-premises : Local MongoDB => install MongoDB Compass
- Mobile & Edge : Realm mobile database. Lightweight data storage for mobile and edge

# Models and collection
In MongoDB, a lot of databases can exist. Choose the one that you need and connect it using mongoose. 
Database is structured as follows

- record(based on schema) => collection (based on model) => database
- <img src="reference/database-collection-record.png" width=540 height=360 />

<details>
    <summary>What is schema?</summary>
    - Model : a list of concepts describing data(abstract)
    - Schema : a list of attributes and instructions where database engine reads/follows(concrete, physical). Schema is to decide and tell the record what type of property they should have. 

    ```Javascript
    const mongoose = require('mongoose') 
    const HumanSchema = moongose.Schema({
        name : String, 
        age : Number
    })

    ```
</details>

# Connection
<ol>
- Create an account in MongoDB website
- Choose a plan : 1) serverless 2) dedicated 3) shared(free, 1 per account)
- Set database username and password, which will be used in Mongoose. 
- Set other configurations for the MongoDB, like IP Access List. One of the common reasons of DB connection failure is not to include your IP address.
- Get your MongoDB Atlas URI and set environment variables. 
- Require Mongoose/Express in your Javascript file and connect database like below.
</ol>

```javascript
const mongoose = require('mongoose');

// MongoDB URI
mongoose.connect('mongodb://user:pass@localhost:port/database');


```

# Saving records
You can save the model in database, which is the purpose of creating it. Create a model instance and use save method. 

- save : model.save => applied on a single model instance.

```Javascript 
    // Create a  model instance : myMario
    const myMario = new Mario({
        name: "Jake mario", 
        weight: 75
    });

    // model(instance).save is an asynchronous request, provided by mongoose
    myMario.save()
        .then((done)=>{
        assert(myMario.isNew === false);
        done(); }); // finish the asynchronous test);
    });
```
## Finding records
- find(condition) : find multiple records matched with the conditions
- findOne(condition) : find the first record matched with the condition

### Object ID
Once model instance is saved in the database, how do we know which one is which if the name is all the same? Finding a specific record is done with object id since each record in database has a different object id.
 
<img src="reference/mongodb-object-id.png" width=800 height=400 />

## Deleting records
- model(instance).remove
- model(whole collections).remove 
- model.findOneAndRemove

- 1. Create and save a new record
- 2. Use findOneAndRemove to remove the record
- 3. Use findOne to check if the removed record exists

# Testing with Mocha
<p>
Mocha is a testing framework used to make test cases. Running tests consistently ensures newly added features are well integrated with previous ones. 
</p>

You can test such as : 
- Creating records
- Reading records
- Updating records
- Deleting records

Install Mocha like below
```javascript
npm install mocha --save

// Installing mocha is not required for production setting.
npm install mocha --save-dev
```

## Assert
Assert is a built-in module in Node.js. It evaluates a value parameter and if it is not true, throw error. 

```javascript
assert(value, message) // message is optional
```

## Mocha configuration with Package.json
Configurate Mocha like below in Package.json to use Mocha with command npm test.

```json
  "scripts": {
    "test": "node_modules/.bin/mocha $(find your/foler/directory -name '*.js') --recursive -w",
    "start": "nodemon"
  },
```

## Handling Asynchronous Request With Mocha
Saving model into database is an asynchronous request. Deliver 'done' function parameter provided by Node.js and call it after the asynchronous request is done. 

```javascript
myModel.save()
       .then(function(done) {
           // do what is needed
           done(); // finish the asynchronous request
       }); 

```

When the done parameter is not properly delivered
- <img src="reference/mocha-test-async-fail.png" width=740 height=530 />

When delivered
- <img src="reference/mocha-test-async-sucess.png" width=740 height=530 />


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

## Token 
With json web token npm library, a token is created like below. 

```javascript
const token = jsonWebToken.sign(user._id.toHexString(), 'myToken')
```
- Client : setting the token into cookie
- Server : setting the token into database

## Configuration
<p>
During connecting MongoDB using mongoose/express, database info such as username and password is required and can be seen in codes. Also, sensitive information such as API key should not be displayed in public neither. Thus, environment variable/file is needed to manage that. 
</p>

```javascript
// Environment variable in Node.js
// The process.env property returns an object containing the user environment.
process.env // global object. approachable in whole application. 

```

# ECMA 6 Destructuring
ES6 provides a way to wrap and deliver properties by using curly braces. For example, 

``` Javascript
const { name, age } = { name : "Jake", age : 27 }
console.log(name, age) // result : "Jake", 27

```