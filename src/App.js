import React from "react";
import logo from "./logo.svg";
import Dragon from "./Dragon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Dragon />
      </header>
    </div>
  );
}

export default App;
