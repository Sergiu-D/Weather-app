import React from "react";

//Components
import SearchInput from "./SearchInput";
import Location from "./Location";
import Clock from "./Clock";

export default function CurrentInfo(props) {
  const { city, setLocation } = props;
  return (
    <div>
      <Location {...props} />
      <SearchInput setLocation={setLocation} />
      <Clock />
      {/* Clock  */}
      {/* CurrentWeather  */}
    </div>
  );
}
