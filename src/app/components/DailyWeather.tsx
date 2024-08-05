import { useEffect, useState } from 'react';
import LottieIcon from './LottieIcon';
import { DailyWeatherProps } from '../types';
import Skeleton from './Skeleton';



const DailyWeather = ({ icon }: DailyWeatherProps) => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    const loadAnimation = async () => {
      const response = await fetch(`/weatherIcon/${icon}.json`);
      if (response.ok) {
        const animation = await response.json();
        setAnimationData(animation);
      } else {
        console.error(response.status);
      }
    };

    loadAnimation();
  }, [icon]);

  return (
    <div>
      {animationData ? (
        <LottieIcon animationData={animationData} />
      ) : (
        <Skeleton width='100%' height='200px' />
      )}
    </div>
  );
};

export default DailyWeather;
