import React, { Component } from 'react'
import Todoitem from './Todoitem';
import PropTypes from 'prop-types'

export default class Todos extends Component {
    render() {
        return (
           this.props.todos.map((todo) => (
               <Todoitem key={todo.id} todo={todo} markcomplete={this.props.markcomplete} delTodo={this.props.delTodo}/>
           ))
        )
    }
}

//PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markcomplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}