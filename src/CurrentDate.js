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

  const mode = document.getElementById("light");
  if ((hours < 6) | (hours > 18)) {
    mode.setAttribute("id", "dark");
  } else {
    mode.setAttribute("id", "light");
  }

  return (
    <div>
      {days[day]} {hours}:{minutes}
    </div>
  );
}
