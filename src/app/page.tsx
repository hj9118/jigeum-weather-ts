import { Metadata } from "next";
import Content from "./(home)/Content";
import Sidebar from "./(home)/Sidebar";

export const metadata: Metadata = {
  title: '지금 날씨',
  description: 'Jigeum weather is...',
  manifest: '/manifest.json',
  openGraph: {
    title: '지금 날씨',
    description: 'Jigeum weather is...',
    url: 'https://jigeum-weather.vercel.app',
    images: [
      {
        url: 'https://cdn.hankyung.com/photo/201905/01.19557191.1.jpg',
        width: 800,
        height: 600,
        alt: '지금 날씨 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <Content />
    </div>
  );
}
