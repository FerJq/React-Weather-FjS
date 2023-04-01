import React from "react";
import "./ThemeMode.css";

export default function ChangeDayNight(props) {
  let theme = props.theme;
  let date = props.gethour;
  const hour = date.getHours();

  if ((hour < 6) | (hour > 18)) {
    document.body.style.backgroundColor = "#1a191a";
  } else {
    document.body.style.backgroundColor = "#bfe9ff";
  }

  return (
    <span className="ButtonForms">
      {" "}
      <button className="btn btn-outline-primary" onClick={props.valuefunction}>
        Theme
      </button>
    </span>
  );
}
