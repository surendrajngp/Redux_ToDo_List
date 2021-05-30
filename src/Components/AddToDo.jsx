import React, { useState } from "react";
import { connect } from "react-redux";
import { addToDo } from "../actions";

const AddToDo = (props) => {
  const [input, setInput] = useState("");
  return (
    <div className="AddToDO">
      <input
        type="text"
        name="input"
        value={input}
        onChange={(event) => {
          setInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
            // dispatching
          props.dispatch(addToDo(input));
          setInput("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default connect()(AddToDo);
