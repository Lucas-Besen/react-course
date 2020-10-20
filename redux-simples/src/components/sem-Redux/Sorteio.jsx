import React from 'react'
import './intervalo.css'
import Card from './Card'

export default (props) =>{
    const {min, max} = props
    const alearorio = parseInt(Math.random() * (max - min)) + min
    return(
        <Card title = 'Sorteio de um Números' purple>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{alearorio}</strong>
                </span>
            </div>
        </Card>
    )
}