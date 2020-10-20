import React from "react"
import DiretaFilho from "./DirataFilho"
export default (props)=>{
    return(
        <div>
            <DiretaFilho nome="mateus" idade={18} bool={true}/>
            <DiretaFilho nome="juca" idade={21} bool={true}/>
        </div>
    )
}