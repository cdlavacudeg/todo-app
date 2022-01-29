import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from "./components/TodoForm";
import { TodosLoading } from "./components/TodosLoading";
import { TodosError } from "./components/TodosError";
import { EmptyTodos} from "./components/EmptyTodos";
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
        <div className="container">
            <TodoCounter/>

            <TodoSearch />

            
                    
            <TodoList>
                {error && <TodosError/>}
                {loading && <TodosLoading/>}
                {(!loading && todos.length===0) && <EmptyTodos/>}

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
                 <TodoForm />
                </Modal> 
            )}
                      
            
            <CreateTodoButton setOpenModal={setOpenModal} openModal={openModal}/>
            
    </div>
    );
}

export {AppUI};