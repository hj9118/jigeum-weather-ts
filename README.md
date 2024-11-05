![썸네일](https://github.com/hj9118/jigeum-weather-ts/blob/main/public/jigeum.png?raw=true)
##### 🔗 [지금 날씨](https://jigeum-weather.vercel.app/)

# 지금 날씨
사용자 지역의 실시간 날씨 정보와 3시간 단위의 주간 날씨 예보를 보여주는 웹 애플리케이션입니다.

![image](https://github.com/user-attachments/assets/cbf4ae12-1f25-4030-afce-18ad5058056b)

## 주요 기능
- **스켈레톤 로딩 화면** <br>
날씨 정보를 받는 동안 사용자에게 스켈레톤 화면을 보여 UX적 포인트를 주었습니다.

- **위치 기반 날씨 정보** <br>
첫 접속시, 사용자의 위치 정보를 수집하여 해당 지역의 현재 날씨, 기온을 표시합니다.

- **사이드바** <br>
날씨 아이콘과 지역명, 현재 온도와 날씨 정보를 표시합니다. <br>
상단 다크모드 토글을 통해 라이트모드/다크모드를 전환할 수 있습니다.

- **주간 날씨 예보** <br>
3시간 단위로 예보를 제공하며, 슬라이드 하여 주간 날씨 예보를 확인할 수 있습니다. <br>
마우스, 터치로 슬라이딩하여 정보 확인이 가능합니다. <br>
각 카드에는 일시, 날짜 아이콘, 온습도 정보를 제공합니다.

- **현재 날씨 상세 정보** <br>
주간 날씨 카드 하단에는 현재 날씨와 관련된 상세 정보를 제공합니다 <br>
체감 온도, 습도, 일출/일몰 시간, 미세먼지/초미세먼지 농도를 제공하고 있습니다.

- **PWA 지원** <br>
모바일 환경에서도 빠르고 편리하게 사용할 수 있도록 네이티브 앱과 유사하도록 PWA 기능을 지원합니다.

## 기술스택
[![stackticon](https://firebasestorage.googleapis.com/v0/b/stackticon-81399.appspot.com/o/images%2F1730790706532?alt=media&token=ca2753e4-966e-4185-95f6-7fd71158ed02)](https://github.com/msdio/stackticon)
- API: OpenWeatherMap
