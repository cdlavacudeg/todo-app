import React from "react";
import { TodoContext } from "../TodoContex";

function TodoSearch(){
    const {searchValue,setSearchValue} = React.useContext(TodoContext);
    const onSearchValueChange=(event)=>{
        setSearchValue(event.target.value);
    }
    return (
    <input 
        placeholder="React" 
        className="TodoSearch"
        value={searchValue} 
        onChange={onSearchValueChange}/>
        
    );
}

export {TodoSearch};