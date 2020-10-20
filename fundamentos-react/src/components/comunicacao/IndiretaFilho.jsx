import React from "react"

export default (props) => {

    const gerarIdade = () => parseInt(Math.random()*20)+50
    const gerarBool = () => Math.random() > 0.5

    return (
        <div>
            <div>Filho</div>
            <button onClick={e => props.quandoClicar("juca", gerarIdade, gerarBool)}>
                Dados
            </button>
        </div>
    )
}