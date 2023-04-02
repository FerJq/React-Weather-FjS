import React from "react";

export default function CurrentDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = props.date.getDay();
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let theme = props.theme;
  let x = document.querySelector(".App");
  if (hours < 6 | hours > 18 && theme === "light") {
    x.id = "dark";
  } else {
    x.id = "light";
  }

  return (
    <div>
      {days[day]} {hours}:{minutes}
    </div>
  );
}
