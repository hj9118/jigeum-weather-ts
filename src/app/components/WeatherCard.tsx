'use client';

import { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo';
import useLocation from '@/hooks/useLocation';
import { useSunTime } from '@/hooks/useFormatDate';
import { AirQualityData, WeatherData } from '../types';

const WeatherCard = () => {
  const { location, error } = useLocation();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [airQualityData, setAirQualityData] = useState<AirQualityData | null>(
    null,
  );

  useEffect(() => {
    const fetchWeatherData = async () => {
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

    const fetchAirQualityData = async () => {
      if (location.latitude && location.longitude) {
        try {
          const airPollutionApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/data/2.5/air_pollution?lat=${location.latitude}&lon=${location.longitude}&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
          const response = await fetch(airPollutionApiUrl);
          if (!response.ok) {
            throw new Error('Failed to fetch air quality data');
          }
          const data = await response.json();
          setAirQualityData(data);
        } catch (error) {
          console.error('Error fetching air quality data:', error);
        }
      }
    };

    fetchWeatherData();
    fetchAirQualityData();
  }, [location.latitude, location.longitude]);

  if (error) {
    return <div>{error.message}</div>;
  }

  const isLoading = !weatherData || !airQualityData;
  const sunriseTime = weatherData?.sys?.sunrise
    ? useSunTime(weatherData.sys.sunrise)
    : '';
  const sunsetTime = weatherData?.sys?.sunset
    ? useSunTime(weatherData.sys.sunset)
    : '';

  return (
    <>
      <WeatherInfo
        title="체감온도"
        value={
          weatherData?.main?.feels_like
            ? `${weatherData.main.feels_like.toFixed(1)}°C`
            : ''
        }
        loading={isLoading}
      />
      <WeatherInfo
        title="습도"
        value={
          weatherData?.main?.humidity
            ? `${weatherData.main.humidity}%`
            : ''
        }
        loading={isLoading}
      />
      <WeatherInfo title="일출" value={sunriseTime} loading={isLoading} />
      <WeatherInfo title="일몰" value={sunsetTime} loading={isLoading} />
      <WeatherInfo
        title="미세먼지"
        value={
          airQualityData?.list[0]?.components?.pm10
            ? `${airQualityData.list[0].components.pm10} µg/m³`
            : ''
        }
        loading={isLoading}
      />
      <WeatherInfo
        title="초미세먼지"
        value={
          airQualityData?.list[0]?.components?.pm2_5
            ? `${airQualityData.list[0].components.pm2_5} µg/m³`
            : ''
        }
        loading={isLoading}
      />
    </>
  );
};

export default WeatherCard;
