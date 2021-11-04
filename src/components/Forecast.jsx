import React from "react";

// Components
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
//Util
import { mainDataQuery, fetcher } from "./util/dataQuery";
import useSWR from "swr";

export default function Forecast({ lat, lon }) {
  const { data, error } = useSWR(mainDataQuery(lat, lon), fetcher);

  if (!data) return <h1>Loading Data...</h1>;
  if (error) return <h1>Error!</h1>;

  return (
    <div>
      <DailyForecast days={data.daily} />
      <HourlyForecast hourly={data.hourly} />
    </div>
  );
}
