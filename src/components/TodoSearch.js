import React from "react";
import { TodoContext } from "../TodoContex";

function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    }
    return (
    <input 
        placeholder="Filtra las tareas" 
        className="TodoSearch"
        value={searchValue} 
        onChange={onSearchValueChange}/>
        
    );
}

export {TodoSearch};