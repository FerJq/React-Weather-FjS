import { useState } from "react";
import "./App.css";
import Weather from "./Weather";
import ChangeDayNight from "./ThemeMode";
import React, { Component } from "react";
import Switch from "react-switch";

function App() {
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

  class SwitchExample extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(checked) {
      this.setState({ checked });
    }

    render() {
      return (
        <label>
          <span>Switch with default style</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
      );
    }
  }
  return (
    <div className="App" id={theme}>
      <div className="Container">
        <Switch onChange={changeTheme} checked={theme === "dark"} />
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
