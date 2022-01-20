import React from "react";

function TodoItem(props){
    
    return(
        <li className="TodoItem">
      <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
        onClick={()=> props.onComplete(props.text)}
      >
        √
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={()=>props.onDelete(props.text)}>
        X
      </span>
    </li>
    );

}

export {TodoItem};