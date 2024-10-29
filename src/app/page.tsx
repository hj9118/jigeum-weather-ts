import { Metadata } from "next";
import Content from "./(home)/Content";
import Sidebar from "./(home)/Sidebar";

export const metadata: Metadata = {
  title: '지금 날씨',
  description: 'Jigeum weather is...',
  manifest: '/manifest.json',
};

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row">
      <Sidebar />
      <Content />
    </div>
  );
}
