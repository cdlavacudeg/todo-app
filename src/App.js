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
  const [error,setError]=React.useState(false);
  const [loading,setLoading]=React.useState(true);
  const [item,setItem]=React.useState(initialValue);

  React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem=localStorage.getItem(itemName);
          let parsedItem;


          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem=initialValue;
          }else{
            parsedItem=JSON.parse(localStorageItem);
          }
          setItem(parsedItem);
          setLoading(false);
        }catch(error){
          setError(error);
        }
      },1000);
    }
  );
  
  
  const saveItem=(newItem)=>{
    try{
      const stringifiedItem=JSON.stringify(newItem);
      localStorage.setItem('TODOS_V1',stringifiedItem);
      setItem(newItem);
    }catch(error){
      setError(error);
    }
  }
  return {item,saveItem,loading,error};
}

function App(props) {
  const {item:todos,saveItem:saveTodos,loading,error}=useLocalStorage('TODOS_V1',[]);
  
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
  
 /* console.log('render antes effect');
  React.useEffect(()=>{
    console.log('use effect');
  },[totalTodos]) //se ejecuta cuando cambia totalTodos

  console.log('render despues effect')*/

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completed={completed}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todos={todos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}/>
  );
}

export default App;
