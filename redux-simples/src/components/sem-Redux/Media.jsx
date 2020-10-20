import React from 'react'
import './intervalo.css'
import Card from '../Card'

export default (props) =>{
    const {min, max} = props
    const Resultado = (max + min)/2
    return(
        <Card title = 'Média dos Números' green>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{Resultado}</strong>
                </span>
            </div>
        </Card>
    )
}