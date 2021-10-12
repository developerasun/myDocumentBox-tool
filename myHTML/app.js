const msg = document.createElement("p");
const submitBtn = document.querySelector("submitBtn");
const formHello = document.querySelector(".form-hello");

function sendHi(event) {
    event.preventDefault(); 
    msg.innerHTML = "You have sent Hi message to stranger"; 
    document.body.appendChild(msg); 
}

function genLorem() {
    
}