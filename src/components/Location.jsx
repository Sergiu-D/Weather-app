import React from "react";

// CSS
import "../css/location.css";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

export default function Location(props) {
  const { city, citiesList, citiesListIndex, setCitiesListIndex } = props;

  const cityName = city.name;
  const country = city.sys.country;

  // Handle increasing or decreasing index state
  const handleIncreaseClick = () => {
    if (citiesListIndex >= citiesList.length - 1) return setCitiesListIndex(0);
    return setCitiesListIndex((prev) => prev + 1);
  };

  const handleDecreaseClick = () => {
    if (citiesListIndex === 0) return setCitiesListIndex(citiesList.length - 1);
    return setCitiesListIndex((prev) => prev - 1);
  };
  return (
    <div className="location-wp">
      <button className="location-btn" onClick={handleDecreaseClick}>
        <FontAwesomeIcon icon={faAngleLeft} className="arrow-icon" />
      </button>
      <h3 className="location-city">
        {cityName} <span style={{ color: "orangered" }}>{country}</span>{" "}
      </h3>
      <button className="location-btn" onClick={handleIncreaseClick}>
        <FontAwesomeIcon icon={faAngleRight} className="arrow-icon" />
      </button>
    </div>
  );
}
