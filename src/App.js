import React, { useState } from "react";
import logo from "./logo.svg";
import "./style/style.scss";

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`App theme theme--${theme}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Test dask theme</p>
        <a
          className="App-link"
          onClick={() => setTheme(theme === "dark" ? "default" : "dark")}
        >
          Toggle theme
        </a>
      </header>
    </div>
  );
}

export default App;
