// event programming : 1) inline scripting 2) property listener 3) 

// the merit of inline manner scripting : easy to find 
// dismerit : mixed with HTML and deteriorating functionality
function inline() {
    console.log("hello inline"); 
}

// property listener : add evenet as a property of an object
// event object : an object containing the context of event. When 
// event happens, event object is delivered as a first parameter in event handler
// In Internet explore 8, event object is not a paramter but global object window's property
// meaning cross browsing handling is needed
const property = document.querySelector(".property");
property.onclick = function(event) {
    
    console.log("hello property listener")
    console.log(event);
    // console.dir methods shows the property list of Javascript object
    console.dir(event);

    let bowl = new Array(); 
    for (let key in event) {
        console.log(key);
        bowl.push(key);
    }
    console.log(bowl.length); // event object has 67 properties as of 2021 
 }

 // addEventListener
