// Create an object in Javascript : using curly braces
const personObjectFirst = {"name":"jake", "age":27, "sex":"male"}; 

// c.f. create an array in Javascript : using square brackets
const countryArray = ["United Kingdom", "United States", "Brazil"]; 

// Create an object with new and Object keyword
const personObjectSecond = new Object();
personObjectSecond["name"] = "jake";
personObjectSecond["age"] = 27;
personObjectSecond["sex"] = "male"; 

// console.log(typeof(personObjectSecond["sex"]));

const myArr = ["first", "second", "third"]; 
const myObj = {11:"first", 22:"second", 33:"third"}; 

if (typeof(myArr.indexOf("first")===0)){
    console.log("tru")
} else {
    console.log("not tru")
}

// for ~ in statement in Javascript
// printing the indice of the arry
for (myArrIndex in myArr) { 
    console.log(myArrIndex, typeof(myArrIndex));
}

// printing the indice of the object
for (myObjIndex in myObj) { 
    console.log(myObjIndex, typeof(myObjIndex));
}

// printing the object's value
for (myObjIndexSecond in myObj) { 
    console.log(myObj[myObjIndexSecond]); 
}