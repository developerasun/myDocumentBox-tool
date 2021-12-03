const submitBtn = document.querySelector("#submitBtn");
const displayHere = document.querySelector("#display");
const resetBtn = document.querySelector("#resetBtn");
const formOutputTbody = document.querySelector("#formOutputTbody");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    createFormDataOutput(readFormData());
});

resetBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    resetFormData((readFormData()));
});

// readFormData reads form inputs 
function readFormData() {
    const formData = {}; // formData contains form input values
    formData.fullName = document.querySelector("#fullName").value;
    formData.empCode = document.querySelector("#empCode").value;
    formData.salary = document.querySelector("#salary").value;
    formData.city = document.querySelector("#city").value;
    return formData;
}

// createFormDataOutput creates form output 
function createFormDataOutput(readFormData) {

    // add a new row in the table
    const newRow = formOutputTbody.insertRow(-1);

    // add a new cell in the row
    const nameCell = newRow.insertCell(0);
    const empCell = newRow.insertCell(1);
    const salaryCell = newRow.insertCell(2);
    const cityCell = newRow.insertCell(3);
    const editAndDeleteCell = newRow.insertCell(4);

    // display form input data into the cells 
    nameCell.innerHTML = readFormData.fullName;
    empCell.innerHTML = readFormData.empCode; 
    salaryCell.innerHTML = readFormData.salary; 
    cityCell.innerHTML = readFormData.city;
    editAndDeleteCell.innerHTML = `<a>Edit</a>
                                   <a>Delete</a>`; 
}

// resetFormData resets form inputs 
function resetFormData() {
    const readFormData = createFormDataOutput();
    readFormData.name = "";
    readFormData.emp = "";
    readFormData.salary = "";
    readFormData.city = "";
}

