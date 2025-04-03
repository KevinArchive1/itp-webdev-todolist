import React, {useState, useEffect} from 'react';
import TodoItem from './ToDoItems';

function TodoList(){
    const [tasks, setTasks] = useState(() => {
        const savedTask = localStorage.getItem("tasks");
        return savedTask ? JSON.parse(savedTask) : [];
    });     
    const [text, setText] = useState('')

function addTask(text) {
    if (!text.trim()) return;
    const newTask = {
        id: Date.now(), text, completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
};

useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]); 

function deleteTask(id){
    setTasks(tasks.filter(task => task.id !== id))
}

function toggleCompleted(id){
    setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
    ));
}

return (
    <div className='todo-list'>
        <div className='tools'>
            <input value={text} onChange={a => setText(a.target.value)}/>
            <button onClick={() => addTask(text)}> Add</button>
        </div>
        {tasks.map(task => (
            <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleCompleted={toggleCompleted}/>
        ))}
    </div>    
)
};

export default TodoList;


