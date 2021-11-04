// prototype : the original look of object. javascript's object oriented programming essential
// prototype is a property. 
// constructor : (new)(function)

// prototype chain example : top, middle, bottom, basement

function Top() {}
Top.prototype.sayHi = ()=>{console.log("Hi, I'm top")};

function Middle(){}
Middle.prototype = new Top(); // Middle => Top

function Bottom(){}
Bottom.prototype = new Middle(); // Bottom => Middle 

const basement = new Bottom(); // basement => Bottom
basement.sayHi(); 

console.log(Top.prototype); // result : {sayHi: [function]}