import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  {Button, Row, Form, Col} from 'react-bootstrap'

export class AddTodo extends Component {
    state={
        title:''
    }

    onChange = (e)=>this.setState({
        //gives 'title'
        [e.target.name]:e.target.value
    });

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''})
    }
    render() {
        return (

            <form onSubmit={this.onSubmit}>
                <Form>
                    <Form.Row>
                    <Form.Group  as={Col} controlId="input box">
                        
                        <Form.Control   name='title' type="text" value={this.state.title} onChange={this.onChange} placeholder="enter todo.." />
                        </Form.Group>
                        <Form.Group as={Col}>  
                        <Button   variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form.Group>     
                    </Form.Row>

                    
                   
                    </Form>
            </form>
            

        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired,
    markcomplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo
