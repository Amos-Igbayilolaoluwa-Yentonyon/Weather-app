import React, { useState } from 'react';
import '../styles/header.css';
import { FcSearch } from "react-icons/fc";
import axios from 'axios';

const baseUrl = 'https://weather-1-n1wt.onrender.com';

const getWeather = async (city) => {
  try {
    const response = await axios.get(`${baseUrl}/weather?city=${city}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

const Header = ({ onWeatherData }) => {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (city.trim() === '') {
      alert('Please enter a city name');
      return;
    }

    const weatherData = await getWeather(city);
    if (weatherData) {
      console.log(weatherData);
      onWeatherData(weatherData);
    } else {
      alert('Failed to fetch weather data. Please try again.');
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <header className='header'>
        <h1>Weather App</h1>
        <div className='inputHolder'>
    
          <input
            id="cityInput"
            type="text"
            placeholder="Enter city name"
            value={city}
            onChange={handleChange}
          />
          <FcSearch size={25} onClick={handleSearch} style={{ cursor: 'pointer' }} />
        </div>
      </header>
    </div>
  );
};

export default Header;
