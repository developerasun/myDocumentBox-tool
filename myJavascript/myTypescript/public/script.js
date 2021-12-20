"use strict";
// type casting in typescript
const newForm = document.querySelector('.newForm');
console.log(newForm.children);
// inputs 
const type = document.querySelector("#type");
const toFrom = document.querySelector("#toFrom");
const details = document.querySelector("#details");
const amounts = document.querySelector("#amounts");
newForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(toFrom.value);
    console.log(details.value);
    console.log(amounts.valueAsNumber);
});
