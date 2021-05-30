import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import AddToDo from "./Components/AddToDo";
import ToDoList from "./Components/ToDoList";

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <AddToDo dispatch={dispatch} />
      <ToDoList dispatch={dispatch} />
    </>
  );
};

export default App;
