import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  let mode = props.theme;
  console.log(mode);
  let iconColor = "#0080ff";
  if (mode === "dark") {
    iconColor = "#0080ff";
  } else {
    iconColor = "#f6ea8c";
  }
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10n": "RAIN",
    "10d": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "RAIN",
    "13n": "RAIN",
    "15d": "SNOW",
    "15n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={iconColor}
      size={props.size}
      animate={true}
    />
  );
}
