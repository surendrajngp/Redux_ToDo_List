import React from "react";
import { useSelector } from "react-redux";
import { removeToDo } from "../actions";

const ToDoList = (props) => {
  const list = useSelector((state) => state.todos.data);
  return (
    <div>
      <ul>
        {list.map((val, idx) => {
          return (
            <li key={idx}>
              {val.task}{" "}
              <span
                onClick={() => {
                  props.dispatch(removeToDo(val.id));
                }}
              >
                X
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
