const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("#login-form input");
const loginButton = loginForm.querySelector("#login-form button");

function handleLoginBtn(){ 
    
    // Check inner value list of loginInput object with console.dir command
    // console.dir(loginInput);
    
    // object.value: text content of placeholder
    const userName = loginInput.value;
    console.log(userName);
    
    // if (userName === ""){
    //     alert("Please enter right value");
    // } else if (userName.length > 15) {
    //     alert("ID should be less than 15 characters"); 
    // } 
    // console.log("Entered value is: ", loginInput.value);
}

loginButton.addEventListener("click", handleLoginBtn);