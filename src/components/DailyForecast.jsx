import React from "react";

//CSS
import "../css/dailyForecast.css";

//Components
import DayCard from "./DayCard";

export default function DailyForecast(props) {
  const { days } = props;

  return (
    <div className="daily-forecast-wp">
      {days.map((day, index) => (
        <DayCard key={index} day={day} />
      ))}
    </div>
  );
}
