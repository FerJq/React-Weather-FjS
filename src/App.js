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
    mode = "Light Theme ";
  } else {
    document.body.style.backgroundColor = "#1a191a";
    mode = "Dark Theme ";
  }

  return (
    <div className="App" id={theme}>
      <div className="Container">
        <span>
          <span className="Modetheme">{mode} </span>{" "}
          <Switch onChange={changeTheme} checked={theme === "dark"} />
        </span>
        <Weather theme={theme} modetheme={changeTheme} />
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
