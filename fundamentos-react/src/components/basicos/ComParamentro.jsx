import React from 'react'

export default function ComParamentro(props) {

    const nota2 = Math.ceil(props.Nota)
    const status = nota2 >= 7 ? 'Aprovado' : 'em recuperação'
    return (
        <div>
            <h3>{props.Nome} tem nota {nota2} e esta {status}!</h3>
        </div>
    )
}