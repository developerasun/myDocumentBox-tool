// Code convention: constant variable should be declared in capital
// Declare a repeated string value in capital to avoid confusion in code block
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"; 

const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

const greeting = document.querySelector("#greeting"); 
const savedUserName = localStorage.getItem(USERNAME_KEY); 

function onLoginSubmit(event){
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    localStorage.setItem(USERNAME_KEY, loginInput.value); 
    paintGreetings(); 
}

loginForm.addEventListener("submit", onLoginSubmit); 

function paintGreetings(){
    loginForm.classList.add(HIDDEN_CLASSNAME); 
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit); 
} else { 
    paintGreetings(); 
}