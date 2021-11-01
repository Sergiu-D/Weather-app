import React from "react";

//Components
import SearchInput from "./SearchInput";
import Location from "./Location";
import Clock from "./Clock";
import CurrentWeatherInfo from "./CurrentWeatherInfo";

export default function CurrentInfo(props) {
  const { city, setLocation } = props;
  return (
    <div>
      <Location {...props} />
      <SearchInput setLocation={setLocation} />
      <Clock />
      <CurrentWeatherInfo city={city} />
    </div>
  );
}
