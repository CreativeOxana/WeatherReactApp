import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function changeCity(event) {
    setCity(event.target.value);
  }

  function showTemperature(response) {
    let temperature = response.data.main.temp;
    let wind = response.data.wind.speed;
    let humidity = response.data.main.humidity;
    let description = response.data.weather[0].description;
    let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    setMessage(
      <ul>
        <li>Temperature: {Math.round(temperature)}ºC</li>
        <li>Description: {description}</li>
        <li>Humidity: {humidity} % </li>
        <li>Wind: {Math.round(wind)} km/h</li>
        <li>
          <img src={icon} alt="hola" />{" "}
        </li>
      </ul>
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  return (
    <div className="Search">
      <h1>Weather Search Engine</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={changeCity}
        />
        <input type="submit" />
      </form>
      {message}
      <br />
      <a href="https://github.com/CreativeOxana/WeatherReactApp">Github repository</a>
    </div>
  );
}
