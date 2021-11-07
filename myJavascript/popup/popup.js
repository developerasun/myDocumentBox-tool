const closeX = document.querySelector("#close");
const closeLetsGo = document.querySelector(".pop-up>span");
const popUp = document.querySelector(".pop-up");


// close and change display : button
closeX.addEventListener("click", () => {
    popUp.classList.add("modal-animate");
    setTimeout(()=>{
        popUp.style.display = "none";
    },1000);
});

// close and change display : let's go
closeLetsGo.addEventListener("click", () => {
    popUp.classList.add("modal-animate");
    setTimeout(()=>{
        popUp.style.display = "none";
    },1000);
});

// load and change display 
window.addEventListener("load", () => {
    setTimeout(() => {
        popUp.style.display = "block";
    }, 1500);
});

// make modal movable
popUp.addEventListener("mousedown", () => {
    popUp.addEventListener("mousemove", moveModal);
});

document.addEventListener("mouseup", () => {
    popUp.removeEventListener("mousemove", moveModal);
});

function moveModal(e) {
    // window.getComputedstyle method returns an object containing all the css properties of the object.
    // window is a global object meaning that it can be omitted. 
    let getStyle = getComputedStyle(popUp);

    // style.left/right property affects the horizontal position of 
    // a positioned element. 
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    let movementX = e.movementX;
    let movementY = e.movementY;

    popUp.style.left = `${left+movementX}px`; 
    popUp.style.top = `${top+movementY}px`; 

}