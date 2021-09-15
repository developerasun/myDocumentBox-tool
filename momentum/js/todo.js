const toDoForm = document.querySelector("#todo-form");
const toDoFormInput = document.querySelector("#todo-form input"); 
const toDoList = document.querySelector("#todo-list");

const toDos = []; 

function saveToDos(){ 
    // localStorage does not support array. Below toDos(array)'s element 
    // will be added individually in a text format unless JSON.stringify used
    // Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    localStorage.setItem("to-dos", JSON.stringify(toDos));

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

