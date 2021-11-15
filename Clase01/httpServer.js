const { read } = require("fs")
const http = require("http")

http.createServer((req, res)=>{
    console.log(req.url)
    res.write("Hola Mundo!!")
    res.end();
}).listen(8080)