'use client';
interface AirQualityData {
  list: {
    components: {
      pm10: number;
      pm2_5: number;
    };
  }[];
}

interface WeatherData {
  main: {
    feels_like: number;
    humidity: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}

import { useEffect, useState } from 'react';
import WeatherInfo from './WeatherInfo';
import useLocation from '@/hooks/useLocation';
import { useSunTime } from '@/hooks/useFormatDate';

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

  if (!weatherData || !airQualityData) {
    return <div>Loading...</div>;
  }

  const {
    main: { feels_like, humidity },
    sys: { sunrise, sunset },
  } = weatherData;

  const { list } = airQualityData;
  const pm10 = list[0]?.components.pm10;
  const pm2_5 = list[0]?.components.pm2_5;

  const sunriseTime = useSunTime(sunrise);
  const sunsetTime = useSunTime(sunset);

    console.log('Sunrise:', sunrise);
    console.log('Sunset:', sunset);

  return (
    <>
      <WeatherInfo title="체감온도" value={`${feels_like.toFixed(1)}°C`} />
      <WeatherInfo title="습도" value={`${humidity}%`} />
      <WeatherInfo title="일출" value={sunriseTime} />
      <WeatherInfo title="일몰" value={sunsetTime} />
      <WeatherInfo title="미세먼지" value={`${pm10} µg/m³`} />
      <WeatherInfo title="초미세먼지" value={`${pm2_5} µg/m³`} />
    </>
  );
};

export default WeatherCard;
