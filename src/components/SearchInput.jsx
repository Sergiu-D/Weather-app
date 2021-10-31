import React from "react";
import useSWR from "swr";

// Util
import { userLocationBySearchQuery, fetcher } from "./util/dataQuery";

export default function SearchInput({ setLocation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const { data: place, error: errorPlace } = useSWR(
    () => searchQuery && userLocationBySearchQuery(searchQuery),
    fetcher
  );

  React.useEffect(() => {
    if (place) {
      if (!place.length) return;
      return setLocation({
        loaded: true,
        permission: true,
        coordinates: {
          lat: place[0].lat,
          lon: place[0].lon,
        },
      });
    }
  }, [place, setLocation]);

  if (errorPlace) return <h1>Error!</h1>;

  const handleSubmit = (event) => {
    event.preventDefault();

    return setSearchQuery(event.target[0].value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="input"
        placeholder="Search by city and countries"
        invalid="false"
      />
      <input type="submit" />
    </form>
  );
}
