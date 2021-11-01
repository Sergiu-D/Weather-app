export default function date(utc) {
  let date = new Date(utc * 1000);

  const weekdays = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
  }).format(date);

  const dateObj = {
    weekday: weekdays,
    dayNumber: date.getDay() + 1,
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
  };

  return dateObj;
}
