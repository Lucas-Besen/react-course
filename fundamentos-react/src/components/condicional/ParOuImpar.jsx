import React from "react"

export default (props) => {
    const resultado = props.numero % 2 === 0 ? "Par" : "impar"
    return (
        <div>
            <span>{resultado}</span>
        </div>
    )
}