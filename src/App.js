import React from "react";
import logo from "./logo.svg";
import Dragon from "./Dragon";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DndProvider backend={Backend}>
          <Dragon />
        </DndProvider>
      </header>
    </div>
  );
}

export default App;
