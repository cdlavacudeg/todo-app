import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';
/*const defaulTodos=[
  {text:'Cortar Cebolla',completed:true},
  {text:'Curso React',completed:false},
  {text:'Llamar abuelito',completed:false},
  {text:'Hacker Rank',completed:true}
]*/


function App(props) {
  const localStorageTodos=localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    parsedTodos=[];
  }else{
    parsedTodos=JSON.parse(localStorageTodos);
  }


  const [todos,setTodos]=React.useState(parsedTodos);
  const[searchValue,setSearchValue]=React.useState('');
  
  const completed=todos.filter(todo=>!!todo.completed).length;
  const totalTodos=todos.length;

  const saveTodos=(newTodos)=>{
    const stringifiedTodos=JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringifiedTodos);
    setTodos(newTodos);
  }
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
