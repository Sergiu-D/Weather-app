import React, { useState } from "react";

import useSWR from "swr";

// CSS
import "../css/searchInput.css";

// Util
import { userLocationBySearchQuery, fetcher } from "./util/dataQuery";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

export default function SearchInput(props) {
  const { setLocation } = props;

  const [searchQuery, setSearchQuery] = useState("");

  const [invalidInput, setInvalidInput] = useState({
    message: "",
    status: false,
  });
  console.log(
    "🚀 ~ file: SearchInput.jsx ~ line 21 ~ SearchInput ~ invalidInput",
    invalidInput
  );

  const { data: place, error: errorPlace } = useSWR(
    () => searchQuery && userLocationBySearchQuery(searchQuery),
    fetcher
  );

  React.useEffect(() => {
    if (place) {
      if (!place.length)
        return setInvalidInput({
          message: "Please search a valid city or country",
          status: true,
        });
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

  React.useEffect(() => {
    if (invalidInput.status)
      return setTimeout(() => {
        setInvalidInput({
          message: "",
          status: false,
        });
      }, 3000);
  }, [invalidInput.status]);

  if (errorPlace) return;

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[0].value.trim();

    const regex = /^[\w,.!?]/;

    if (!regex.test(inputValue) || !inputValue)
      return setInvalidInput({
        message: "Your search is not valid!",
        status: true,
      });

    return setSearchQuery(inputValue);
  };
  return (
    <form
      className="searchInputForm"
      onSubmit={handleSubmit}
      style={{ position: "relative" }}
    >
      <input
        type="text"
        id="input"
        placeholder="Search by city and countries"
        invalid="false"
        className={invalidInput.status ? "searchInput invalid" : "searchInput"}
      />
      <button type="submit" className="searchInputBtn">
        <FontAwesomeIcon icon={faSearchLocation} />
      </button>

      <span className="message">{invalidInput.message}</span>
    </form>
  );
}
