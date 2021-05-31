import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";
import { FaRegStickyNote } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
const AddToDo = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="AddToDo">
      <FaRegStickyNote size={30} color={"white"} />
      <input
        type="text"
        name="input"
        value={input}
        placeholder="Type Here ...."
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          // dispatching
          if (input !== "") {
            props.dispatch(addToDo(input));
          }
          setInput("");
        }}
      >
        <AiOutlineArrowRight size=
        {20} />
      </button>
    </div>
  );
};

export default connect()(AddToDo);
