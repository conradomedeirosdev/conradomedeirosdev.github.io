import React, { Component } from 'react';
import '../Style/TodoList.css'

class TodoList extends Component {
    render(){
        return(
          <div className="content-center">
            <form className="forms">
              <input className="input" placeholder="Tasks" />
              <button className="btn" type="submit"> Add Task </button>
            </form>
          </div>
        );
    }
}

export default TodoList;