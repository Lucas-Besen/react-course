import {description_changed, todo_searched, todo_added, todo_clear} from './actionType'
const INITIAL_STATE = {description: '',list: []
}
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case description_changed :
            return {...state, description: action.payload}
        case todo_searched :
            return {...state, list: action.payload}
        case todo_clear:
            return{...state, description:''}
        default:
            return state
    }
}
