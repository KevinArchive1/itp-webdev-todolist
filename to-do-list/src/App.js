import React from "react";
import TodoList from "./components/ToDoList";
import "./App.css"

function App() {
  return (
    <div className="Main">
    <h1>
      Todo List
    </h1>
    <TodoList />
    </div>
  );
}

export default App;
