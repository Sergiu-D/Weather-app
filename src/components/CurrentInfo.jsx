import React from "react";

// CSS
import "../css/currentInfo.css";

//Components
import SearchInput from "./SearchInput";
import Location from "./Location";
import Clock from "./Clock";
import CurrentWeatherInfo from "./CurrentWeatherInfo";

export default function CurrentInfo(props) {
  const { city, setLocation } = props;
  return (
    <div className="current-info-wp">
      <div className="current-info_location">
        <SearchInput setLocation={setLocation} />
        <Location {...props} />
      </div>

      <div className="current-info_data">
        <Clock />
        <hr />
        <CurrentWeatherInfo city={city} />
      </div>
    </div>
  );
}
