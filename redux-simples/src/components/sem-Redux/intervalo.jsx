import React from 'react'
import './intervalo.css'
import Card from '../Card'

export default (props) =>{
    const {min, max} = props
    return(
        <Card title = 'Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínino:</strong>
                    <input type='number'value={min} 
                        onChange={(e) => props.onMinChenged(+e.target.value)}
                    ></input>
                </span>
                <span>
                    <strong>Máxino:</strong>
                    <input type='number'value={max} 
                        onChange={(e) => props.onMaxChenged(+e.target.value)}
                    ></input>
                </span>
            </div>
        </Card>
    )
}