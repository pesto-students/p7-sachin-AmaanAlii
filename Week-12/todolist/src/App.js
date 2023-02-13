import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div class="todolist">
      <div class="container">
        <h1>To Do List</h1>
        <div class="list items">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <input type="text" onChange={handleChange} value={inputText} />
          <button
            class="button"
            onClick={() => addTask(inputText)}
            disabled={!inputText}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
