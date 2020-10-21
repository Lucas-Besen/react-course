import {description_changed, todo_searched, todo_clear } from './actionType'
import axios from 'axios'

const URL ='http://localhost:3003/api/todos'

const changeDescription = (event) => ({
    type:description_changed,
    payload: event.target.value
})

const search = () =>{
    return (dispatch, getState) =>{
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : ''
        const request = axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: todo_searched, payload: resp.data}))
    }
}

const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
        .then(resp => dispatch( clear()))
        .then(resp => dispatch (search()))
    } 
}
const markAsDone = (todo) =>{
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch(search()))
    }
}

const markAsPending = (todo) => {
    return dispatch =>{
        axios.put(`${URL}/${todo._id}`, {...todo, done:false})
            .then(resp=> dispatch(search()))

    }
}
const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => dispatch(search()))
    }
}
const clear =() => {
    return [{
        type:todo_clear,
    }, search()]
}
export {changeDescription, search, add, markAsDone, markAsPending, remove, clear}