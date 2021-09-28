
const btnSecond = document.querySelector('.button-second'); 

function btnClicked() { 
    document.querySelector(".container").style.transform = "translate(-100vw)";
}

btnSecond.addEventListener("click", btnClicked);