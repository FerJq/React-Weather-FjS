import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";
import "./WeatherData.css";

export default function WeatherData(props) {
  const theme = document.querySelector("body");
  let iconColor = "";
  if (theme.classList.contains("darktheme")) {
    iconColor = "#0080ff";
  } else {
    iconColor = "#f6ea8c";
  }

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
          <WeatherIcon
            code={props.data.iconCode}
            size={100}
            color={iconColor}
          />{" "}
          {"  "}
          <span className="Temp">{unitsTemp()}°</span>
          <h4>
            {props.data.actualName}, {props.data.actualCountry}
          </h4>
          <CurrentDate date={props.data.actualDate} />
        </div>
        <div className="DataTemp">
          <div className="font-desc">
            Description: {props.data.actualDescrip}
          </div>
          <div className="d-f">Humidity: {props.data.actualHumidty}%</div>
          <div className="d-f">Wind: {props.data.currentWind}km/h</div>
        </div>
      </div>
      <div className="ForecastDisplay">
        <Forecast
          color={iconColor}
          coord={props.data.coordinates}
          units={props.units}
        />
      </div>
      <br />
    </div>
  );
}
