import React from "react";

import useSWR from "swr";

// Util
import {
  mainDataQuery,
  userLocationByCoordinatesQuery,
  fetcher,
} from "./util/dataQuery";

export default function MainContent({ lat, lon }) {
  const { data, error } = useSWR(mainDataQuery(lat, lon), fetcher);

  const { data: userLocation, error: errorUserLocation } = useSWR(
    userLocationByCoordinatesQuery(lat, lon),
    fetcher
  );

  if (!data) return <h1>Loading Data...</h1>;
  if (error) return <h1>Error!</h1>;

  if (!userLocation) return <h1>Loading User Location...</h1>;
  if (errorUserLocation) return <h1>Error!</h1>;

  console.log("data", data);

  return (
    <div>
      <h3>
        {userLocation[0].name}{" "}
        <span style={{ color: "orangered" }}>{userLocation[0].country}</span>{" "}
      </h3>
    </div>
  );
}
