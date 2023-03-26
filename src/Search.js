import React, { useState } from "react";
import axios from "axios";
import Time from "./Time";
import Icon from "./Icon";
import Tempreture from "./Tempreture";

export default function Search(props) {
  let [city, setCity] = useState(props.deafultCity);
  let [temp, setTemp] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humid, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let [date, setDate] = useState(new Date());

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function submitted(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function update(event) {
    event.preventDefault();
    setCity(capitalize(event.target.value));
  }
  function showTemperature(response) {
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
    setDate(new Date());
  }

  let form = (
    <form className="search" action="/submit" onSubmit={submitted}>
      <input
        type="text"
        name="city"
        placeholder="Type a city name"
        className="bar"
        required
        onChange={update}
      />
      <input type="submit" value="Search" className="button" />
    </form>
  );

  let list = (
    <div className="container">
      <h3>{city}</h3>
      <Time date={date} />
      <div className="row">
        <div className="col-6">
          <ul>
            <li>
              Tempreture: <Tempreture temp={temp} metric="C" />
            </li>
            <li>Description: {desc}</li>
            <li>Humidity: {humid}%</li>
            <li>Wind: {wind} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <Icon code={icon} />
        </div>
      </div>
    </div>
  );

  let sig = (
    <p>
      <a
        href="https://github.com/Qfwfq420/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        GitHub repository
      </a>
    </p>
  );

  if (temp) {
    return (
      <div>
        {form}
        {list}
        {sig}
      </div>
    );
  } else {
    return (
      <div>
        {form}
        {sig}
      </div>
    );
  }
}
