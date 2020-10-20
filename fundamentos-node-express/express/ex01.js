const express = require("express")
const server = express()

server.get("/", function(req, res){
    res.send("<h1>Ola mundo</h1>")
})
server.all("/teste", function(req, res){
    res.send("<h1>ola mundo teste<h1>")
})
server.all(/api/, function(req, res){
    res.send("<h1>ola mundo API<h1>")
})

server.listen(3000, () => console.log("Executando..."))