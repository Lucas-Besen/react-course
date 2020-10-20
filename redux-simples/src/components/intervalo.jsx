import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import './intervalo.css'
import { alterarNumeroMinino, alterarNumeroMaxino } from '../store/actions/numeros'

const Intervalo = (props) => {
   
    const { min, max } = props
    
  
    return (
        <Card title='Intervalo de Números' red>
            <div className='Intervalo'>
                <span>
                    <strong>Mínino:</strong>
                    <input type='number' value={min} 
                        onChange={(e)=>props.alterarMinimo(e.target.value)}
                    ></input>
                </span>
                <span>
                    <strong>Máxino:</strong>
                    <input type='number' value={max} 
                        onChange={(e)=>props.alterarMaxino(e.target.value)} 
                    ></input>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        max: state.numeros.max,
        min: state.numeros.min
    }

}

function mapDispatchToProp(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterarNumeroMinino(novoNumero)
            dispatch(action)
        },
        alterarMaxino(novoNumero) {
            const action = alterarNumeroMaxino(novoNumero)
            dispatch(action)
        }
    }
    
}


export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Intervalo)