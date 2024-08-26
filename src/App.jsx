import React from "react";
import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todo, SetTodo] = useState("By Default");

  const [todos, Settodos] = useState([{ task: "Default Task", id: uuidv4() }]);

  const AddTask = () => {
    Settodos((todos) => {
      return [...todos, { task: todo, id: uuidv4(), isDone: false }];
    });

    SetTodo("");
  };

  // Function to edit a todo task

  function EditFunc(id) {
    Settodos(
      todos.filter((tasks) => {
        return tasks.id != id;
      })
    );

    const taskToEdit = todos.find((task) => task.id == id);

    SetTodo(taskToEdit.task);
  }

  // Function to delete a todo task

  function DeleteFunc(id) {
    Settodos((todosElem) => todosElem.filter((task) => task.id != id));
  }

  // Function to convert all into upper case

  function UpperCaseALL() {
    Settodos((elemts) =>
      elemts.map((elem) => {
        return {
          ...elem,
          task: elem.task.toUpperCase(),
        };
      })
    );
  }

  // Function to convert single todo into upper case

  function UpperCaseOne(id) {
    Settodos((upperCaseOne) =>
      upperCaseOne.map((SingleTodo) => {
        if (SingleTodo.id == id) {
          return {
            ...SingleTodo,
            task: SingleTodo.task.toUpperCase(),
          };
        } else {
          return SingleTodo;
        }
      })
    );
  }

  // Function to set mark as done

  function FinishedTask(id) {
    Settodos(
      todos.map((elem) => {
        if (elem.id == id) {
          return {
            ...elem,
            isDone: true,
          };
        } else {
          return elem;
        }
      })
    );
  }

  function CompletedAll() {
    Settodos((allTasks) =>
      allTasks.map((task) => {
        return {
          ...task,
          isDone: true,
        };
      })
    );
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
          {todos.map((singleTask) => (
            <li key={singleTask.id}>
              <span
                style={
                  singleTask.isDone
                    ? { textDecorationLine: "line-through" }
                    : {}
                }
              >
                {" "}
                {singleTask.task}{" "}
              </span>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => EditFunc(singleTask.id)}>Edit</button>{" "}
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => DeleteFunc(singleTask.id)}>
                Delete
              </button>{" "}
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => UpperCaseOne(singleTask.id)}>
                Upper Case One
              </button>
              &nbsp; &nbsp; &nbsp;
              <button onClick={() => FinishedTask(singleTask.id)}>
                Done Task
              </button>
              <br />
              <br />
            </li>
          ))}
        </ul>
        <p>If you want to update all the tasks in the array then:</p>
        <button onClick={UpperCaseALL}>TO UPPER CASE</button>
        &nbsp; &nbsp;
        <button onClick={CompletedAll}>All Tasks Completed</button>
      </div>
    </>
  );
}
