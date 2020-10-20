import React, {useState} from "react"
import IndirataFilho from "./IndiretaFilho"

export default (props)=>{

    const [nome, setNome] = useState("?")
    const [idade, setIdade] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformacoes(nome, idade, bool){
       setNome(nome)
       setIdade(idade)
       setBool(bool)
    }

    return(
        <div>
           <div>
               <span>{nome} </span>
               <span><strong> {idade} </strong></span>
               <span> {bool ? "certo" : "erro"}</span>
           </div>
           <IndirataFilho quandoClicar={fornecerInformacoes} ></IndirataFilho>
        </div>
    )
}