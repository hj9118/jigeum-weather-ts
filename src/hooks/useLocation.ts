import { useState, useEffect } from 'react';

interface Location {
  latitude: number | null;
  longitude: number | null;
}

interface LocationError {
  message: string;
}

const useLocation = () => {
  const [location, setLocation] = useState<Location>({ latitude: null, longitude: null });
  const [error, setError] = useState<LocationError | null>(null);

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error: GeolocationPositionError) => {
      setError({ message: error.message });
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    } else {
      setError({ message: "위치 정보를 알아내지 못했습니다." });
    }
  }, []);

  return { location, error };
};

export default useLocation;
