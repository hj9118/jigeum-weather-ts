interface WeeklyItemProps {
  date: number;
  description: string;
  temp: number;
  humidity: number;
  rain?: number;
  snow?: number;
  pop: number;
  icon: string;
}

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
  const kstDate = new Date(date * 1000);
  const formattedDate = kstDate.toLocaleDateString();
  const formattedTime = kstDate.toLocaleTimeString();

  return (
    <div className="aspect-[3/4] bg-slate-300 max-w-96 min-w-64 rounded-xl p-4 m-2 flex flex-col">
      <img
        src={`http://openweathermap.org/img/wn/${icon}.png`}
        alt={description}
        className="w-16 h-16"
      />
      <div>
        <div>
          {formattedDate} {formattedTime}
        </div>
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
