import React from "react";

function TodoSearch(){
    const onSearchValueChange=(event)=>{
        console.log(event.target.value);
    }
    return (
    <input 
        placeholder="React" 
        className="TodoSearch" 
        onChange={onSearchValueChange}/>
    );
}

export {TodoSearch};