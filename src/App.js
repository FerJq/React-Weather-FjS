import { useState } from "react";
import "./App.css";
import Weather from "./Weather";

import Switch from "react-switch";

function App() {
  let mode = "Light mode";
  const [theme, setTheme] = useState("light");
  console.log(theme);

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  if (theme === "light") {
    document.body.style.backgroundColor = "#bfe9ff";
  } else {
    document.body.style.backgroundColor = "#1a191a";
  }

  return (
    <div className="App" id={theme}>
      <div className="Container">
        <span>
          {" "}
          <h5>
            {mode} <Switch onChange={changeTheme} checked={theme === "dark"} />
          </h5>
          <br />
        </span>
        <Weather theme={theme} />
      </div>
      <footer className="SourceCode">
        Inspiring-Swang Weather App was coded by{" "}
        <a
          className=""
          href="https://www.linkedin.com/in/fernanda-santiago-b93b07265"
          target="_blank"
          rel="noreferrer"
        >
          Fernanda J. Santiago
        </a>{" "}
        and is{" "}
        <a
          className=""
          href="https://github.com/FerJq/weather-vanilla"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
