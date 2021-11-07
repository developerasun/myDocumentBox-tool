
const closeX = document.querySelector("#close");
const closeLetsGo = document.querySelector(".pop-up>span");
const popUp = document.querySelector(".pop-up");


closeX.addEventListener("click", ()=>{
    popUp.style.display = "none"; 
});

closeLetsGo.addEventListener("click", ()=>{
    popUp.style.display = "none"; 
});

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        popUp.style.display = "block";
    }, 1500);
});