const images = ["1.jpg","2.jpg","3.jpg"]; 
const randomImg = images[Math.floor(Math.random() * images.length)];

// Create a HTML image tag in Javascript
const bgImg = document.createElement("img"); 

// Adjust src property in the image object
bgImg.src=`img/${randomImg}`;

// append is more preferred than appendChild in terms of expandability
// object.append : able to add several nodes
// object.appendChild : only one node can be added, can't address text
// append method adds object at the bottom whilst prepend adds it at top.
document.body.appendChild(bgImg); 
// document.body.prepend(bgImg); 
