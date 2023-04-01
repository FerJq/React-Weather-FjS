import React, { useState, useEffect } from "react";
import { ProgressBar } from "react-loader-spinner";
import axios from "axios";
import "./Forecast.css";
import WeatherForecast from "./WeatherForecast";

export default function Forecast(props) {
  const lat = props.coord.lat;
  const lon = props.coord.lon;
  const [ready, setReady] = useState(false);
  const [loadForecast, setLoadForecast] = useState(null);
  let apiKey = "8402ccd9e55983fce71eeeaa1d2bd1fc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  function showData(response) {
    setLoadForecast(response.data.daily);
    setReady(true);
  }

  useEffect(() => {
    setReady(false);
  }, [props.coord]);

  if (ready) {
    return (
      <div className="Forecast">
        <div className="row">
          {loadForecast.map(function (days, index) {
            if ((index < 6) & (index > 0)) {
              return (
                <div key={index} className="col ForecastLayout">
                  <WeatherForecast
                    color={props.color}
                    units={props.units}
                    forecastData={days}
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    axios.get(apiUrl).then(showData);
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    );
  }
}
