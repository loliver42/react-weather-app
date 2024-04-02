import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: "https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/CloudyV3.svg",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1> {weatherData.city}</h1>
        <ul>
          <li>Wednesday 11:30am</li>
          <li> {weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.icon} alt={weatherData.description} />

            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">°F</span>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} MPH</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "ffa4fe680act3be1832a3445o0790076";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
