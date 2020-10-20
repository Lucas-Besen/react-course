import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Sorteio = (props) =>{
   const {min, max } =  props.numeros
   const resultado = parseInt(Math.random()* parseInt(max)- parseInt(min))+ parseInt(min)
    return(
        <Card title = 'Sorteio de um Números' purple>
            <div >
                <span>
                    <span>Resultado:</span>
                    <strong>{resultado}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateProps(state) {
    return{
        numeros: state.numeros
    }
}

export default connect(mapStateProps)(Sorteio)