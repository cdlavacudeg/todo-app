import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';
const todos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Curso React',completed:false},
  {text:'Llamar abuelito',completed:false},
]


function App(props) {
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      

      <TodoList>
      {todos.map(todo=>(
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
      ))}
      </TodoList> 
      <CreateTodoButton />
      
    </React.Fragment>
    
  );
}

export default App;
