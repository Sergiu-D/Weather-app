import React, { useState } from "react";

function Clock() {
  let getDate = new Date();
  let formatDate = new Intl.DateTimeFormat("en-US", {
    timeStyle: "medium",
    hourCycle: "h24",
  }).format(getDate);

  const [time, setTime] = useState(formatDate);

  const updateTime = () => {
    getDate = new Date();
    formatDate = new Intl.DateTimeFormat("en-US", {
      timeStyle: "medium",
      hourCycle: "h24",
    }).format(getDate);

    setTime(formatDate);
  };

  setInterval(updateTime, 1000);

  return (
    <div className="clock-wp">
      <h1>{time}</h1>
    </div>
  );
}

export default Clock;
