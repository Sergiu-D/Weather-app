import React from "react";

//Components
import DayCard from "./DayCard";

export default function DailyForecast(props) {
  const { days } = props;

  return (
    <div>
      <h4>Daily Forcast</h4>
      {days.map((day, index) => (
        <DayCard key={index} day={day} />
      ))}
    </div>
  );
}
