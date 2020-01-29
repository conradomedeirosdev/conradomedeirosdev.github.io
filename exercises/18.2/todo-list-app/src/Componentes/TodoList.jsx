import React, { Component } from 'react';
import '../Style/TodoList.css'
import Todo from './Todo'


class TodoList extends Component {
  render(){
    const todos = [
      {
        "id": Date.now(),
        "value": "Buy milk",
        "done": false
      },
      {
        "id": Date.now()+1,
        "value": "Play with doge",
        "done": true  
      }
    ]
    return(
      <div>
        <div className="hero-body has-text-centered">
          <p className="title is-1">Task To Do</p>
        </div>
        <section className="section">
          <div className="container">
            {todos.map(todo => (
              <Todo key={todo.id} todo={todo}/>
            ))}        
          </div>
        </section>
      </div>
    );
  }
}

export default TodoList