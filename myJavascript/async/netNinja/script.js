const getTodos = (callback) => { 
    const request = new XMLHttpRequest()
    
    request.addEventListener("readystatechange", ()=>{
        if (request.readyState === 4 && request.status === 200) { 
            callback(null, request.responseText)
        } else if (request.readyState === 4) { 
            callback('could not fetch data', undefined)
        }
    })
    
    request.open("GET", "https://jsonplaceholder.typicode.com/todos/")
    request.send()
}

// Non blocking test 
console.log(1)
console.log(2)

// callback parameter convention : err, data (in order)
getTodos((err, data)=>{
    console.log("callback called")
    err !==null ? console.log("could not fetch data") : console.log(data)
})

console.log(3)
console.log(4)
// Non blocking test result : 1,2,3,4, data