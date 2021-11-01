import React from "react";

export default function Location(props) {
  const { city, citiesList, citiesListIndex, setCitiesListIndex, setLocation } =
    props;

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
    <div>
      <h3>
        {cityName} <span style={{ color: "orangered" }}>{country}</span>{" "}
      </h3>
      <button onClick={handleDecreaseClick}>Decrease</button>
      <button onClick={handleIncreaseClick}>Increase</button>
    </div>
  );
}
