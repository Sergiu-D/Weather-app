import React from "react";

//Components
import Icon from "./Icon";

export default function CurrentWeatherInfo(props) {
  const { city } = props;
  const { temp, feels_like, humidity } = city.main;
  const { speed: wind_speed } = city.wind;
  const { description, id } = city.weather[0];

  return (
    <div>
      <p>temp: {temp}</p>
      <p>feels like: {feels_like}</p>
      <p>humidity: {humidity}</p>
      <p>wind speed: {wind_speed}</p>
      <Icon iconId={id} />
      <p>{description}</p>
    </div>
  );
}
