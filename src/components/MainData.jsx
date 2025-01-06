import React from 'react'
import Spotlight from './Spotlight'

function MainData() {
  return (
    <div className='mt-2 w-full'>
   
   <div className="w-full bg-white shadow-md">
  <div className="max-w-screen-xl mx-auto px-4">
    <nav className="flex items-center justify-between sm:justify-center overflow-x-auto space-x-4 sm:space-x-8 border-y border-gray-200 py-2 sm:py-4">
      <li className=" list-none text-sm sm:text-lg font-medium text-slate-600 hover:text-slate-800 sm:font-bold text-center transition-all rounded-md duration-500 pb-2 px-2 sm:px-8 md:px-12 lg:px-16 cursor-pointer hover:bg-gray-100 relative group">
        <a className="block py-2">Spotlight</a>
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
      </li>
      <li className=" list-none text-sm sm:text-lg font-medium text-slate-600 hover:text-slate-800 sm:font-bold text-center transition-all rounded-md duration-500 pb-2 px-2 sm:px-8 md:px-12 lg:px-16 cursor-pointer hover:bg-gray-100 relative group">
        <a className="block py-2">E-Mall</a>
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
      </li>
      <li className=" list-none text-sm sm:text-lg font-medium text-slate-600 hover:text-slate-800 sm:font-bold text-center transition-all rounded-md duration-500 pb-2 px-2 sm:px-8 md:px-12 lg:px-16 cursor-pointer hover:bg-gray-100 relative group">
        <a className="block py-2">Studio</a>
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
      </li>
      <li className=" list-none text-sm sm:text-lg font-medium text-slate-600 hover:text-slate-800 sm:font-bold text-center transition-all rounded-md duration-500 pb-2 px-2 sm:px-8 md:px-12 lg:px-16 cursor-pointer hover:bg-gray-100 relative group">
        <a className="block py-2">Trending</a>
        <div className="absolute left-0 bottom-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-center"></div>
      </li>
    </nav>
  </div>
</div>



      <Spotlight />
    </div>
  )
}

export default MainData
