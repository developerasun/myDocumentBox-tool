var express = require("express");

var app = express();

var router = express.Router(); 

var path = __dirname + '/views/'; 


app.use(express.static('public'));

router.use(function (req,res,next) { console.log("/" + req.method); next();
});

router.get("/",function(req,res){ res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){ res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){ res.sendFile(path + "contact.html");
});

app.use("/",router);

app.use("*",function(req,res){ res.sendFile(path + "404.html");
});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
  console.log("Server started.......");
});



// const express = require('express')
// const app = express()

// // 포트 번호 지정: 3000 (포트는 겹칠 수 없다. 하나의 포트에 하나의 프로그램.)
// const port = 3000


// // req: 브라우저의 리퀘스트, res: 백엔드 서버의 값 반환
// app.get('/', (req, res) => {
// res.send('Hello World!')

// // 백엔드를 짠다 - 디비에서 성적 가져와서 보기좋게 담아서 파싱 반환한다. 

// })

// app.get('/test', (req, res) => {
//   res.send('test world!')
// })


// // app.listen : 백엔드 서버 구동
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })