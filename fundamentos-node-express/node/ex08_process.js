function temParam(param){
    return process.argv.indexOf(param) !== -1
}

if(temParam("--producao")){
    console.log("Atençao total")

}else{
    console.log("traquilo")
}