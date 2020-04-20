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

            
                <Form className='mainform' style={mainformstyle} onSubmit={this.onSubmit}>
                    <Row >
                        
                        <Col xs={10} className='block'style={blockstyle} >
                            <Form.Group  controlId="input box"  >                        
                             <Form.Control     name='title' type="text" value={this.state.title} onChange={this.onChange} placeholder="enter todo.." />
                             </Form.Group> 
                        </Col>
                        <Col xs={2} className='block'  >
                        <Form.Group  controlId="input box" style={blockstyle}>
                        <Button   variant="primary" type="submit">
                        Submit
                        </Button>
                        </Form.Group>  
                        </Col>   
                    </Row>

                    
                   
                    </Form>
            
            

        )
    }
}

const blockstyle={
    margin: 'auto',
    width: '50%',
    border: '3px',
    padding: '5px'

}
const mainformstyle={
    margin: '1em',
    padding: '0',
    textalign: 'center',
}
//PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.object.isRequired,
    markcomplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}

export default AddTodo
