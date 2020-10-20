import React from "react"
import If from "./If"

export default (props) => {

    const usuario = props.usuario || {}
    
    return (
        <div>
            <If test={usuario!=null && usuario.nome!=null}>
                saja bem vindo <strong>{usuario.nome}</strong>
            </If>
        </div>
    )
}