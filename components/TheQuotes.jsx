import React from 'react'
import { AppButton } from './core/AppButton'

export const TheQuotes = () => {
  return (
    <section className="container mx-auto h-full p-8">
      <h1 className="text-3xl font-bold mb-20">Quotes</h1>
      <div className="flex justify-center items-center w-full h-[70%] rounded-xl bg-gray-400">
        <div className="flex flex-col text-center gap-3 text-white">
          <h2>Start a new quote</h2>
          <span>Find out the price of 3D printing for your project</span>
          <AppButton className="!bg-white !text-black text-sm !rounded self-center">
            Find out
          </AppButton>
        </div>
      </div>
    </section>
  )
}
