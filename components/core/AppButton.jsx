import React from 'react'

export const AppButton = ({ children, opacity, ...props }) => {
  const isTransparent = ' bg-transparent';
  const notTransparent = 'text-white bg-gray-800';
  return (
    <button
      {...props}
      className={`bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${props.className || ''} ${opacity ? 'dark:bg-transparent text-gray-900 hover:text-white hover:bg-gray-800' : 'dark:text-white'}`}
    >
      { children }
    </button>
  )
}
