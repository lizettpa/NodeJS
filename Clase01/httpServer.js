const http = require("http")

http.createServer(function(req,res){
    let params = req.url.substr(2).split("& ")
    if(params.length==2){
        console.log(params)
        let r = parseFloat(params[0].substr(2))
        let h = parseFloat(params[1].substr(2))
        console.log(r,h)
        let a = (2*Math.PI*(r**2))+(h*(2*Math.PI*r))
        res.write(`El resultado del área del cilindro es: ${a}`)
    }
    res.end();
}).listen(8080)