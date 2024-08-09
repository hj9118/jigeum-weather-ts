import Skeleton from './Skeleton';
import { WeatherInfoProps } from "../types";

const WeatherInfo = ({
  title,
  value,
  loading
}: WeatherInfoProps & { loading: boolean }) => (
  <div className="bg-slate-100 shadow-lg aspect-[2/1] w-full rounded-xl">
    {loading ? (
      <Skeleton className='w-full aspect-[2/1] rounded-xl p-4' />
    ) : (
      <div className='p-4'>
        <h3 className='mb-4'>{title}</h3>
        <p className='text-4xl font-bold'>{value}</p>
      </div>
    )}
  </div>
);

export default WeatherInfo;
