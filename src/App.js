import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "../src/component/Todo/index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is a To-do List created using the useReducer Hook!</p>
        <Todo />
      </header>
    </div>
  );
}

export default App;
