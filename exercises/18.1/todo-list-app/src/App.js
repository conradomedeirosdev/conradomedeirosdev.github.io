import React, { Component } from 'react';
import Navbar from './Componentes/Navbar';
import TodoList from './Componentes/TodoList'


class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar />
        <TodoList />
      </div>
    );
  }
}

export default App;
