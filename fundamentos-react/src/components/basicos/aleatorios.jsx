import React from 'react'

export default (props) => {
    const { Min, Max } = props
    const Ale = parseInt(Math.random() * (Max - Min)) + Min;
    return (
        <div>
            <h2>Numero Aleatorio</h2>
            <h3>Valor Minino {Min}</h3>
            <h3>Valor Maxino {Max}</h3>
            <h3>Numero Aleatorio {Ale}</h3>
        </div>
    )
}