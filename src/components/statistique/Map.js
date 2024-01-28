import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Map = () => {
  const [position, setPosition] = useState({ lat: 0, lon: 0 });
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      setPosition({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (position.lat && position.lon) {
      const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=${apiKey}`;

      axios.get(url)
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [position]);

  return (
    <div style={{
      width: '100px',
      height: '100px',
      backgroundColor: 'lightblue',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px',
    }}
    >
      {weatherData ? (
        `${weatherData.name}, ${weatherData.sys.country} - ${weatherData.weather[0].description}`
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Map;