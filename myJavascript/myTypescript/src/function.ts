let greet: Function

greet = (name:string) => { 
    console.log(`I am ${name}'s function`)
}

// optional paramter : add question mark 
// default parameter : set an initial value for parameter
// optional and default cannot be used at the same time
const add = (a : number, b: number, c: number|string="hello jake") => {
    console.log(a+b)
    console.log(c)
}

add(5,10)

greet('Jake') 

// Typescript provides a way to clarify parameter types and 
// even return types. 
const minus = (a : number, b: number):string => {
    return `${(a - b).toString()} is your minus function value`
}

console.log(minus(10,7))
