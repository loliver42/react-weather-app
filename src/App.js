import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="New York" />

        <footer>
          This project was coded by{" "}
          <a href="" target="blank">
            Lila Oliver
          </a>{" "}
          and is outsourced on{" "}
          <a href="" target="blank">
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
