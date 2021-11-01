const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = "https://api.openweathermap.org";

export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const mainDataQuery = (lat, lon) => {
  const exclude = "minutely";
  const units = "metric";

  const URL = `${API_URL}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${API_KEY}&units=${units}`;
  return URL;
};

export const userLocationByCoordinatesQuery = (lat, lon) => {
  const limit = 10;
  const units = "metric";

  const URL = `${API_URL}/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${limit}&appid=${API_KEY}&units=${units}`;
  return URL;
};

export const userLocationBySearchQuery = (query) => {
  const limit = 1;

  const URL = `${API_URL}/geo/1.0/direct?q=${query}&limit=${limit}&appid=${API_KEY}`;
  return URL;
};
