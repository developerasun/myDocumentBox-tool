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