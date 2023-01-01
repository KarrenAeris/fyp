import Image from 'next/image'
import React from 'react'

export const TheModelItem = ({ model }) => {
  return (
    <div>
      <Image
        src="/Untitled.png"
        width={266}
        height={300}
        className="rounded"
        alt="model"
      />
      <div className="flex justify-between items-center">
        <h4>{ model?.name }</h4>
        <div className="border-2 rounded p-1">{ model?.price }$</div>
      </div>

    </div>
  )
}
