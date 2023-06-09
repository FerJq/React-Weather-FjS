import React, { useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import axios from "axios";
import WeatherData from "./WeatherData";
import "./App.css";
import "./Weather.css";

export default function Weather(props) {
  let [lon, setLon] = useState(null);
  let [lat, setLat] = useState(null);
  navigator.geolocation.getCurrentPosition(function (position) {
    let latitude = `${position.coords.latitude}`;
    let longitude = `${position.coords.longitude}`;
    setLat(latitude);
    setLon(longitude);
  });

  let [weatherProps, setWeatherProps] = useState({ prepare: false });
  const [units, setUnits] = useState("metric");
  const [city, setCity] = useState("");
  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  function showFaren(event) {
    event.preventDefault();
    setUnits("imperial");
    weatherProps.prepare = true;
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnits("metric");
    weatherProps.prepare = true;
  }

  function showApiCall(response) {
    setWeatherProps({
      prepare: true,
      coordinates: response.data.coord,
      actualTemp: Math.round(response.data.main.temp),
      actualName: response.data.name,
      actualCountry: response.data.sys.country,
      actualDate: new Date(response.data.dt * 1000),
      iconCode: response.data.weather[0].icon,
      actualHumidty: response.data.main.humidity,
      actualDescrip: response.data.weather[0].description,
      currentWind: response.data.wind.speed,
    });
  }

  function preventAction(event) {
    event.preventDefault();
    handleData();
  }

  function saveData(event) {
    setCity(event.target.value);
  }

  function handleData() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showApiCall);
  }

  function refreshPage() {
    document.location.reload();
  }

  if (weatherProps.prepare) {
    return (
      <div className="Weather-Container">
        <div id="main" className="Weather">
          <div className="Forms-container">
            <nav
              className="navbar bg-body-tertiary"
              data-bs-theme={props.theme}
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  FjS.
                </a>
                <form className="d-flex" role="search" onSubmit={preventAction}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={saveData}
                  />
                  <button className="btn btn-outline-primary" type="submit">
                    Search
                  </button>
                </form>
                <div className="ButtonsContainer">
                  <button
                    onClick={refreshPage}
                    className="btn btn-outline-primary"
                  >
                    Current
                  </button>
                  <button
                    className="btn btn-outline-primary"
                    href="/"
                    onClick={showCelsius}
                  >
                    Celsius
                  </button>{" "}
                  <button
                    className="btn btn-outline-primary"
                    href="/"
                    onClick={showFaren}
                  >
                    Fahrenheit
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <br />
          <div className="Container">
            <div className="Data-container">
              <WeatherData
                data={weatherProps}
                units={units}
                theme={props.theme}
                modetheme={props.modetheme}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(showApiCall);
    return (
      <div>
        <ProgressBar
          width="400"
          height="200"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass="progress-bar-wrapper"
          borderColor="#F4442E"
          barColor="#51E5FF"
        />
        <p className="Loading">
          ❗The access to your location is required to run this App.❗
        </p>
      </div>
    );
  }
}
