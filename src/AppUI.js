import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

function AppUI({
    loading,
    error,
    totalTodos,
    completed,
    searchValue,
    setSearchValue,
    todos,
    completeTodo,
    deleteTodo
            }){
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
        {error && <p>Error</p>}
        {loading && <p>Estamos Cargando</p>}
        {(!loading && !todos.lenght) && <p>Crea tu primer Todo.</p>}

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

export {AppUI};