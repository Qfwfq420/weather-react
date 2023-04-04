import React from "react";

export default function Tempreture(props) {
  return (
    <span className="tempCotainer">
      <span className="temp">
        {props.temp}
        <span className="unit">°C</span>
      </span>
    </span>
  );
}
