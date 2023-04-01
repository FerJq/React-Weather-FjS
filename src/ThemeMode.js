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
    props.valuefunction();
  } else {
    document.body.style.backgroundColor = "#bfe9ff";
    bodytheme.classList.remove("darktheme");
    props.valuefunction();
  }

  function changeTheme() {
    if (theme === "light") {
      bodytheme.classList.contains("darktheme");
      bodytheme.classList.remove("darktheme");
      props.valuefunction();
      setChange(true);
      document.body.style.backgroundColor = "#bfe9ff";
    } else {
      bodytheme.classList.add("darktheme");
      props.valuefunction();
      setChange(false);
      document.body.style.backgroundColor = "#1a191a";
    }
  }
  return (
    <span className="ButtonForms">
      {" "}
      <button
        set={change}
        className="btn btn-outline-primary"
        onClick={(changeTheme, props.valuefunction)}
      >
        Theme
      </button>
    </span>
  );
}
