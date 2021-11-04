import React from "react";

// Components
import DailyForecast from "./DailyForecast";
import HourlyForecast from "./HourlyForecast";
import Loading from "./Loading";

//Util
import { mainDataQuery, fetcher } from "./util/dataQuery";
import useSWR from "swr";

export default function Forecast({ lat, lon }) {
  const { data, error } = useSWR(mainDataQuery(lat, lon), fetcher);

  if (!data) return <Loading loadingMessage="Loading data..." />;
  if (error) return;

  return (
    <div>
      <DailyForecast days={data.daily} />
      <HourlyForecast hourly={data.hourly} />
    </div>
  );
}
