'use client';

import { useEffect, useState } from 'react';
import LottieIcon from './LottieIcon';
import { useShortDate } from '@/hooks/useFormatDate';
import { WeeklyItemProps } from '../types';

const WeeklyItem = ({
  date,
  description,
  temp,
  humidity,
  rain,
  snow,
  pop,
  icon,
}: WeeklyItemProps) => {
  const [animationData, setAnimationData] = useState(null);
  const shortDate = useShortDate(date);

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
    <div className="aspect-[3/4] bg-slate-300 max-w-96 min-w-64 rounded-xl p-4 m-2 flex flex-col">
      {animationData ? (
        <LottieIcon animationData={animationData} />
      ) : (
        <p>로딩 중...</p>
      )}
      <div>
        <div>{shortDate}</div>
        <div>{description}</div>
      </div>
      <div>
        <div>{Math.round(temp)}°C</div>
        <div>습도: {humidity}%</div>
        <div>강수 확률: {pop}%</div>
        {rain ? <div>강우량: {rain}mm</div> : null}
        {snow ? <div>적설량: {snow}mm</div> : null}
      </div>
    </div>
  );
};

export default WeeklyItem;
