import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Soma = (props) =>{
    const {min, max} = props.numeros
    const resultado = parseInt(min)+ parseInt(max)
    return(
        <Card title = 'Soma dos Números' blue>
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


export default connect(mapStateProps)(Soma)