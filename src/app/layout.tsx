import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "지금 날씨",
  description: "Jigeum weather is...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
