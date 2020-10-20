import React from 'react'
import './intervalo.css'
import Card from './Card'

export default (props) =>{
    const {min, max} = props
    const Resultado = min + max
    return(
        <Card title = 'Soma dos Números' blue>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{Resultado}</strong>
                </span>
            </div>
        </Card>
    )
}