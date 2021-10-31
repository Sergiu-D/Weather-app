import React from "react";

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function App() {
  const [location, setLocation] = React.useState({
    latitude: 123,
    longitude: 456,
  });

  const geolocation = navigator.geolocation;

  geolocation.getCurrentPosition(getGeolocationSuccess, getGeolocationError);

  function getGeolocationSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("Position", position);

    return setLocation({
      latitude: latitude,
      longitude: longitude,
    });
  }

  function getGeolocationError() {
    console.log("error!");
  }

  const locationURL = `https://api.openweathermap.org/data/2.5/find?lat=${location.latitude}&lon=${location.longitude}&cnt=5&appid=${process.env.REACT_APP_API_KEY}`;

  const { data: locationData, error: locationDateError } = useSWR(
    locationURL,
    fetcher
  );

  const { data, error } = useSWR(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
    fetcher
  );

  if (locationDateError) return <div>failed to load</div>;
  if (!locationData) return <div>loading...</div>;
  console.log("🚀 ~ file: App.js ~ line 47 ~ App ~ locationData", locationData);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <div className="App">Weather app</div>;
}

export default App;
