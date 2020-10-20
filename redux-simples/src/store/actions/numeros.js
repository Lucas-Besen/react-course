import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from './actionType'


// action creator
const alterarNumeroMinino = (novoNumero) => {
    return {
        type: NUM_MIN_ALTERADO,
        payload: novoNumero

    }
}

const alterarNumeroMaxino = (novoNumero) => {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}

export { alterarNumeroMinino, alterarNumeroMaxino }