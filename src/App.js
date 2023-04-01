import { useState } from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  const [theme, setTheme] = useState("");
  console.log(theme);
  const changeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  if (theme === "light") {
    document.body.style.backgroundColor = "#bfe9ff";
  } else {
    document.body.style.backgroundColor = "#1a191a";
  }
  return (
    <div className="App" id={theme}>
      <div className="Container">
        <Weather valuefunction={changeTheme} theme={theme} />
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
