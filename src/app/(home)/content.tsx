'use client';

import { useState, useEffect } from 'react';
import useDragScroll from '@/hooks/useDragScroll';
import WeeklyWeather from '../components/WeeklyWeather';
import WeatherCard from '../components/WeatherCard';
import { useFullDate } from '@/hooks/useFormatDate';
import Skeleton from '../components/Skeleton';
import DarkModeToggle from '../components/DarkModeToggle';

const Content = () => {
  const { scrollContainerRef } = useDragScroll();
  const [dateString, setDateString] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateDateString = () => {
      const utcDate = Math.floor(Date.now() / 1000);
      const fullDate = useFullDate(utcDate);
      setDateString(fullDate);
      setLoading(false);
    };
    updateDateString();
    const intervalId = setInterval(updateDateString, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="px-8 py-12 bg-slate-50 h-screen overflow-y-auto sm:w-3/4 sm:max-h-screen dark:bg-slate-850 dark:text-white">
      <DarkModeToggle />
      <h2 className="break-keep">
        {loading ? <Skeleton className="w-4/5 h-9" /> : dateString}
      </h2>
      <section
        className="overflow-hidden whitespace-nowrap mt-2"
        ref={scrollContainerRef}
      >
        <h3 className="mb-2 font-black">주간 날씨 예보</h3>

        <WeeklyWeather />
      </section>
      <section className="mt-8">
        <h3 className="mb-2 font-black">날씨 정보</h3>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WeatherCard />
        </div>
      </section>
    </main>
  );
};

export default Content;
