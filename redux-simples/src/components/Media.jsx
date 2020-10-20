import React from 'react'
import {connect} from 'react-redux'
import Card from './Card'

const Media = (props) =>{
   const {min, max} = props.numeros
   const resultado = (parseInt(min)+ parseInt(max))/2
    return(
        <Card title = 'Média dos Números' green>
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
    return {
        numeros: state.numeros
    }

}
export default connect(mapStateProps)(Media)