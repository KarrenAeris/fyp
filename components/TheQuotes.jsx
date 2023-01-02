import React, { useState } from 'react'
import { StartQuote } from './Quites/StartQuote';
import { UploadQuote } from './Quites/UploadQuote';
import { LoadingQuote } from './Quites/LoadingQuote';
import { PanelQuote } from './Quites/PanelQuote';

export const TheQuotes = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const quotes = [
    StartQuote,
    UploadQuote,
    LoadingQuote,
    PanelQuote,
  ]

  const handleInc = () => {
    setCurrentPage((prevState) => prevState + 1);
    console.log(quotes);
  }

  return (
    <section className="container mx-auto h-full p-8">
    <h1 className="text-3xl font-bold">Quotes</h1>
      {React.createElement(quotes[currentPage], {
        handleInc
      })}
    </section>
  )
}
