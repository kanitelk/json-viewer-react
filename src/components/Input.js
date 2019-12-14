import React, { useState, useEffect } from "react";

function Input({ submit, clear }) {
  const [state, setState] = useState(`{ "firstname":"Kirill",
  "lastname":"Tyurin",
  "array": [1,2,3],
  "age":20,
  "prog": {"a":1 }}`);

  return (
    <div className="input-field col l6 m6 s12 offset-l3 offset-m3">
      <textarea
        value={state}
        onChange={e => setState(e.target.value)}
        id="textarea1"
        className="textarea"
        placeholder="{'JSON': 'here'}"
      ></textarea>
      <button
        onClick={() => submit(state)}
        className="btn waves-effect waves-light"
      >
        Create tree
      </button>
      <button
        style={{ marginLeft: "1rem" }}
        onClick={() => {
          clear();
          setState(``);
        }}
        className="btn waves-effect red accent-2"
      >
        Clear
      </button>
    </div>
  );
}

export default Input;
