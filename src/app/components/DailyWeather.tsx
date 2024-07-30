interface DailyWeatherProps {
  icon: string;
}

const DailyWeather = ({ icon }: DailyWeatherProps) => {
  return (
    <div>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="날씨 아이콘"
      />
    </div>
  );
};

export default DailyWeather;
