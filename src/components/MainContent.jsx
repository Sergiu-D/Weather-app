import React, { useState } from "react";

import useSWR from "swr";

// Components
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import SearchInput from "./SearchInput";

// Util
import { userLocationByCoordinatesQuery, fetcher } from "./util/dataQuery";

export default function MainContent(props) {
  const { lat, lon, setLocation } = props;
  const [citiesListIndex, setCitiesListIndex] = useState(0);

  const { data: userLocation, error: errorUserLocation } = useSWR(
    userLocationByCoordinatesQuery(lat, lon),
    fetcher
  );

  if (!userLocation) return <h1>Loading User Location...</h1>;
  if (errorUserLocation) return <h1>Error!</h1>;

  // Iterate nearby cities
  const city = userLocation.list[citiesListIndex];
  const latitude = city.coord.lat;
  const longitude = city.coord.lon;

  console.log(city);

  return (
    <div>
      <CurrentInfo
        city={city}
        citiesList={userLocation.list}
        setCitiesListIndex={setCitiesListIndex}
        citiesListIndex={citiesListIndex}
        setLocation={setLocation}
      />

      <Forecast lat={latitude} lon={longitude} />
    </div>
  );
}
