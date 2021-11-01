import React from "react";

//Components
import SearchInput from "./SearchInput";
import Location from "./Location";

export default function CurrentInfo(props) {
  const { city, setLocation } = props;
  return (
    <div>
      <Location {...props} />
      <SearchInput setLocation={setLocation} />
      {/* Clock  */}
      {/* CurrentWeather  */}
    </div>
  );
}
