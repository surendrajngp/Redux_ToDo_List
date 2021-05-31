import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="App">
        <div className="ToDoApp">
          <AddToDo dispatch={dispatch} />
          <ToDoList dispatch={dispatch} />
        </div>
      </div>
    </>
  );
};

export default App;
