import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import {TodoContext} from "./TodoContex";
import {Modal} from "./components/Modal"

function AppUI(){
    const {
        error,
        loading,
        todos,
        searchValue,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal} =React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter/>

            <TodoSearch />

            
                    
            <TodoList>
                {error && <p>Error</p>}
                {loading && <p>Estamos Cargando</p>}
                {(!loading && todos.lenght===0) && <p>Crea tu primer Todo.</p>}

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


            {!!openModal && (
                <Modal >
                <p>{searchValue}</p>
                </Modal> 
            )}
                      
            
            <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
            
    </React.Fragment>
    );
}

export {AppUI};