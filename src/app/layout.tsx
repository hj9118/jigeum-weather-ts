import type { Metadata } from 'next';
import { Gothic_A1 } from 'next/font/google';
import './globals.css';

const gothic = Gothic_A1({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: '지금 날씨',
  description: 'Jigeum weather is...',
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gothic+A1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={gothic.className}>{children}</body>
    </html>
  );
}
