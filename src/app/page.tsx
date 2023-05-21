'use client';
import { useEffect, useState } from 'react';
import Card from './Card';
import Loader from './Loader';

export default function Home() {
  const [quote, setQuote] = useState<{
    quote: string;
    author: string;
    category: string;
  }>();
  const [isLoading, setIsLoading] = useState(false);

  function updateQuote() {
    setIsLoading(true);
    return fetch('/quotes')
      .then((res) => res.json())
      .then((json) => {
        setQuote(json.data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    updateQuote();
  }, []);

  return (
    <main className="bg-white shadow-lg m-10 p-10 w-full h-fit">
      {!isLoading ? <div className="text-lg">{quote?.quote}</div> : <Loader />}

      <div className="flex justify-between items-center">
        <div className="text-sm font-medium h-full">- {quote?.author}</div>
        <button
          className="shadow-lg bg-cyan-500 p-2 mt-2 text-white hover:bg-cyan-700 transition-colors"
          onClick={updateQuote}
        >
          New Quote
        </button>
      </div>
    </main>
  );
}
