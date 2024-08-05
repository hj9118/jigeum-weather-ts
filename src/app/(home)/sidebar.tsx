'use client';

import { useState, useEffect } from 'react';
import useLocation from '@/hooks/useLocation';
import useTranslateCity from '@/hooks/useTranslateCity';
import Search from '../components/Search';
import DailyWeather from '../components/DailyWeather';
import { WeatherData } from '../types';
import Skeleton from '../components/Skeleton';

const Sidebar = () => {
  const { location, error } = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const { translatedCity } = useTranslateCity(weatherData?.name || '');

  useEffect(() => {
    const fetchWeather = async () => {
      if (location.latitude && location.longitude) {
        try {
          const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch weather data');
          }
          const data: WeatherData = await response.json();
          setWeatherData(data);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      }
    };

    fetchWeather();
  }, [location.latitude, location.longitude]);

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!weatherData) {
    return (
      <aside className="flex flex-col bg-white min-h-screen px-8 py-12 gap-4 sm:w-1/3">
        <Search />
        <DailyWeather icon="" />
        <Skeleton width="100%" height="24px" />
        <Skeleton width="100%" height="64px" />
        <Skeleton width="100%" height="36px" />
      </aside>
    );
  }

  const { main, weather } = weatherData;

  return (
    <aside className="flex flex-col bg-white min-h-screen px-8 py-12 gap-4 sm:w-1/3">
      <Search />
      <DailyWeather icon={weather[0].icon} />
      <h3>{translatedCity || weatherData.name}</h3>
      <h1>{Math.round(main.temp)}℃</h1>
      <h2>{weather[0].description}</h2>
    </aside>
  );
};

export default Sidebar;
