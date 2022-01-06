const ajaxBtn = document.querySelector(".ajaxSend")
const formData = document.querySelector("#email").value

function sendAjax(url, data) {
    let myData = {'email':data}
    myData = JSON.stringify(myData)
    const xhr = new XMLHttpRequest();

    xhr.open('POST', url) // Sets the request method, request URL, and synchronous flag.
    xhr.setRequestHeader('content-type', 'application/json') // Combines a header in author request headers.
    xhr.send(myData) // Initiates the request. 
    xhr.addEventListener('load', function(){
        console.log(xhr.responseText)
    })
}

ajaxBtn.addEventListener("click", function(){
    sendAjax("http://localhost:3000/ajax_send_email", formData)
})

