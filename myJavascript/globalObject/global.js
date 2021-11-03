// global object in Javascript : all objects are the property of global object
// for example, below function can executed 1) by calling myFunc() 2) by property 
// of globalthis object.
function myFunc() {
    console.log("hello javascript");
}

myFunc(); 

// global object can be named differently in host environment. For example,
// in Node.js, it is 'globalthis'. In broswer, it is 'window'. 
globalThis.myFunc;
// myObject.do();

// window keyword can be ignored for convenience. all the functions
// are tied into this window(object) - javascript's object oriented programming way. 
// try below command in chrome developer tool
// window.myFunc(); // this will cause error in Node js terminal
