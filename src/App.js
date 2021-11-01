import React from "react";

import "weather-icons/css/weather-icons.min.css";

// Components
import SearchLocationScreen from "./components/SearchLocationScreen";
import MainContent from "./components/MainContent";

function App() {
  const [location, setLocation] = React.useState({
    loaded: false,
    permission: false,
    coordinates: {
      lat: null,
      lon: null,
    },
  });

  function getUserPermission() {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(getGeolocationSuccess, getGeolocationError);

    function getGeolocationError(ev) {
      setLocation((state) => ({
        ...state,
        loaded: true,
        permission: false,
      }));
    }

    function getGeolocationSuccess(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      setLocation({
        loaded: true,
        permission: true,
        coordinates: {
          lat: latitude,
          lon: longitude,
        },
      });
    }
  }

  React.useEffect(() => {
    getUserPermission();
  }, []);

  if (location.loaded && location.permission)
    return (
      <MainContent
        lat={location.coordinates.lat}
        lon={location.coordinates.lon}
        setLocation={setLocation}
      />
    );
  if (!location.permission)
    return <SearchLocationScreen setLocation={setLocation} />;
}

export default App;
