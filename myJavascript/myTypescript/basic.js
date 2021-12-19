var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
inputs.forEach(function (item) { return console.log(item); });
var myConst = 'testing';
var typeTest = 40;
// typeTest = 'hello' : can't do this
typeTest = 50; // can do this
var templateliteral = "hello world ".concat(55);
var isAwesome = true;
isAwesome = false;
// set a type for function parameter with colon in typscript
var circle = function (diameter) {
    return diameter * Math.PI;
};
console.log(circle(55));
// array contains the same types of elements 
var names = ['one', 'two', 'three']; // string array
names.push('four');
var mixedNames = ['hello', true, 9]; // string, boolean, number array
// mixedNames.push('wow', 5, {}) // can't do this
mixedNames.push(false); // can do this
// object 
var person = {
    name: 'jake',
    age: 27 // person.age = 'wow' // can't do this
};
var man = {};
man = { name: 'jake', age: 27 };
var woman;
// person[nickName] = 'awesome' // can't add a new property to object once declared
// explicit type
var thisIsNumber;
var thisIsString;
var thisIsStringArray = [];
thisIsStringArray.push('hello', 'world');
console.log(thisIsStringArray[0], thisIsStringArray[1]);
// thisIsString = 4 // can't do this
// union types
var mixed = [];
mixed.push('four', 4);
console.log(mixed[0], mixed[1]);
var uid;
uid = 'five';
uid = 5;
console.log(uid);
