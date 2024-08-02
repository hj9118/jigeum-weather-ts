'use client';

import useLocation from '@/hooks/useLocation';
import { useEffect, useState } from 'react';
import WeeklyItem from './WeeklyItem';

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  pop: number;
  rain?: {
    '3h': number;
  };
  snow?: {
    '3h': number;
  };
}

const WeeklyWeather = () => {
  const { location, error } = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location.latitude && location.longitude) {
        try {
          const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/data/2.5/forecast?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          const data = await response.json();
          setWeatherData(data.list);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeatherData();
  }, [location.latitude, location.longitude]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (weatherData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-row ">
      {weatherData.map((item) => (
        <WeeklyItem
          key={item.dt}
          date={item.dt}
          description={item.weather[0].description}
          temp={item.main.temp}
          humidity={item.main.humidity}
          rain={item.rain?.['3h']}
          snow={item.snow?.['3h']}
          pop={item.pop}
          icon={item.weather[0].icon}
        />
      ))}
    </div>
  );
};

export default WeeklyWeather;
