import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';
const defaulTodos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Curso React',completed:false},
  {text:'Llamar abuelito',completed:false},
  {text:'Hacker Rank',completed:true}
]


function App(props) {
  const [todos,setTodos]=React.useState(defaulTodos);
  const[searchValue,setSearchValue]=React.useState('');
  
  const completed=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    setTodos(newTodos);
  };
  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  };


  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completed}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      

      <TodoList>
      {todos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()))
        .map(todo=>(
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />))}
      </TodoList> 
      <CreateTodoButton />
      
    </React.Fragment>
    
  );
}

export default App;
