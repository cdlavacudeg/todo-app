import React from "react";

function TodoSearch({searchValue,setSearchValue}){
    
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