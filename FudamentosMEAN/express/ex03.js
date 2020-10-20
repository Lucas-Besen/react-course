const express = require("express")
const server = express()

server.use("/api", function(req, res, next ){
    console.log("inicio...")
    next()
    console.log("Fim...")
})

server.use("/api",function(req, res){
    console.log("resposta...")
    res.send("<h1>ola API!<h1>")
})

server.listen(3000, () => console.log("Executando..."))