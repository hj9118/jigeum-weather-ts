'use client';

import useDragScroll from '@/hooks/useDragScroll';
import WeeklyWeather from '../components/WeeklyWeather';
import WeatherCard from '../components/WeatherCard';

const Content = () => {
  const { scrollContainerRef } = useDragScroll();

  return (
    <main className="px-8 py-12 bg-blue-200 max-h-screen overflow-y-auto">
      <section
        className="overflow-hidden whitespace-nowrap"
        ref={scrollContainerRef}
      >
        <div className="flex flex-nowrap flex-row gap-8">
          <WeeklyWeather />
          <WeeklyWeather />
          <WeeklyWeather />
          <WeeklyWeather />
          <WeeklyWeather />
        </div>
      </section>
      <section className="mt-8">
        <h1>2024. 07. 30 TUE</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
          <WeatherCard />
        </div>
      </section>
    </main>
  );
};

export default Content;
