import React from 'react'


import PageHeader from '../template/pageHeader'
import TodoFrom from './todoFrom'
import TodoList from './todoList'


export default (props)=>(
    <div>
        <PageHeader name='Tarefas' small='Cadastro'></PageHeader>
        <TodoFrom/>
        <TodoList/>
    </div>
)