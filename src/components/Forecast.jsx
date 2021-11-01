import React from "react";

import useSWR from "swr";
//Util
import { mainDataQuery, fetcher } from "./util/dataQuery";

export default function Forecast({ lat, lon }) {
  const { data, error } = useSWR(mainDataQuery(lat, lon), fetcher);

  if (!data) return <h1>Loading Data...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <div>
      Forcast: {data.current.temp}
      {/* <DarysForcast /> */}
      {/* <HourForcast /> */}
    </div>
  );
}
