export interface WeatherData {
  name: string;
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  pop: number;
  sys: {
    sunrise: number;
    sunset: number;
  };
  rain?: {
    '3h': number;
  };
  snow?: {
    '3h': number;
  };
}

export interface WeeklyItemProps {
  date: number;
  description: string;
  temp: number;
  humidity: number;
  rain?: number;
  snow?: number;
  pop: number;
  icon: string;
}

export interface WeatherInfoProps {
  title: string;
  value: string | number;
}

export interface AirQualityData {
  list: {
    components: {
      pm10: number;
      pm2_5: number;
    };
  }[];
}

export interface LottieIconProps {
  animationData: any;
}

export interface DailyWeatherProps {
  icon: string;
}