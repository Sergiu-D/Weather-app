import React from "react";

export default function CurrentWeatherInfo(props) {
  const { city } = props;
  const { temp, feels_like, humidity } = city.main;
  const { speed: wind_speed } = city.wind;

  return (
    <div>
      <p>temp: {temp}</p>
      <p>feels like: {feels_like}</p>
      <p>humidity: {humidity}</p>
      <p>wind speed: {wind_speed}</p>
    </div>
  );
}
