const submitBtn = document.querySelector("#submitBtn");
const displayHere = document.querySelector("#display");
const resetBtn = document.querySelector("#resetBtn");

submitBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    onSubmit();
});

resetBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    resetFormData();
});

function onSubmit() {
    const getFormData = readFormData(); 
    console.log(getFormData);
    alert("Your form successfully submitted");
    displayHere.innerHTML = 
    ` 
    <li>${getFormData.fullName}</li>
    <li>${getFormData.empCode}</li>
    <li>${getFormData.salary}</li>
    <li>${getFormData.city}</li>
    `;
}

function resetFormData() {
    const getFormData = readFormData();

    for (let key in getFormData) {
        getFormData[key] = "";
    }
    
    displayHere.innerHTML = 
    ` 
    <li>${getFormData.fullName}</li>
    <li>${getFormData.empCode}</li>
    <li>${getFormData.salary}</li>
    <li>${getFormData.city}</li>
    `;
    console.log(getFormData);

}

function readFormData() {
    const formData = {}; // formData contains form input values
    formData.fullName = document.querySelector("#fullName").value;
    formData.empCode = document.querySelector("#empCode").value;
    formData.salary = document.querySelector("#salary").value;
    formData.city = document.querySelector("#city").value;
    return formData;
}