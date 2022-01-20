import React from "react";
import { AppUI } from "./AppUI";
//import './App.css';
/*const defaulTodos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Curso React',completed:false},
  {text:'Llamar abuelito',completed:false},
  {text:'Hacker Rank',completed:true}
]*/

function useLocalStorage (itemName,initialValue){
  const localStorageItem=localStorage.getItem(itemName);
  let parsedItem;

  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=initialValue;
  }else{
    parsedItem=JSON.parse(localStorageItem);
  }
  const [item,setItem]=React.useState(parsedItem);

  const saveItem=(newItem)=>{
    const stringifiedItem=JSON.stringify(newItem);
    localStorage.setItem('TODOS_V1',stringifiedItem);
    setItem(newItem);
  }
  return [item,saveItem];
}

function App(props) {
  const [todos,saveTodos]=useLocalStorage('TODOS_V1');
  
  const[searchValue,setSearchValue]=React.useState('');
  
  const completed=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const completeTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos[todoIndex].completed=!newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };
  const deleteTodo=(text)=>{
    const todoIndex=todos.findIndex(todo=>todo.text===text);
    const newTodos=[...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);
  };


  return (
    <AppUI totalTodos={totalTodos}
      completed={completed}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}/>
  );
}

export default App;
