import Skeleton from './Skeleton';
import { WeatherInfoProps } from "../types";

const WeatherInfo = ({
  title,
  value,
  loading
}: WeatherInfoProps & { loading: boolean }) => (
  <div className="bg-slate-300 aspect-square w-full rounded-xl p-4">
    {loading ? (
      <Skeleton className='w-full aspect-square rounded-xl p-4' />
    ) : (
      <>
        <div className="text-lg font-bold">{title}</div>
        <div className="text-xl">{value}</div>
      </>
    )}
  </div>
);

export default WeatherInfo;
