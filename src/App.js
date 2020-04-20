import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css';
import Todos from './componants/Todos'
import Header from './componants/layout/Header'
import AddTodo from './componants/AddTodo'
import About from './componants/pages/About';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Container} from 'react-bootstrap'




export default class App extends Component {
  state = {
    todos:[
      
    ]
  }

  componentDidMount(){
    
    Axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todos:res.data.map(item=>({...item,completed:false}))}))
        
  }
  //toggle complete
  markcomplete = (id)=>{
    this.setState({todos: this.state.todos.map((todo) => {
      if (todo.id===id){
        todo.completed= !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id)=>{
    Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res=>(this.setState({todos:[...this.state.todos.filter(todo=>todo.id!==id)]})))
    

  }
  
  //add todo

  
  addTodo=(title)=>{
    Axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10',{
      title:title,
      completed:false
    }).then(res=>(this.setState({todos: [...this.state.todos,res.data]})))

    
    

  }

  render() {
    
    return (
      <Router>
        <div className="App">
          <Container>
            
            <Header></Header>
            <Route exact path='/' render={props=>(
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>      
                <Todos todos={this.state.todos} markcomplete={this.markcomplete} delTodo={this.delTodo}></Todos>                
              </React.Fragment>
            )}/>
            <Route path='/about' component={About}/>
            </Container>
      
      </div>
    </Router>
    )
  }
}


