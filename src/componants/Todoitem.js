import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  {Button} from 'react-bootstrap'


export class Todoitem extends Component {
   
    getStyle = ()=>{
        return{
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            background:'#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }

   


    render() {
        //deconstructing- to make it easier and not write this.props...
        const {id, title}=this.props.todo
        return (
            <div style={this.getStyle()}>
               <p>
                   
                   <input type='checkbox' onChange={this.props.markcomplete.bind
                    (this,id)}></input>
                   {title}
                   <Button variant="outline-danger" style={btnStyle} onClick={this.props.delTodo.bind
                    (this,id)}>x</Button>
                </p> 
            </div>
        )
    }
}

const btnStyle = {    
   
    borderRadius:'50%',
    cursor:'pointer',
    float: 'right'
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired,
    markcomplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}
export default Todoitem
