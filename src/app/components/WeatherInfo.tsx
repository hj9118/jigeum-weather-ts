import { WeatherInfoProps } from "../types";

const WeatherInfo = ({ title, value }:WeatherInfoProps) => (
  <div className="bg-slate-300 aspect-square w-full rounded-xl p-4">
    <div className="text-lg font-bold">{title}</div>
    <div className="text-xl">{value}</div>
  </div>
);

export default WeatherInfo;
