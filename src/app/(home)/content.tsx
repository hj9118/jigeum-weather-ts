'use client';

import useDragScroll from '@/hooks/useDragScroll';
import WeeklyWeather from '../components/WeeklyWeather';
import WeatherCard from '../components/WeatherCard';
import { useFullDate } from '@/hooks/useFormatDate';

const Content = () => {
  const { scrollContainerRef } = useDragScroll();
  const utcDate = Math.floor(Date.now() / 1000);
  const fullDate = useFullDate(utcDate);

  return (
    <main className="px-8 py-12 bg-blue-200 max-h-screen overflow-y-auto">
      <h1>{fullDate}</h1>
      <section
        className="overflow-hidden whitespace-nowrap"
        ref={scrollContainerRef}
      >
        <h2 className="text-xl font-bold m-2">주간 날씨 예보</h2>
        <div className="flex flex-nowrap flex-row gap-8">
          <WeeklyWeather />
        </div>
      </section>
      <section className="mt-8">
        <h2 className="text-xl font-bold mb-2">날씨 정보</h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WeatherCard />
        </div>
      </section>
    </main>
  );
};

export default Content;
