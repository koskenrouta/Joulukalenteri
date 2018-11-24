import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./calendar";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> Joulukalenteri </h1>
      <Calendar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
