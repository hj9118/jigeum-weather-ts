import { useEffect, useState } from 'react';
import LottieIcon from './LottieIcon';

interface DailyWeatherProps {
  icon: string;
}

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
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default DailyWeather;
