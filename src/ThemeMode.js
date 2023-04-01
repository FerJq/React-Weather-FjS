import React from "react";
import "./ThemeMode.css";

export default function ChangeDayNight(props) {
  let theme = props.theme;
  let date = props.gethour;
  const hour = date.getHours();



  return (
    <span className="ButtonForms">
      {" "}
      <button className="btn btn-outline-primary" onClick={props.valuefunction}>
        Theme
      </button>
    </span>
  );
}
