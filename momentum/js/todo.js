const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = document.querySelector("#todo-form input"); 
const toDoList = document.querySelector("#todo-list");

let toDos = []; 
const TODOS_KEY = "to-dos"; 
const savedToDos = localStorage.getItem(TODOS_KEY); 

function saveToDos(){ 
    // localStorage does not support array. Below toDos(array)'s element 
    // will be added individually in a text format unless JSON.stringify used
    // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    // JSON.stringify(array to string) <-> JSON.parse(string to array)
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}

function handleToDoSubmit(event){
    event.preventDefault(); 
    const newToDo = toDoFormInput.value;
    toDoFormInput.value = ""; 

    // Variable value change in JS -> refer to varCheck folder to check 
    // how it is like in Python and Go
    // console.log(`newToDo value: ${newToDo}`);
    // console.log(`toDoFormInput value: ${toDoFormInput.value}`); 

    // Add a new to-do into list
    toDos.push(newToDo); 

    // Show(paint) the to-do into screen
    paintToDo(newToDo); 

    // Save the to-do into localStorage
    saveToDos(); 
}

function paintToDo(newToDo){ 
    const li = document.createElement("li"); 
    const span = document.createElement("span"); 
    const toDoBtn = document.createElement("button");

    span.innerText = newToDo; 
    toDoBtn.innerText = "❌";

    li.append(span, toDoBtn); 
    toDoList.append(li);

    // Delete when button clicked
    toDoBtn.addEventListener("click", deleteToDo);
}

function deleteToDo(event){
    console.log(event); // event : click 
    console.log(event.target); // event.target : button clicked 
    console.log("parentElement: ", event.target.parentElement); // 
    const li = event.target.parentElement; 
    li.remove(); 
}

toDoForm.addEventListener("submit", handleToDoSubmit); 

function sayHello(item){
    // parsedToDos.forEach(sayHello);  
    // sayHello(the first element of parsedToDos); 
    // sayHello(the second element of parsedToDos);  
    // ...
    // sayHello(the last element of parsedToDos);
    console.log(`hi! ${item}`); 
}

if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); 
    // console.log(parsedToDos.length); 

    toDos = parsedToDos; 

    // forEach function in JS: Performs the specified action for each element in an array.
    // arrow function in Javascript : a shorter way of writing a function in JS
    // (argument) => (return); OR (params) => (expression); 
    // e.g1 - unnamed function : (item) => console.log(`hi! ${item}`);
    // e.g2 - named function : let myFirstArrowFunc = (a,b) => console.log(a+b); ------> myFirstArrowFunc(3,4);  
    // arrow function is easy to read but has its own limitation
    parsedToDos.forEach(paintToDo); 
}