class GoodMorning { 
    constructor(name) { 
        this.name = name
    }
    sayHiTo(){
        console.log(`${this.name}, good morning!`)
    }
}

const today = new GoodMorning('jake')
today.sayHiTo()