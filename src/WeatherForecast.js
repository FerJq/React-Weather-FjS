import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  let units = props.units;
  let forecastTempMax = Math.round(props.forecastData.temp.max);
  let forecastTempMin = Math.round(props.forecastData.temp.min);
  const forecastImperialMax = Math.round((forecastTempMax * 9) / 5 + 32);
  const forecastImperialMin = Math.round((forecastTempMin * 9) / 5 + 32);
  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    const daysArrays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let forecastDay = daysArrays[day];
    return forecastDay;
  }
  if (units === "metric") {
    return (
      <div className="WeatherForecast">
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-Icon">
          <WeatherIcon
            size={36}
            code={props.forecastData.weather[0].icon}
            color={props.color}
          />
        </div>
        <div className="Forecast-temp">
          <span className="MaxTemp">
            {Math.round(props.forecastData.temp.max)}°
          </span>{" "}
          |{" "}
          <span className="MinTemp">
            {Math.round(props.forecastData.temp.min)}°
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherForecast">
        <div className="Forecast-day">{day()}</div>
        <div className="Forecast-Icon">
          <WeatherIcon
            size={36}
            code={props.forecastData.weather[0].icon}
            color={props.color}
          />
        </div>
        <div className="Forecast-temp">
          <span className="MaxTemp">{forecastImperialMax}°</span> |{" "}
          <span className="MinTemp">{forecastImperialMin}°</span>
        </div>
      </div>
    );
  }
}
