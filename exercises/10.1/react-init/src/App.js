import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul className="list">
        {arr.map(list => <li>{list}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
