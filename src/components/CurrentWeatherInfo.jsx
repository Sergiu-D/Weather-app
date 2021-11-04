import React from "react";

//Components
import Icon from "./Icon";

export default function CurrentWeatherInfo(props) {
  const { city } = props;
  const { temp, feels_like, humidity } = city.main;
  const { speed: wind_speed } = city.wind;
  const { description, id } = city.weather[0];

  const tempInt = Math.trunc(temp);
  const feelsLikeInt = Math.trunc(feels_like);

  return (
    <div className="current-weather-info-wp">
      <h1>{tempInt}&deg;</h1>
      <div className="current-weather-info_description">
        <Icon iconId={id} />
        <h3>{description}</h3>
      </div>
      <div className="current-weather-info">
        <h3>feels like: {feelsLikeInt}&deg;</h3>
        <h3>humidity: {humidity}&#37;</h3>
        <h3>wind speed: {wind_speed} m/s</h3>
      </div>
    </div>
  );
}
