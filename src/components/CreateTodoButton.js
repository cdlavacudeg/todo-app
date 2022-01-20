import React from "react";

function CreateTodoButton(){
    const onClickButton=(msg)=>{
        alert(msg);
    }
    return (
        <button className="CreateTodoButton"
            onClick={()=>onClickButton('Modal aquí')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};