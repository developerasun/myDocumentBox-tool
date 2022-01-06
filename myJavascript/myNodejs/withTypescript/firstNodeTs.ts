const testing : string = "testing node with ts"

console.log(testing)

type NumberType = {
    num : number
}
const firstNodeTsFunc = ({num}: NumberType) => {
    console.log(`You have given ${num} for parameter`)
}

firstNodeTsFunc({num : 55})