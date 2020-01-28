import React, {createContext, useState} from 'react';

export const TodoProvider = (props) => {
  return (
    {props.children}
  )


export const TodoContext = createContext();