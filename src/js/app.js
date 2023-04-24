import React, { useState } from "react";
import { ReactDOM } from "react-dom";
import "/workspaces/edgarmenToDoListReact/src/styles/index.css";


function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, inputValue]);
      setInputValue();
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
      />
      <button onClick={addTask}>Add</button>
      {tasks.length === 0 ? (
        <p>No tasks, add a task</p>
      ) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span
                className="delete-icon"
                onClick={() => deleteTask(index)}
              >
                &times;
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;