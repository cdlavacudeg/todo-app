import React from 'react';

function TodosLoading() {
    return (
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Se están cargando las tareas...</p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    );
  }
export {TodosLoading};
