import React, { useState } from "react";
import "./ThemeMode.css";

export default function ButtonForms(props) {
  const [change, setChange] = useState(false);
  const bodytheme = document.querySelector("body");
  let theme = props.theme;
  let date = props.gethour;
  const hour = date.getHours();

  if ((hour < 6) | (hour > 18)) {
    document.body.style.backgroundColor = "#1a191a";
    bodytheme.classList.add("darktheme");
  } else {
    document.body.style.backgroundColor = "#bfe9ff";
    bodytheme.classList.remove("darktheme");
    props.valuefunction();
  }

  return (
    <span className="ButtonForms">
      {" "}
      <button
        set={change}
        className="btn btn-outline-primary"
        onClick={props.valuefunction}
      >
        Theme
      </button>
    </span>
  );
}
