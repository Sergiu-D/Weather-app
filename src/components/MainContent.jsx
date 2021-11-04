import React, { useState } from "react";

import useSWR from "swr";

// Components
import CurrentInfo from "./CurrentInfo";
import Forecast from "./Forecast";
import Loading from "./Loading";

// Util
import { userLocationByCoordinatesQuery, fetcher } from "./util/dataQuery";

export default function MainContent(props) {
  const { lat, lon, setLocation } = props;
  const [citiesListIndex, setCitiesListIndex] = useState(0);

  const { data: userLocation, error: errorUserLocation } = useSWR(
    userLocationByCoordinatesQuery(lat, lon),
    fetcher
  );

  if (!userLocation)
    return (
      <main className="main-content-wp">
        <Loading loadingMessage="Loading location..." />
      </main>
    );
  if (errorUserLocation) return;

  // Iterate nearby cities
  const city = userLocation.list[citiesListIndex];
  const latitude = city.coord.lat;
  const longitude = city.coord.lon;

  return (
    <main className="main-content-wp">
      <CurrentInfo
        city={city}
        citiesList={userLocation.list}
        setCitiesListIndex={setCitiesListIndex}
        citiesListIndex={citiesListIndex}
        setLocation={setLocation}
      />

      <Forecast lat={latitude} lon={longitude} />
    </main>
  );
}
