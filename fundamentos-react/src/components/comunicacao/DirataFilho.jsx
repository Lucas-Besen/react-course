import React from "react"

export default (props) => {
    return (
        <div>
            <span>{props.nome} </span>
            <span><strong> {props.idade} </strong> </span>
            <span> { props.bool ? "Acertou" : "errou"}</span>
        </div>
    )
}