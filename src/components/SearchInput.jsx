import React from "react";

import useSWR from "swr";

// css
import "../css/searchInput.css";

// Util
import { userLocationBySearchQuery, fetcher } from "./util/dataQuery";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput(props) {
  const { setLocation } = props;

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
    <form className="searchInputForm" onSubmit={handleSubmit}>
      <input
        type="text"
        id="input"
        placeholder="Search by city and countries"
        invalid="false"
        className="searchInput"
      />
      <button type="submit" className="searchInputBtn">
        <FontAwesomeIcon icon={faSearchLocation} />
      </button>
    </form>
  );
}
