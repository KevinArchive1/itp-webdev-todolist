import React, {useState} from 'react';
import TodoItem from './ToDoItems';

function TodoList(){
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: "Find Meaning to my life",
            completed: false,
        },
        {
            id: 2,
            text: "Forgive Myself",
            completed: false,
        },
        {
            id: 3,
            text: "Have Fun with my life",
            completed: true,
        },
    ]);    
    const [text, setText] = useState('')

function addTask(text) {
    if (!text.trim()) return;
    const newTask = {
        id: Date.now(), text, completed: false
    };
    setTasks([...tasks, newTask]);
    setText('');
};

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


