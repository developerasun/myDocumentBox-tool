const myAge = prompt("How old are you?");

// default type is : string
console.log(typeof myAge); 

// parseInt funciton converts datatype string to number
console.log(parseInt(myAge)); 

// if getAge === string return NaN, else return number
const getAge = parseInt(prompt("How old are you?: ")); 
console.log(isNaN(getAge));

if (isNaN(getAge) || getAge < 0 ) {
    console.log("Please write a real positive number"); 
} else if (getAge < 18 ){ 
    console.log("Your age is: " + getAge);
} else if (getAge >= 18 && getAge <=50) {
    console.log("You can drink");
} else if (getAge >50 && getAge < 80){
    console.log("You should exercise"); 
} else if (getAge === 100) { 
    console.log("Wow You are 100 years old!");
} else if (getAge !== 100) { 
    console.log("It is what it is");
} else if (getAge > 80) { // This code block never executes since it is overlapped with above else if statement
    console.log("You can do whatever you want"); 
}

true && true === true; 
true && false === false; 
false && true === false;
false && false === false; 

true || true === true;
true || false === true;
false || true === true;
false || false === false; 

// Get things from HTML and manipulate them in Javascript
// 1) getElementById 2) getElementsByClassName
// 3) getElementByTagName 4) querySelector
const title = document.getElementById("title"); 

console.log(title); 
console.dir(title);

title.innerText = "Got you"; 
console.log(title.className); 
console.log(title.id); 

// Get a className from HTML and store it in a variable
const hellos = document.getElementsByClassName("hello");
console.log("typeof hellos: ", typeof hellos); 

const myH1 = document.getElementsByTagName("h1");
console.log("getElementByTagName: ",myH1);

// Use of querySelector : search HTML css-like
// advantage of querySelector function compared to above ones, 
// it is more specific what to grab from HTML. 
const myQuery = document.querySelector(".hello h1");
console.log("query selector: ", myQuery);

// Use querySelectorAll to get all the involved tags from HTML
const getAllQuery = document.querySelectorAll(".hello h1"); 
console.log("all grabbed: ", getAllQuery);