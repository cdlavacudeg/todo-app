import React from "react";
import { TodoContext } from "../TodoContex";
import './components.css';

function TodoCounter(){
    const {totalTodos,completed}=React.useContext(TodoContext);
    return(
        <h2 className="TodoCounter">Has completado {completed} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter};