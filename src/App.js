import React from "react";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Search Engine</h1>

        <Search />
        <p>
          Coded by Yuliia Ukrainets,
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Julyuk/weather-react"
          >
            open-sourced
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
