// DOM is not only for controling HTML but provides a standard to 
// control markup languages like XML, SVG, XUL. Each markup language
// is added to Element object (HTMLElement, SVGElement, XMLElement ... etc)
// DOM - Element - HTMLElement - HTMLLIElement
//               - SVGElement - xxxElement ...
//               - XMLElement - yyyElement ...

// Element API 1) tagName
const whatIsIt = document.querySelector(".grabMe"); 
console.log(whatIsIt.tagName); // result : LI. Tag name is immutable

console.log(whatIsIt.id); // result : grabMe id
whatIsIt.id = "not grabMe id";
console.log(whatIsIt.id); // result : grabMe id. id property is mutable

// Element API 2) classList
console.log(whatIsIt.classList); // result : DOMTokenList (a list of class names)
console.log(whatIsIt.classList[0]); // result : grabMe
whatIsIt.classList.add("helloWorld"); // white space not allowed when adding class name in DOMTokenList
whatIsIt.classList.add("goodbyeWorld");
console.log(whatIsIt.classList[1]); // result : helloWorld

for (let i=0; i < whatIsIt.classList.length; i++){
    console.log(whatIsIt.className); // result : grabMe, helloWorld, goodbyeWorld
}

whatIsIt.classList.toggle("toggleToggle"); // create toggle toggle class 
console.log(whatIsIt.classList);
whatIsIt.classList.toggle("toggleToggle"); // delete toggle toggle class
console.log(whatIsIt.classList);
console.log(whatIsIt.classList.toggle("toggleToggle"));



