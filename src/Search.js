import React, { useState } from "react";
import axios from "axios";

export default function (props) {
  let [city, setCity] = useState("");
  let [temp, setTemp] = useState(null);
  let [desc, setDesc] = useState(null);
  let [humid, setHumid] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function submitted(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function update(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showTemperature(response) {
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    setHumid(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  let form = (
    <form class="search" action="/submit" onSubmit={submitted}>
      <input
        type="text"
        name="city"
        placeholder="Type a city name"
        class="bar"
        required
        onChange={update}
      />
      <input type="submit" value="Search" class="button" />
    </form>
  );

  let list = (
    <ul>
      <li>Tempreture: {temp}°C</li>
      <li>Description: {desc}</li>
      <li>Humidity: {humid}%</li>
      <li>Wind: {wind} km/h</li>
      <li>
        <img src={icon} class="icon" />
      </li>
    </ul>
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
