import React, { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherCard.css";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWeather = async (lat, lon) => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e9ab4a5ba3052eb4bc73fa742a55aaec&units=metric`
      );
      setWeatherData(res.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Unable to fetch weather.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
          console.warn("Location access denied. Falling back to Edmonton.");
          // Fallback to Edmonton coordinates
          fetchWeather(53.5461, -113.4938); // Edmonton, AB
        }
      );
    } else {
      console.warn("Geolocation not supported. Using fallback.");
      fetchWeather(53.5461, -113.4938);
    }
  }, []);

  if (loading)
    return (
      <div className="weather-card weather-loading">
        <div className="loading-content">
          <div className="spinner"></div>
          <span className="loading-text">Fetching your weather...</span>
        </div>
      </div>
    );

  if (error || !weatherData || !weatherData.main)
    return (
      <div className="weather-card error">
        {error || "Weather unavailable."}
      </div>
    );

  const { temp } = weatherData.main;
  const description = weatherData.weather?.[0]?.description;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          className="weather-icon"
        />
        <span className="weather-temp">
          {Math.round(temp)}°C
          <p className="weather-city">{weatherData.name}</p>
        </span>
      </div>
      {/* 
      <div className="weather-details">
        <p className="weather-desc">{description}</p>
      </div>
      */}
    </div>
  );
};

export default WeatherCard;
