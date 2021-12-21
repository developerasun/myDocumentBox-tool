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

// In typescript, this is incorrect
const myMath = (diameter) => { 
    console.log(Math.PI * diameter)
}

myMath('hello math') // can't compile, throwing error before compile

// do this instead
const myMath = (diameter: number):number => {
    return diameter * Math.PI
}

```

<img src="reference/type-error.png" width=530 height=160 />

## Explicit types
```typescript
let name : string
let age : number
```

You can also take class as variable type. 

```typescript 
class Bird {
    name : string
    canFly : boolean
    wing : number
    
    constructor(name:string, canFly:boolean, wing:number) {
        this.name = name
        this.canFly = canFly
        this.wing = wing
    }
    fly(){
        console.log(`${this.name} has ${this.wing} wings and can fly : ${this.canFly}`)
    }
}

const birdOne = new Bird("jake", true, 3)
const birdTwo = new Bird("elly", false, 2)
let CanadaBird : Bird[] = [] // CanadaBird is an array containing Bird object

```

## Function
In Typescript, setting parameter/return types is possible. If a function does not return anything explicitly, it can be written as it returns 'void'. Typescript will infer what types of return will be returned even when you didn't clarify.

```typescript
function myTypescript(name : string, age: number):string {
    return `${name} is ${age}`
}

function myVoid():void { 
    console.log("hello void")
}
```

## Type casting
```typescript

const anchor = document.querySelector("a")! // ! let Typescript knows this value is not null

if (anchor) { 
    console.log(anchor.href)
}

// type casting in typescript : making sure an element has a specific type
const form = document.querySelector('form') as HTMLFormElement
// checks if the form variable exists
if (form) {
    console.log(form)
} else { 
    console.log("no form")
}
```

## ES6 with Typescript
- spread operator
```typescript
// spread operator in typescript
let bowl: [number, number, number] = [1,2,3]
let newBowl = [...bowl]
console.log(newBowl)
```

## Access modifier
Access modifier sets a boundary how user can apporach to properties and class. Understanding access modifier provides a great way for encapsulation. 

- public : can access, can change value
- readonly : can access, can't change value
- private : can't access, can't change value

```typescript
// way 1 : shorter
class Account {
    constructor(
        readonly name : string
        readonly amount : number
        public signedDate : string
        private status : string
    ){} // this way only works with access modifier
}

// way 2 : more descriptive
class Account { 
    readonly name : string
    readonly amount : number
    public signedDate : string
    private status : string

    constructor(name: string, amount: number, signedDate:string, status :string) {
        this.name = name
        this.amount = amount
        this.signedDate = signedDate
        this.status = status
    }
}

```

## Interface
Interface is an extended feature available Typescript. The abstract class(interface) enforces concrete class to follow a certain form(variables, methods). 


```typescript
// Create an abstract class : parent class 
interface Animal { 
    age : number, 
    walkOn(road: string):string
}

// Create a concrete class : child class
// Jake_human is an instance of the Animal class
const Jake_human : Animal = {
    age : 27, 
    walkOn(road = "London"):string {
        return `Jake is walking on ${road}`
    } 
}

console.log(Jake_human.walkOn("Tokyo"))

const Roads = (entity : Animal):string => {
    return entity.walkOn("Seoul")
}

console.log(Roads(Jake_human))

```

Compare above Typescript interface usage with below Go interface one. 

```Go
package main

import "fmt"

type magicStore struct {
	value interface{}
	name  string
}

func (ms *magicStore) SetValue(v interface{}) {
	ms.value = v
}

func (ms *magicStore) GetValue() interface{} {
	return ms.value
}

func NewMagicStore(nm string) *magicStore {
	return &magicStore{name: nm}
}

func main() {
	IntStore := NewMagicStore("Integer Store")
	IntStore.SetValue(4.2)
	if v, ok := IntStore.GetValue().(float64); ok {
		v += 100
		fmt.Println(v)
	} else {
		fmt.Println("not correct type assertion")
	}

	StringStore := NewMagicStore("String Store")
	StringStore.SetValue("my string: ")
	if v, ok := StringStore.GetValue().(string); ok {
		v += "yes, this is mine"
		fmt.Println(v)
	} else {
		fmt.Println("not correct type assertion")
	}

}

```