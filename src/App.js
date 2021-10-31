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

  // const locationURL = `https://api.openweathermap.org/data/2.5/find?lat=${location.latitude}&lon=${location.longitude}&cnt=5&appid=${process.env.REACT_APP_API_KEY}`;

  // const { data: locationData, error: locationDateError } = useSWR(
  //   locationURL,
  //   fetcher
  // );

  // const { data, error } = useSWR(
  //   `https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=minutely&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
  //   fetcher
  // );

  // if (locationDateError) return <div>failed to load</div>;
  // if (!locationData) return <div>loading...</div>;
  // console.log("🚀 ~ file: App.js ~ line 47 ~ App ~ locationData", locationData);

  // if (error) return <div>failed to load</div>;
  // if (!data) return <div>loading...</div>;

  console.log(location);

  if (location.loaded && location.permission)
    return (
      <MainContent
        lat={location.coordinates.lat}
        lon={location.coordinates.lon}
      />
    );
  if (!location.permission) return <SearchInput />;
}

export default App;
