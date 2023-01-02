import React from 'react'
import { AppButton } from '../core/AppButton'

export const UploadQuote = ({ handleInc }) => {
  return (
    <>    
      <h2 className="mt-9 mb-5">Upload your file to find out the price</h2>
      <div className="flex justify-center items-center w-full h-[70%] rounded-xl bg-gray-400">
        <div className="flex flex-col text-center gap-3 text-white uppercase">
          <h2>Drag and drop</h2>
          <span>or</span>
          <AppButton className="!bg-white !text-black text-sm !rounded self-center flex items-center space-x-2" onClick={handleInc}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.75 9.5V3.3875L3.8 5.3375L2.75 4.25L6.5 0.5L10.25 4.25L9.2 5.3375L7.25 3.3875V9.5H5.75ZM0.5 12.5V8.75H2V11H11V8.75H12.5V12.5H0.5Z" fill="black"/>
            </svg>
            <span>Select file</span>
          </AppButton>
        </div>
      </div>
    </>
  )
}
