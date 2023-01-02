import React from 'react'
import { AppButton } from '../core/AppButton'

export const PanelQuote = ({ handleInc }) => {
  return (
    <>
      <div className="absolute right-[560px] h-full w-[1px] top-0 bottom-0 bg-gray-500"></div>
      <h2 className="mt-8 mb-3 font-bold text-sm">Parts & specifications</h2>
      <div className="flex justify-between space-x-5">
        <div className="flex flex-col w-[70%]">
          <div className="grid grid-cols-4 gap-x-5 ">
            <div>
              <input type="checkbox" />
              <span className="">Parts & specifications</span>
            </div>
            <div className="">Specifications</div>
            <div className="">Quantity</div>
            <div className="self-end text-end mx-5">Price</div>
          </div>
          <div className="grid grid-cols-4 gap-x-5 border-2 border-gray-500 p-5">
            <div className="flex flex-col gap-3">
              <img src="/img/quote/image.png" alt="image" />
              <p>TextTextTextTextTextTextTextTex</p>
              <p>75.0 × 38.0 × 58.0 mm</p>
              <p>28,908.235 mm3</p>
            </div>
            <p className="col-span-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea non quod fugiat facere, corporis, ex in, corrupti recusandae alias numquam. Hic dolorem est neque maiores optio explicabo corrupti officiis.
            </p>
            <p>1</p>
            <div className="flex flex-col justify-between">
              <p className="self-end">USD $0</p>
              <AppButton>
                Change detail
              </AppButton>
            </div>
          </div>
          <AppButton className="!bg-transparent rounded text-black flex justify-center items-center gap-2 mt-5">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.75 9.5V3.3875L3.8 5.3375L2.75 4.25L6.5 0.5L10.25 4.25L9.2 5.3375L7.25 3.3875V9.5H5.75ZM0.5 12.5V8.75H2V11H11V8.75H12.5V12.5H0.5Z" fill="black"/>
            </svg>
            <p>
              <b>Upload parts</b> or drag and drop
            </p>
          </AppButton>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h2>Print calculation</h2>
          <div className="bg-gray-600 rounded p-5 flex justify-between gap-5">
            <label htmlFor=""></label>
            <select className="p-3 bg-white rounded">
              <option value="Simple option">Simple option</option>
              <option value="Simple option">Simple option</option>
              <option value="Simple option">Simple option</option>
            </select>
            <div className="flex">
              <div className="py-2 px-4 rounded-bl rounded-tl border border-white text-white">$</div>
              <input type="text" className="p-3" />
              <div className="py-2 px-4 rounded-br rounded-tr border border-white text-white">h</div>
            </div>
          </div>
          <hr />
          <div className="flex justify-between">
            <h3>Total</h3>
            <p>USD $0</p>
          </div>
          <AppButton className="!bg-transparent text-black">
            Send quote for approval
          </AppButton>
        </div>
      </div>
    </>
  )
}
