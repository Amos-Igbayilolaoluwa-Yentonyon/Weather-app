import React, { useState } from 'react';
import '../styles/Weatherui.css';
import Header from '../components/Header';

const Weatherui = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <>
      <Header onWeatherData={handleWeatherData} />
      <div className='mainBody'>
        <div className='displayCard'>
          <div className='weatherIcon'>
        
          </div>
          <div className='weatherInfo'>
            {weatherData ? (
              <>
                <div>
                  <h2>City Name: {weatherData.data.city}</h2>
                  <p>Weather Condition: {weatherData.data.condition}</p>
                </div>
                <div className='temperature'>
                  <h2>Temperature: {weatherData.data.temperature}°C</h2>
                  <p>Wind Speed: {weatherData.data.wind_speed} km/h</p>
                </div>
              </>
            ) : (
              <p>Please search for a city to see the weather details.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Weatherui;

