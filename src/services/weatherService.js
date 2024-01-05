import axios from 'axios';

const API_KEY = '9995e458c2fdd6fc8030b33143da4706';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchWeatherData = async city => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}`);
    return response.data.list;
  } catch (error) {
    throw error;
  }
};

export const geoLocationWeatherData = async searchLocation => {
  try {
    // Geocoding API request
    const geocodingResponse = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${searchLocation}&limit=1&appid=${API_KEY}`,
    );

    // Extract location data from the geocoding response
    const locationData =
      geocodingResponse.data[0]?.lat && geocodingResponse.data[0]?.lon
        ? {
            lat: geocodingResponse.data[0].lat,
            lon: geocodingResponse.data[0].lon,
          }
        : null;

    if (locationData) {
      // Weather API request using the location data
      const locationResUrl = `${BASE_URL}?lat=${locationData.lat}&lon=${locationData.lon}&appid=${API_KEY}`;
      const locationRes = await axios.get(locationResUrl);
      return locationRes.data?.list;
    } else {
      console.error('Geocoding response does not contain valid location data');
      throw new Error('Invalid location data');
    }
  } catch (error) {
    console.error('Error during geocoding request:', error);
    throw error;
  }
};
