import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Tree from "./components/Tree";

function App() {
  const [state, setState] = useState({ value: {}, status: 0 });

  const submit = text => {
    let res;
    try {
      res = JSON.parse(text);
      setState({ ...state, value: res, status: 1 });
    } catch (error) {
      setState({ ...state, status: 0 });
      alert("Невалидный JSON!");
    }
  };

  const clear = () => {
    setState({ value: {}, status: 0 });
  };

  return (
    <div className="App">
      <header className="App-header">JSON Visualize</header>
      <div className="row">
        <Input submit={submit} clear={clear} />
      </div>
      <div className="row">
        <div className="col l6 m6 s12 offset-l3 offset-m3">
          {state.status === 1 && <Tree data={state.value} />}
        </div>
      </div>
    </div>
  );
}

export default App;
