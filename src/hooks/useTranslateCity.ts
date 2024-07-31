import { useState, useEffect } from 'react';

const useTranslateCity = (cityName: string) => {
  const [translatedCity, setTranslatedCity] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTranslatedCity = async () => {
      if (cityName) {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/geo/1.0/direct?q=${cityName}&limit=1&appid=${process.env.NEXT_PUBLIC_API_KEY}`);
          if (!response.ok) {
            throw new Error('도시명을 불러올 수 없습니다');
          }
          const data = await response.json();
          if (data.length > 0) {
            setTranslatedCity(data[0].local_names.ko);
            console.log(data[0])
          } else {
            setTranslatedCity(null);
          }
        } catch (error) {
          setError(error instanceof Error ? error.message : '알 수 없는 오류 발생');
        }
      }
    };

    fetchTranslatedCity();
  }, [cityName]);

  return { translatedCity, error };
};

export default useTranslateCity;
