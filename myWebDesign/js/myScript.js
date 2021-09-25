// const trigger = document.querySelector("#trigger"); 
// const menu = document.querySelector("nav ul"); 

// function menuToggle(event) {
//     event.preventDefault();
//     menu.slideToggle();
// }

// trigger.addEventListener("click", menuToggle); 

// Create a burger menu image
const burgerMenu = document.createElement("img"); 
const menuText = document.querySelector("#trigger"); 

burgerMenu.src = "assets/icon/burger.jpg"
burgerMenu.classList.add("burgerMenu");
menuText.appendChild(burgerMenu); 

// Jquery
$(function(){
    const trigger = $('#trigger'); 
    const menu = $('nav ul');

    // Jquery - element.slideToggle(): menu drop down
    $(trigger).on('click', function(event) {
        event.preventDefault();
        menu.slideToggle(); 
    });

    // Add jquery function for when window size changes with various reasons
    // e.g : device changes, user adjusting window size
    $(window).resize(function() {
        const width = $(window).width(); 
        if (width > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });
}); 