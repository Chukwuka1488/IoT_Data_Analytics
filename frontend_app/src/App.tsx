import React, { Component } from 'react';
import './App.css';
import HomeBar from './components/HomeBar/HomeBar';
import WeatherForecastCard from './components/WeatherForecastCard/WeatherForecastCard';
import PowerConsumptionCard from './components/PowerConsumptionCard/PowerConsumptionCard';
import ImageCard from './components/ImageCard/ImageCard';


class App extends Component {
  render() {
    return (
      <div className="App flexbox-container">
        <HomeBar />
        <div className="card-container">
          <WeatherForecastCard />
          <PowerConsumptionCard />
        </div>
        <ImageCard />
      </div>
    );
  }
}

export default App;
