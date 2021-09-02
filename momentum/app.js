alert("hi!");

// Create a constant variable
const a = 5; // Use const keyword most of time. Only important variables need to be changed using, let keyword
const b = 2;
const veryLongVariableName = 0; // CamelCase in Javascript c.f. snake_case in Python
let myName = "jake"; // Use let keyword when the variable needs to be updated
var yourName = "notJake" // var keyword do not provide protection, meaning it can be 
// updated in anywhere of code blocks. 

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
console.log("changed handsome property value: ", player.handsome)