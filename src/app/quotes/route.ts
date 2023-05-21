import { NextResponse } from 'next/server';

export async function GET() {
  if (!process.env.API_ENDPOINT) {
    return [];
  }

  const res = await fetch(`${process.env.API_ENDPOINT}`, {
    headers: { 'X-Api-Key': process.env.API_NINJA_TOKEN ?? '' },
    next: { revalidate: -1 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch quotes');
  }

  const data = await res.json();

  return NextResponse.json({ data: data[0] });
}
