const clock = document.querySelector("h2#clock"); 

function sayHello(){ 
    console.log("hello");
}


function getClock(){ 
    // new keyword in JS is used to create an instance of an object that has a 
    // constructor function. 
    // 1) new object created 
    // 2) 'this' variable is tied and pointed to the object 
    // 3) the new object returned
    const date = new Date();

    // padStart,padEnd takes two arguments : 1) length of prefix/postfix 2) what to fill as prefix(postfix)
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// setInterval function takes 1) function to be repeated 2) interval between each execution
// the interval time is calculated by ms : e.g. 5000ms equals 5 seconds.
// setInterval(sayHello, 5000);
getClock()
setInterval(getClock, 1000); // getClock function looks like it is based on real time from outside.

// setTimeout function executes input function in a certain amount of time
// setTimeout(sayHello, 3000);