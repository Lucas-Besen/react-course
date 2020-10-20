
import React, {useState} from "react"
import "./Mega.css"

export default (props) => {

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max - min)) + min
        return  array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : 
        aleatorio
    }
    
    function gerarNumero(qtde){
    
        const numeros = Array(qtde)
            .fill(0)
            .reduce((nums) => {
                const novoNumero = gerarNumeroNaoContido(1, 61, nums)
                return[ ...nums, novoNumero]
            }, [])
            .sort ((n1, n2) => n1 - n2)
        
        return numeros
    }
    const [qtde, setQtde] = useState(props.qtde || 6)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)
   
    return(
        <div className="mega">
            <h2>Mega</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label>Quantidade </label>
                <input 
                    min="1"
                    max="60"
                    type="number"
                    value={qtde}
                    onChange={e => setQtde(+e.target.value)}/>
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar</button>
        </div>
    )
}