import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
     <div className="justify-content-between w-100 row mt-3">
          <div className="col-6 d-flex flex-column align-items-start">
            <div>
              <WeatherIcon code={props.data.icon} size={52} />
            </div>

            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="col-6 d-flex justify-content-around align-items-center w-250">
            <div>Humidity: {props.data.humidity} %</div>
            <div>Wind: {props.data.windspeed} km/h</div>
          </div>
      </div>
    </div>
  );
}
