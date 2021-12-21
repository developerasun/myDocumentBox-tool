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

export default Invoice