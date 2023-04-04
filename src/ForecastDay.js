import React from "react";
import Icon from "./Icon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }

  return (
    <div>
      <div>{day()}</div>
      <Icon
        ClassName="forecastIcon"
        code={props.data.weather[0].icon}
        size={40}
      />
      <div>
        <span className="max">{maxTemp()}</span>
        <span className="min">{minTemp()}</span>
      </div>
    </div>
  );
}
