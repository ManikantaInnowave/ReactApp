import React, { useState, useEffect } from 'react';

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  city: string;
}

const WeatherWidget: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulate weather data fetching
  useEffect(() => {
    const fetchWeather = () => {
      setLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Clear'];
        const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
        
        const mockWeather: WeatherData = {
          temperature: Math.floor(Math.random() * 30) + 10, // 10-40°C
          condition: conditions[Math.floor(Math.random() * conditions.length)],
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80%
          windSpeed: Math.floor(Math.random() * 20) + 5, // 5-25 km/h
          city: cities[Math.floor(Math.random() * cities.length)]
        };
        
        setWeather(mockWeather);
        setLoading(false);
      }, 1000);
    };

    fetchWeather();
    
    // Refresh weather every 30 seconds
    const interval = setInterval(fetchWeather, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return '☀️';
      case 'cloudy':
        return '☁️';
      case 'rainy':
        return '🌧️';
      case 'partly cloudy':
        return '⛅';
      case 'clear':
        return '🌙';
      default:
        return '🌤️';
    }
  };

  if (loading) {
    return (
      <div className="weather-widget">
        <div className="loading">Loading weather data...</div>
      </div>
    );
  }

  if (!weather) {
    return (
      <div className="weather-widget">
        <div className="error">Failed to load weather data</div>
      </div>
    );
  }

  return (
    <div className="weather-widget">
      <div className="weather-header">
        <h3>{weather.city}</h3>
        <div className="weather-icon">
          {getWeatherIcon(weather.condition)}
        </div>
      </div>
      
      <div className="weather-main">
        <div className="temperature">
          {weather.temperature}°C
        </div>
        <div className="condition">
          {weather.condition}
        </div>
      </div>
      
      <div className="weather-details">
        <div className="detail">
          <span>Humidity:</span>
          <span>{weather.humidity}%</span>
        </div>
        <div className="detail">
          <span>Wind Speed:</span>
          <span>{weather.windSpeed} km/h</span>
        </div>
      </div>
      
      <div className="weather-note">
        <p>This is a simulated weather widget. In a real app, you would connect to a weather API.</p>
      </div>
    </div>
  );
};

export default WeatherWidget; 