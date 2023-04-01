import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather />
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
