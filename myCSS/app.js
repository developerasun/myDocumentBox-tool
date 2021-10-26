const darkModeButton = document.querySelector("#button-transition"); 

function changeBgColor(e) { 
    e.preventDefault();
    document.body.style.backgroundColor = "white";  
}

darkModeButton.addEventListener("click", changeBgColor); 