import React from "react";

// Components
import Icon from "./Icon";

//Util
import date from "./util/date";

export default function DayCard(props) {
  const { day: dayObj } = props;
  const { dt } = dayObj;
  const { day: dayTemp, night: nightTemp } = dayObj.feels_like;
  const { id, description } = dayObj.weather[0];

  // Get date
  const { weekday, day: dateDay } = date(dt);

  return (
    <div style={{ display: "flex" }}>
      <h4>
        {weekday} <span>{dateDay}</span>
      </h4>
      <Icon iconId={id} />
      <h5>{description}</h5>
      <p>Day Temp: {dayTemp}</p>
      <p>Night Temp: {nightTemp}</p>
    </div>
  );
}
