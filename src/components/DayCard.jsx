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

  const dayTempInt = Math.trunc(dayTemp);
  const nightTempInt = Math.trunc(nightTemp);

  return (
    <div className="daily-forecast_card">
      <h3>
        {weekday} <span>{dateDay}</span>
      </h3>
      <div className="daily-forecast_card-description">
        <Icon iconId={id} />
        <h3>{description}</h3>
      </div>
      <h3 className="daily-forecast_card-temp">
        {dayTempInt}&deg; <span>{nightTempInt}&deg;</span>
      </h3>
    </div>
  );
}
