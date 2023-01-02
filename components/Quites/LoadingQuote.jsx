import React from 'react'

export const LoadingQuote = ({ handleInc }) => {

  // setTimeout(handleInc, 1000)

  return (
    <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
      <div className="lds-dual-ring"></div>
      <p onClick={handleInc}>Analyzing your file...</p>
    </div>
  )
}
