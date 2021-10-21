const showState = document.createElement("span"); 
// Create an object in Javascript : using curly braces
const personObjectFirst = {"name":"jake", "age":27, "sex":"male"}; 

// c.f. create an array in Javascript : using square brackets
const countryArray = ["United Kingdom", "United States", "Brazil"]; 

// Create an object with new and Object keyword
const personObjectSecond = new Object();
personObjectSecond["name"] = "jake";
personObjectSecond["age"] = 27;
personObjectSecond["sex"] = "male"; 

document.body.appendChild(showState); 
showState.innerHTML = "click me"; 

showState.addEventListener("click", (event)=>{
    if (personObjectSecond.name === personObjectSecond["name"]) {
        let state = true;
        console.log(state);  
    } else {
        state = false; 
        console.log(state); 
    }
});