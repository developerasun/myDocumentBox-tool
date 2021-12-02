# Learning Node JS essentials
Learn server-side Javascript for single page application development(SPA, built with Ajax usually). Backend essentials for SPA is as follows :

## Client and Server interaction
|Front End|Interaction|Backend|
|:-------:|:-------:|:-------:|
|event, DOM, template, routing|HTTP, Ajax, JSON, RESTful|Web server, template, routing, database, APIs|

There a few tech combinations for Node JS, which is MERN stack.
- MongoDB : database
- Express : framework
- React : UI library
- Node JS : server

# Node Package Manager
Since node modules are usually massive, installing dependency through package.json is recommended.

- npm install => project dependency installed based on package.json
- sharing node_modules => not recommended

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

# Learning materials
- [Free code campe - ENG](https://www.freecodecamp.org/learn/back-end-development-and-apis/)
- [Inflearn - KOR](https://www.inflearn.com/course/node-js-%EC%9B%B9%EA%B0%9C%EB%B0%9C#)