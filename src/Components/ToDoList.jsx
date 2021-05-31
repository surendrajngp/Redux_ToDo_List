import React from "react";
import { useSelector } from "react-redux";
import { removeToDo } from "../actions";
import { AiFillDelete } from "react-icons/ai";

const ToDoList = (props) => {
  const list = useSelector((state) => state.todos.data);
  return (
    <ul className="ToDoList">
      {list.map((val, idx) => {
        return (
          <>
            <li key={idx}>
              <span style={{ wordBreak: "break-word" }}>{val.task}</span>
              <AiFillDelete
                size={25}
                onClick={() => {
                  props.dispatch(removeToDo(val.id));
                }}
                className="delete"
              />
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default ToDoList;
