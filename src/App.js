import React from "react";

// Components
import SearchInput from "./components/SearchInput";
import MainContent from "./components/MainContent";

// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

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
  if (!location.permission) return <SearchInput setLocation={setLocation} />;
}

export default App;
