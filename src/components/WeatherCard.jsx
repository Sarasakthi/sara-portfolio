import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Edmonton,CA&appid=e9ab4a5ba3052eb4bc73fa742a55aaec&units=metric`
      );
      setWeatherData(res.data);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(location);

    const interval = setInterval(() => {
      fetchWeather(location);
    }, 600000); // Refresh every 10 minutes

    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <div className="weather-card weather-loading">
        <div className="loading-content">
          <div className="spinner"></div>
          <span className="loading-text">Fetching sunshine...</span>
        </div>
      </div>
    );

  if (!weatherData || !weatherData.main)
    return <div className="weather-card">Weather unavailable</div>;

  const { temp } = weatherData.main;
  const description = weatherData.weather?.[0]?.description;
  const icon = weatherData.weather?.[0]?.icon;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="weather-icon"
        />
        <span className="weather-temp">
          {Math.round(weatherData.main.temp)}°C
          <p className="weather-city">{weatherData.name}</p>
        </span>
      </div>
      <div className="weather-details">
        <p className="weather-desc">{weatherData.weather[0].description}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
