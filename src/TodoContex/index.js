import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext=React.createContext();

function TodoProvider(props){
  const {item:todos,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',[]);
  
  const[searchValue,setSearchValue]=React.useState('');
  const [openModal,setOpenModal]=React.useState(false);
  
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
  
  const addTodo=(text)=>{

    const newTodos=[...todos];
    newTodos.push({
      complete:false,
      text:text
    });
    saveTodos(newTodos);
  };
 /* console.log('render antes effect');
  React.useEffect(()=>{
    console.log('use effect');
  },[totalTodos]) //se ejecuta cuando cambia totalTodos

  console.log('render despues effect')*/
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completed,
            searchValue,
            setSearchValue,
            todos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider};