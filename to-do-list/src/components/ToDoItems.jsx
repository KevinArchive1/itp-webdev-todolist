import React from "react";


function TodoItem({task, deleteTask, toggleCompleted}) {
    function handleChages(){
        toggleCompleted(task.id)
    }
    return (
        <div className="todo-item">
            <div className="contents">
                <input type="checkbox" checked={task.completed} onChange={handleChages}/>
                <div className="task">
                    <h2>{task.text} {task.completed ? "(Task Completed ✅)" : ""}</h2>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
            </div>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </div>
    )
}

export default TodoItem;
