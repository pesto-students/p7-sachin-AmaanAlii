import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { name: taskName, done: false }]);
    setTaskName("");
  };

  const toggleTaskDone = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) => {
        if (i === index) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  return (
    <div class="todolist">
      <div class="container">
        <h1>To Do List</h1>
        <div class="list items">
          <ul>
            {tasks.map((task, index) => (
              <li
                key={index}
                style={{ textDecoration: task.done ? "line-through" : "none" }}
              >
                <input
                  type="checkbox"
                  checked={task.done}
                  onChange={() => toggleTaskDone(index)}
                />
                {task.name}
              </li>
            ))}
          </ul>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button class="button" onClick={addTask} disabled={!taskName}>
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
