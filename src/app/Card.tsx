'use client';

interface CardProps {
  quote: string;
}

export default function Card(props: CardProps) {
  return <div>{props.quote}</div>;
}
