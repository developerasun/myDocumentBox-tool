# Table of Contents
- [Learning Typescript Essentials]()
- [Learning Typescript Essentials]()
- [Learning Typescript Essentials]()
- [Learning Typescript Essentials]()
- [Learning Typescript Essentials]()

# Learning Typescript Essentials
The goal of below tutorial is to make a simple money journal in web using typescript. 

- [NetNinja - Typescript](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)

# Understanding Typescript
Typescript is a Javascript superset coming with extra features and syntax. Since browser does not understand typescript, it needs to be complied to Javascript to be used in web. 

- Strict types
- Extra features : generics, interface, tuples

Once you are done writing typescript codes, compile it like below

```javascript
tsc (your_file.ts) (your_file.js) // your_file.js can be omitted if output file name is the same

tsc helloWorld -w // compile helloWorld.ts into helloWorld.js and reflect changes automatically(flag -w)
```

## Prerequisite
- Understand Javascript : arrow function, DOM, ES6, ... etc
- Node js to install and compile typescript

Install Typescript with below npm command

```javascript
npm install -g typescript
```

## Typescript config
Make a Typescript config file in your project root so that you can adjust setting. 

```javascript
tsc --init
```

<img src="reference/ts-config.png" width=355 height=160 />

- target clarifies which JS version it targets to.
- module clarifies what module is generated.
- rootDir is a place where your whole typescript code will be contained. 
- outDir is a place where the compiled typescript files(JS) will be contained

<p>
Note that if there is a ts file outside of the rootDir, ts config will fire an error. 'rootDir' is expected to contain all source files.
</p>

<p>
Add include property to tsconfig if some ts files need to be outside the rootDir. 
</p>

```json
  "include":["src"] // specify a directory where compiler will compile
```

Once all things set, you can just type 'tsc' to compile without specifying path and file names. Add -w flag to 'watch' your ts continued changes.


# Basic Types
Typescript does a type inference. Once a variable has a type, the language understands it will keep the type. For example, 

```typescript
let myNumber = 4
myNumber = 'four' // can't do this 
```

Typescript lets us check a type <strong>before runtime in browser</strong> unlike Javascript, making less errors.

```javascript
// javascript 
const myMath = (diameter) => { 
    console.log(Math.PI * diameter)
}

myMath('hello math') // do not throw error before runtime

// typescript
const myMath = (diameter) => { 
    console.log(Math.PI * diameter)
}

myMath('hello math') // can't compile, throwing error before compile

```

<img src="reference/type-error.png" width=530 height=160 />

## Explicit types
```typescript
let name : string
let age : number
```

## Function
In Typescript, setting parameter/return types is possible. If a function does not return anything explicitly, it can be written as it returns 'void' 

```typescript
function myTypescript(name : string, age: number):string {
    return `${name} is ${age}`
}

function myVoid():void { 
    console.log("hello void")
}
```

