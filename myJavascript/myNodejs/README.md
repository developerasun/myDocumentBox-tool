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
    all field names in JSON should be in double quotes("") and separated by comma(,). 
</details>

## Semantic Vesioning
Package.json file follows Semantic Versioing, which is a industry standard for software versioing. Libraries and frameworks published through npm should follow below standard.

```Javascript
"package":"MAJOR.MINOR.PATCH"
```

- MAJOR : new features added, incompatible with previous features
- MINOR : new features added, compatible with previous features. Use caret character to get latest MINOR & PATCH => e.g. "^1.3.8"
- PATCH : bug fixes. Use tilde character to get latest PATCH => e.g. "~1.3.8"

# Express
Middleware is a function that takes route handlers and adds information. Express provdies the middleware to manage static assets. Without this middleware, all the static assets would require corresponding routes. 




# Learning materials
- [Free code campe - ENG](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [Inflearn - KOR](https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C#)