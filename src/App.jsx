import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [todo, SetTodo] = useState(["By Default"]);

  const [todos, Settodos] = useState(["EAT", "SLEEP", "REPEAT"]);

  const AddTask = () => {
    Settodos([...todos, todo]);
  };

  // Function to edit a todo task

  function EditFunc() {
    console.log("Edit Function Called");
  }

  // Function to delete a todo task

  function DeleteFunc() {
    console.log("Delete Function Called");
  }

  return (
    <>
      <h2>ToDo List</h2>

      <div className="input">
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            SetTodo(e.target.value);
            console.log(e.target.value);
          }}
        />

        <button onClick={AddTask}>Add Task</button>
      </div>

      <div className="todos-container">
        <ul>
          {todos.map((singleTask, ind) => (
            <li key={ind}>
              {singleTask} <button onClick={EditFunc}>Edit</button>{" "}
              <button onClick={DeleteFunc}>Delete</button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
