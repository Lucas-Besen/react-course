const http = require("http")
const server = http.createServer(function(req, res){
    res.writeHead(200, {"Content-Type":" text/html" })
    res.end("<h1>como vc sabe disso?<h1>")

})

const porta = 8085
server.listen(porta, function(){
    console.log(`escultado a Porta ${porta}`)
})