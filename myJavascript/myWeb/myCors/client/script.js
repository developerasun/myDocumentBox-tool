// let mydata
// // await is only valid in async functions and the top
// // level bodies of modules
// export async function myFetch(){
//     const response = await fetch("http://localhost:5500/data")
//     const data = await response.json()
//     console.log(data)
//     return data
// } 


fetch('http://localhost:5500/data')
    .then(res => res.json)
    .then(data => console.log((data)))