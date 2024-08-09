'use client';

import { useEffect, useRef, useState } from 'react';
import LottieIcon from './LottieIcon';
import { useShortDate } from '@/hooks/useFormatDate';
import { WeeklyItemProps } from '../types';

const weatherCache = new Map<string, any>();

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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const shortDate = useShortDate(date);

  useEffect(() => {
    const loadAnimation = async () => {
      if (isVisible) {
        if (weatherCache.has(icon)) {
          setAnimationData(weatherCache.get(icon));
        } else {
          try {
            const response = await fetch(`/weatherIcon/${icon}.json`);
            if (response.ok) {
              const animation = await response.json();
              setAnimationData(animation);
            } else {
              console.error(response.status);
            }
          } catch (error) {
            console.error('Failed to load weatherIcon, ', error);
          }
        }
      }
    };

    loadAnimation();
  }, [icon, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className="aspect-[3/4] bg-slate-300 max-w-96 min-w-64 rounded-xl p-4 m-2 flex flex-col"
    >
      {isVisible && animationData && (
        <LottieIcon animationData={animationData} />
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
