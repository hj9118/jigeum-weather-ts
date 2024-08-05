export const useSunTime = (date: number): string => {
  const kstDate = new Date(date * 1000);
  return kstDate.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const useShortDate = (date: number): string => {
  const kstDate = new Date(date * 1000);
  return kstDate
    .toLocaleDateString('ko-KR', {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
    })
    .replace(/(\d+) (\w+)/, '$1월 $2일');
};

export const useFullDate = (date: number): string => {
  const kstDate = new Date(date * 1000);
  const weekdayMapping: { [key: string]: string } = {
    일요일: '(일)',
    월요일: '(월)',
    화요일: '(화)',
    수요일: '(수)',
    목요일: '(목)',
    금요일: '(금)',
    토요일: '(토)',
  };

  const longDate = kstDate.toLocaleString('ko-KR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  const formattedFullDate = longDate.replace(
    /(일요일|월요일|화요일|수요일|목요일|금요일|토요일)/,
    (match) => {
      return weekdayMapping[match as keyof typeof weekdayMapping];
    },
  );

  return formattedFullDate
    .replace(/(\d+) (\w+)/, '$1월 $2일')
    .replace(/(\d+)시 (\d+)분/, '$1시 $2분');
};
