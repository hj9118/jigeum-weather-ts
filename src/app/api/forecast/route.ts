import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const lat = url.searchParams.get('lat');
  const lon = url.searchParams.get('lon');

  if (!lat || !lon) {
    return NextResponse.json({ error: 'Latitude and Longitude are required' }, { status: 400 });
  }

  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=kr&appid=${process.env.NEXT_PUBLIC_API_KEY}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch weather forecast data');
    }
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch weather forecast data' }, { status: 500 });
  }
}
