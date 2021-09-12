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

const myH2 = document.getElementsByTagName("h2");
console.log("getElementByTagName: ",myH2);

// Use of querySelector : search HTML css-like
// advantage of querySelector function compared to above ones, 
// it is more specific what to grab from HTML. 
const myQuery = document.querySelector(".hello h1");
console.log("query selector: ", myQuery);

// Javascript has style object - style element can be adjusted in JS
myQuery.style.color = "red";

// Use querySelectorAll to get all the involved tags from HTML
const getAllQuery = document.querySelectorAll(".hello h1"); 
console.log("all grabbed: ", getAllQuery);

const jsToCssTest = document.querySelector(".testing h1");

// Create an addEventListeners and corresponding function for the myQuery variable
function handleMyQueryClick(){ 
    // console.log("myQuery was clicked! Color red to blue!");
    // console.log("myQuery was clicked! innerText changed!");
    // myQuery.style.color = "blue"; 
    myQuery.innerText = "clicked and content changed";

    const currentColor = myQuery.style.color; 
    let newColor; 

    if (currentColor === "black"){
        newColor = "red"; 
    } else { 
        newColor = "black";
    }

    myQuery.style.color = newColor;

}

function handleMouseEnter(){ 
    console.log("log - mouse is here!");
    myQuery.innerText = "Mouse is here!"; 
} 

function handleMouseLeave(){ 
    myQuery.innerText = "Mouse just left!";
}

function handleWindowResize(){ 
    document.body.style.backgroundColor = "green";
}

function handleWindowCopy(){ 
    alert("You can't copy this");
}

function handleWindowOffline(){ 
    alert("No internet connection");
}

function handleWindowOnline(){ 
    alert("internet connected");
}

function jsToCss(){ 
    // Delcare a constant variable to avoid raw value
    const jsToCssClassName = "active";
    
    if (jsToCssTest.className === jsToCssClassName){
        jsToCssTest.className = "";
    } else {
        jsToCssTest.className = jsToCssClassName;
    }
}

// Notice that the function handleMyQueryClick was not called directly by developer
// instead, it is called by Javascript when click event happend. 
// JS web workflow: select HTML tag -> write function -> add the tag and function in addEventListener
myQuery.addEventListener("click", handleMyQueryClick); // not ("click", handleMyQueryClick());, but ("click", handleMyQueryClick);
myQuery.addEventListener("mouseenter", handleMouseEnter);
myQuery.addEventListener("mouseleave", handleMouseLeave);


jsToCssTest.addEventListener("click", jsToCss); 


window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy); 

// if offline & online addEventListener does not works, follow below steps below
// access to Chrome Dev tools with F12 command -> Network tab -> No throttling to Offline.
window.addEventListener("offline", handleWindowOffline); 
window.addEventListener("online", handleWindowOnline); 