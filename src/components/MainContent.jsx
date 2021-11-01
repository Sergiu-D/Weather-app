import React, { useState } from "react";

import useSWR from "swr";

// Components
import Forecast from "./Forecast";
import SearchInput from "./SearchInput";

// Util
import {
  mainDataQuery,
  userLocationByCoordinatesQuery,
  fetcher,
} from "./util/dataQuery";

export default function MainContent(props) {
  const { lat, lon, setLocation } = props;
  const [index, setIndex] = useState(0);

  const { data: userLocation, error: errorUserLocation } = useSWR(
    userLocationByCoordinatesQuery(lat, lon),
    fetcher
  );

  if (!userLocation) return <h1>Loading User Location...</h1>;
  if (errorUserLocation) return <h1>Error!</h1>;

  const list = userLocation.list[index];
  const latitude = list.coord.lat;
  const longitude = list.coord.lon;

  const handleIncreaseClick = () => {
    if (index >= userLocation.list.length - 1) return setIndex(0);
    return setIndex((prev) => prev + 1);
  };

  const handleDecreaseClick = () => {
    if (index === 0) return setIndex(userLocation.list.length - 1);
    return setIndex((prev) => prev - 1);
  };

  return (
    <div>
      <h3>
        {list.name}{" "}
        <span style={{ color: "orangered" }}>{list.sys.country}</span>{" "}
      </h3>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleIncreaseClick}>Increase</button>
      <SearchInput setLocation={setLocation} />

      <Forecast lat={latitude} lon={longitude} />
    </div>
  );
}
