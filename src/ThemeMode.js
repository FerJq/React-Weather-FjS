import React, { useState } from "react";
import "./ThemeMode.css";

export default function ButtonForms(props) {
  const [change, setChange] = useState(false);
  const bodytheme = document.querySelector("body");
  let date = props.gethour;
  const hour = date.getHours();

  if ((hour < 6) | (hour > 18)) {
    document.body.style.backgroundColor = "#1a191a";
    bodytheme.classList.add("darktheme");
  } else {
    document.body.style.backgroundColor = "#4f81c7";
    bodytheme.classList.remove("darktheme");
  }

  function changeTheme(event) {
    event.preventDefault();
    if (bodytheme.classList.contains("darktheme")) {
      bodytheme.classList.remove("darktheme");
      setChange(true);
      document.body.style.backgroundColor = "#4f81c7";
    } else {
      bodytheme.classList.add("darktheme");
      setChange(false);
      document.body.style.backgroundColor = "#1a191a";
    }
  }
  return (
    <span className="ButtonForms">
      {" "}
      <button className="btn btn-outline-primary" onClick={changeTheme}>
        Theme
      </button>
    </span>
  );
}
