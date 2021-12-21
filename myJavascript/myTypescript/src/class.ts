// class 
class Invoice {
    constructor(
        readonly client : string,
        readonly details : string,
        readonly amount : number,
    ){}

    // method
    format() {
        return (`${this.client} owns $${this.amount} for ${this.details}`)
    }
}

const invOne = new Invoice("Jake", "drink", 8)
const invTwo = new Invoice("Elly", "house", 100)

// variable : variable type = initial value
let invoices:Invoice[]= []

invoices.push(invOne, invTwo)

invoices.forEach((item)=>{
    console.log(item.client, item.amount, item.details, item.format())
})