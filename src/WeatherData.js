import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import "./WeatherData.css";

export default function WeatherData(props) {

  function unitsTemp() {
    let metric = Math.round(props.data.actualTemp);
    let imperial = Math.round((metric * 9) / 5 + 32);
    if (props.units === "metric") {
      return metric + "C";
    } else {
      return imperial + "F";
    }
  }
  return (
    <div className="WeatherData">
      <br />

      <div className="Weather-General-Properties">
        <div className="TempIcon">
          <WeatherIcon theme={props.theme} code={props.data.iconCode} size={100} /> {"  "}
          <span className="Temp">{unitsTemp()}°</span>
          <h4>
            {props.data.actualName}, {props.data.actualCountry}
          </h4>
          <CurrentDate date={props.data.actualDate} />
        </div>
        <div className="DataTemp">
          <h4>Weather</h4>
          Description: {props.data.actualDescrip}
          <div className="d-f">Humidity: {props.data.actualHumidty}%</div>
          <div className="d-f">Wind: {props.data.currentWind}km/h</div>
        </div>
      </div>
      <div className="ForecastDisplay">
        <Forecast coord={props.data.coordinates} units={props.units} />
      </div>
      <br />
    </div>
  );
}
