alert("hi!");

// Create a constant variable
const a = 5; // Use const keyword most of time. Only important variables need to be changed using, let keyword
const b = 2;
const veryLongVariableName = 0; // CamelCase in Javascript c.f. snake_case in Python
let myName = "jake"; // Use let keyword when the variable needs to be updated
var yourName = "notJake" // var keyword do not provide protection, meaning it can be 
// updated in anywhere of code blocks. Do not use var keyword in general since it is from outdated JS

console.log(a+b); 
console.log(a*b); 
console.log(a-b); 

console.log("hello " + myName);


// null and undefined in Javascript
// null : Null is similar to nothingness. 
// undefined: Computer is aware of the variable but the variable does not have any value. 
const cat = null; 
let something; // undefined variable something. 

console.log(something); 
console.log(cat); // null value never happends naturally. 

// Create an array in Javascript : [] symbol, different types of elements can be set
const myArr = [1,2, "hello", null, true, undefined]
console.log(myArr[-1]);

console.log(myArr);

// New elements to add to the array.
myArr.push("goodbye!");
console.log("One more element added: ", myArr)

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimchi");
console.log("the length of your array is: ", toBuy.length);
console.log(toBuy);

// Create an object in Javascript : method 1 - declare many variables
const playerName = "jake"; 
const playerPoint = 555; 
const playerHandsome = true;
const playerFat = "notAtAll"; 

console.log("not object: ", playerName, playerPoint, playerHandsome, playerFat);

// Createa an object in Javascript : method 2 - creating an object
const player = {
    name : "jake", 
    points : 10, 
    handsome: true, 
    fat : false,
};

console.log("object: ", player.name, player.fat, player.points, player.handsome); 
console.log("using index ","your point is: ", player["points"]); 

// Approach to the player object and change its property value
// You are not changing the object itself(you can't cuz it is constant)
// but changing its property value.  
player.handsome = false; 
console.log("changed handsome property value: ", player.handsome);

// Create a function in Javascript - method 1
function sayHello(personName) {
    console.log("your name is: " + personName);
}

sayHello("Jake Sung");
sayHello("Smith Kim");
sayHello("Bryan Murray");

function plus(a,b){
    console.log(a+b);
}

plus(55,44);
plus("goodbye", " world");
plus("my age is ", 27);

// Create a function in Javascript - method 2
person = { 
    name : "JAKE", 
    printAge : function(name, age){
        console.log(name + "'s age is: "+ age); 
    }
};

console.log(person.name);

// Function call in Javascript
person.printAge(person.name, 27);
person.printAge("not jake", 277);

// Function argument in Javascript is ignored when not matched
function argsTest(one, two){
    console.log(one, two);
}

argsTest(3,4,5); // 5 is not printed in console. 

// Create a simple calculator in Javascript : add, minus, multiply, divide
const myCal = { 
    add : function(a,b){
        return (a+b);
    },

    minus : function(a,b){
        return(a-b);
    },

    multiply : function(a,b){
        return(a*b); // function ends when return keyword happens.
        console.log("I will not printed"); // Next line won't execute.
    },

    divide : function(a,b){
        return(a/b);
    }
};

console.log(myCal.add(5, 5)); 
// myCal.minus(5, 8);
// myCal.multiply(4, 6);
// myCal.divide(9, 3);

const age = 96; 
function calculateKrAge(globalAge){
    globalAge + 2;
}

const krAge = calculateKrAge(age);
console.log(krAge); // return undefined

function calculateKrAge2(globalAge){
    return globalAge + 2;
}

const krAge2 = calculateKrAge2(age);
console.log(krAge2); // return 98 

// Exploit returned value as a new variable from each function call 
const addResult = myCal.add(8,3);
const minusResult = myCal.minus(5,addResult); 
const multiplyResult = myCal.multiply(addResult, minusResult); 
const divideResult = myCal.divide(4, minusResult); 

console.log(addResult, minusResult, multiplyResult, divideResult); 

