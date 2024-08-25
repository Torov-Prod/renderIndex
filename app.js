// const { createServer } = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

let express = require('express');
let port = '3000';
let app = express();

app.get('/', function(req,res){
    res.sendfile('public/index.html');
});

app.listen(port);

console.log('Server start on port'+port)