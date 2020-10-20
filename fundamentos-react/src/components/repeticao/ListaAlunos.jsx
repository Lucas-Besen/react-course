import React from "react"
import Alunos from "../../data/alunos"

export default (props) => {
    const dados = Alunos.map((Alunos) => {
    return <li key={Alunos.id}>{Alunos.id}) {Alunos.nome} nota {Alunos.nota}</li>
    })
    return (
        <div>
            <ul>
                {dados}
            </ul>
        </div>
    )
}