'use client';

import useLocation from '@/hooks/useLocation';
import { useEffect, useState } from 'react';
import WeeklyItem from './WeeklyItem';
import { WeatherData } from '../types';
import Skeleton from './Skeleton';

const WeeklyWeather = () => {
  const { location, error } = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(true);

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
        } finally {
          setLoading(false);
        }
      }
    };

    fetchWeatherData();
  }, [location.latitude, location.longitude]);

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className="flex flex-row">
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="flex-shrink-0 gap-8">
              <Skeleton className='aspect-[3/4] max-w-96 min-w-64 rounded-xl p-4 m-2 flex flex-col'/>
            </div>
          ))
        : weatherData.map((item) => (
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
