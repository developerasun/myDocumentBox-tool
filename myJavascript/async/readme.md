# Understanding asynchronous Javascript

- NetNinja : Asynchronous Javascript
- Free code camp : JSON APIs and Ajax

# API, AJAX, and JSON
<p>
API stands for application programming interface. APIs are tools to send and receive data through computers, helping programs communicating with other ones. Usually, API is used to get data from external source. 
</p>

<p>
Ajax is asynchronous javascript and XML, making asynchronous request to server to move data. The moved data is often JSON format. Most modern web browsers transfer data in JSON format.
</p>

<p>
The data, meaning JSON, are sent as bytes and your application takes it as a string. 
</p>

## Data Transmission : Web API to Application
```
Web API ===(send JSON in bytes)===> Application(receive JSON in string) ===(parse JSON)===> Javascript object constructed and can be used. 
```

## Request External Data with Ajax

- XMLHttpRequest.open(http method, url, async flg) : initialize a request with url
- XMLHttpRequest.send : send the request
- XMLHttpRequest.onload : once response received, convert it to 1) Javascript object 2) string for display


```javascript
document.addEventListener('DOMContentLoaded', function(){
document.getElementById('getMessage').onclick = function(){
    // Add your code below this line

    // Use XMLHttpRequest (XHR) objects to interact with servers. 
    // You can retrieve data from a URL without having to do a full page
    // refresh. This enables a Web page to update just part of 
    // a page without disrupting what the user is doing.
    // XMLHttpRequest.open(http method, url, async flag)
    const req = new XMLHttpRequest()
    req.open('GET', '/json/cats.json', true)
    req.send()
    req.onload = function() {
        const json = JSON.parse(req.responseText) // JSON.parse : makes a javascript object
        document.getElementsByClassName("message")[0].innerHTML = JSON.stringify(json) // JSON.stringify : makes a string from javascript object. 
    }

    // Add your code above this line
};
});

```

## Send Data To External Source With Ajax

- XMLHttpRequest.open(http method, url, async flag)
- XMLHttpRequest.setRequestHeader(name, value)
- XMLHttpRequest.onreadystatechange : checks if 1) readyState === 4 2) status === 201
- XMLHttpRequest.send(body)

```javascript
const userName = document.getElementById('name').value;
const xhr = new XMLHttpRequest()
xhr.open('POST', url, true)

// XMLHttpRequest.setRequestHeader should be called after open before send.
xhr.setRequestHeader('content-type', 'application/json; charset=UTF-8') 

// handles a change in the state of the request
xhr.onreadystatechange = function() {

    // A readyState of 4 means the operation is complete, and a status of 201 means it was a successful request
    if(xhr.readyState === 4 && xhr.status === 201) {
        const serverResponse = JSON.parse(xhr.response)
        document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix
    }
}
const body = JSON.stringify( { userName : userName, suffix: ' loves cats!' } )
xhr.send(body) // send the X
```

## Request External Data With Fetch
Fetch performs the same action as the above XMLHttpRequest with easier syntax. Fetch returns a Promise and built in all browsers. 

- Fetch, first then, second then
- Fetch : returns a Promise
- First then : returns a Promise
- Second then : taking Javascript object as argument

```javascript
fetch(url).then(
    response => response.json() // get json here
).then(
    data => { // this argument is javascript object
        something.innerHTML = JSON.stringify(data) // display the data
     }
)
```