import React, { useState } from "react";

export default function Tempreture(props) {
  let [metric, setMetric] = useState(props.metric);
  function convertToF(event) {
    event.preventDefault();
    setMetric("F");
  }
  function convertToC(event) {
    event.preventDefault();
    setMetric("C");
  }
  if (metric === "C") {
    return (
      <span className="tempCotainer">
        <span className="temp">
          {props.temp}
          <span className="unit">
            <a href="/" onClick={convertToF}>
              °{metric}
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="tempCotainer">
        <span className="temp">
          {Math.round((props.temp * 9) / 5 + 32)}
          <span className="unit">
            <a href="/" onClick={convertToC}>
              °{metric}
            </a>
          </span>
        </span>
      </span>
    );
  }
}
