# Modern Web At Glance
Summarized what I learned about webs. 

## Web socket
Took below course and summarized essentials. 
- [NetNinja - ChatApp Ninja](https://www.youtube.com/watch?v=vQjiN8Qgs3c&list=PL-tV1f9Asb4giyEr2-LlLrsEHTkf0Geyr&index=1&t=11s)

1. Websocket is a protocol between client(browser) and server, which is differentiated from HTTP protocol. **Both protocols are at OSI model layer 7 and rely on TCP at layer 4**. Since it is always open and bidirectional flow, it allows us to interact in real time. 

2. For example, Let's imagine different users from different browsers login in your chat application and send a message. Then the message is updated on other browsers(clients) through server. Unlike Ajax in HTTP, **clients in websocket do not have to make a request to server**. Uses of websockets are as follows :

- multiplayer games
- online drawing canvas
- real-time apps
- collaborative code editings

## Socket.io
Install socket.io library in both backend and front end. First, install it through npm.

```shell
$npm install socket.io -D
```

And then, require it in Node.js/Express

```javascript
const express = require('express')
const app = express()
const server = app.listen(3000, ()=>console.log("listening at port 3000"))
const socket = require('socket.io')
const io = socket(server)
```

## CORS policy
### Understanding Cross origin resource sharing
CORS : Cross Origin Resource Sharing 

1. CORS is simply meaning **HTTP header**
2. which allows a server to indicate a browser **safe places to load resources**
3. cross origin means that you are making requests from different websites

For example, **XMLHttpRequest and Fetch API follows the same-origin policy**. You have to add CORS headers if you are going to get some data from different websites.

### solution
1) Importing modules with file:// is not supported
2) install npm cors package and set origin(url) and methods like below in your server 

![cors-origin](https://user-images.githubusercontent.com/83855174/146775619-0890d561-653d-408d-8d82-f4fce2a4a063.png)

### Access-Control-Allow-Origin
> response header indicates whether the **response can be shared** with requesting code from the **given origin**

```js
// A response that tells the browser to allow code from any origin to access a resource 
Access-Control-Allow-Origin: *

// A response that tells the browser to allow requesting code from the origin https://developer.mozilla.org to access a resource
Access-Control-Allow-Origin: "https://developer.mozilla.org"

// Any origin can create a hostile document with a "null" Origin. Should be avoided
Access-Control-Allow-Origin: null
```

## Reference 
- [Access control allow origin](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)