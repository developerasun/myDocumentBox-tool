import Invoice from "./modules/invoice.js"

const invOne = new Invoice("Jake", "drink", 8)
const invTwo = new Invoice("Elly", "house", 100)

// variable : variable type = initial value
let invoices:Invoice[]= []

invoices.push(invOne, invTwo)

invoices.forEach((item)=>{
    console.log(item.client, item.amount, item.details, item.format())
})

// type casting in typescript
const newForm = document.querySelector('.newForm') as HTMLFormElement
console.log(newForm.children)

// inputs 
const type = document.querySelector("#type") as HTMLSelectElement
const toFrom = document.querySelector("#toFrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amounts = document.querySelector("#amounts") as HTMLInputElement


newForm.addEventListener("submit", (e:Event)=> {
    e.preventDefault()

    console.log(type.value)
    console.log(toFrom.value)
    console.log(details.value)
    console.log(amounts.valueAsNumber)
})