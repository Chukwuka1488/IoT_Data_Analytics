import React from 'react';
import HelloWorld from '../HelloWorld';
import '../WeatherForecastCard/WeatherForecastCard.css';

const WeatherForecastCard: React.FC = () => {
  return (
    <div className="weather-card">
      <h2>Weather Forecast</h2>
      <HelloWorld />
      {/* Add weather forecast content */}
    </div>
  );
};

export default WeatherForecastCard;