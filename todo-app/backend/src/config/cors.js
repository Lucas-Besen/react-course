module.exports = function(req, res, next){
    res.header("Access-control-Allow-Origin", "*")
    res.header("Access-control-Allow-methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept")
    next()
}