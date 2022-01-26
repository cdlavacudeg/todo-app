import React from "react";

function CreateTodoButton({setOpenModal,openModal}){
    const onClickButton=()=>{
        setOpenModal(!openModal);
    }
    return (
        <button className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export {CreateTodoButton};