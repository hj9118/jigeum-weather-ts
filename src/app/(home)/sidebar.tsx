import DailyWeather from '../components/DailyWeather';
import Search from '../components/Search';

const Sidebar = () => {
  return (
    <aside className=" flex flex-col bg-slate-200 min-h-screen px-8 py-12 gap-4 sm:w-1/3">
      <Search />
      <DailyWeather />
      <h3 className="text-xl">서울</h3>
      <h1 className="text-6xl font-black">32℃</h1>
      <h2 className="text-3xl">맑음</h2>
    </aside>
  );
};

export default Sidebar;
