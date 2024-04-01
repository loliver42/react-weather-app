import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> New York</h1>
      <ul>
        <li>Wednesday 11:30am</li>
        <li> Lightly Raining</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/LightRainV3.svg"
            alt="Raining"
          />{" "}
          61°F
        </div>
        <div className="col-6">
          <ul>
            <li>Percipitation: 86%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 7 MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
