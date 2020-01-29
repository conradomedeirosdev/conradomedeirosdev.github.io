import React, {createContext, useState} from 'react';

export const TodoProvider = (props) => {
    const [todos, setTodos] = useState([
      {
        "id": Date.now(),
        "value": "Buy milk",
        "done": false,
      },
      {
        "id": Date.now() + 1,
        "value": "Play with doge",
        "done": false,
      }
    ]);
  
    return (
       {children}
    )
  }

export const TodoContext = createContext();