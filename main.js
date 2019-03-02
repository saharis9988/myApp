// const express = require('express');
// var app = express();
//   app.get('/',function(request,response){
//      response.send('hello test App!');
//   });
//   app.listen(80);
const http = require('http');
const port=process.env.PORT || 3000
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/html');
res.end('<h1>Hello World</h1>');
});
server.listen(port,() => {
console.log(`Server running at port `+port);
});