import { div } from 'framer-motion/client';
import React from 'react'
import { FaCheckSquare } from "react-icons/fa";

export const MobileSkill = () => {
  return (
    <div className='w-full p-5'>
        <h2 className="scroll-m-20 border-b border-blue-700 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
SKills    
</h2>
    <div className=" mt-4 flex flex-wrap -m-4">
    {/* Skill 1 - HTML */}
    <div className="p-4 w-full md:w-1/3">
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 hover:from-blue-100 hover:to-indigo-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:rotate-2 hover:translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <FaCheckSquare className='text-white text-xl' />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">HTML</h2>
        </div>
        <div className='w-full h-2 rounded-lg bg-gray-300'>
          <div className='w-[100%] h-2 bg-blue-500 rounded-lg'></div>
        </div>
        <h3 className='text-blue-600 text-sm text-right font-semibold mt-1'>100%</h3>
      </div>
    </div>

    {/* Skill 2 - CSS */}
    <div className="p-4 w-full md:w-1/3">
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 hover:from-blue-100 hover:to-indigo-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:rotate-2 hover:translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <FaCheckSquare className='text-white text-xl' />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">CSS</h2>
        </div>
        <div className='w-full h-2 rounded-lg bg-gray-300'>
          <div className='w-[90%] h-2 bg-blue-500 rounded-lg'></div>
        </div>
        <h3 className='text-blue-600 text-sm text-right font-semibold mt-1'>85%</h3>
      </div>
    </div>

    {/* Skill 3 - JavaScript */}
    <div className="p-4 w-full md:w-1/3">
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 hover:from-blue-100 hover:to-indigo-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:rotate-2 hover:translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <FaCheckSquare className='text-white text-xl' />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">JavaScript</h2>
        </div>
        <div className='w-full h-2 rounded-lg bg-gray-300'>
          <div className='w-[100%] h-2 bg-blue-500 rounded-lg'></div>
        </div>
        <h3 className='text-blue-600 text-sm text-right font-semibold mt-1'>100%</h3>
      </div>
    </div>

    {/* skill 4 Typescripte */}
    <div className="p-4 w-full md:w-1/3">
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 hover:from-blue-100 hover:to-indigo-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:rotate-2 hover:translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <FaCheckSquare className='text-white text-xl' />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Typescripte</h2>
        </div>
        <div className='w-full h-2 rounded-lg bg-gray-300'>
          <div className='w-[100%] h-2 bg-blue-500 rounded-lg'></div>
        </div>
        <h3 className='text-blue-600 text-sm text-right font-semibold mt-1'>100%</h3>
      </div>
    </div>


     {/* skill 5 nextjs */}
     <div className="p-4 w-full md:w-1/3">
      <div className="bg-gradient-to-r from-purple-100 to-blue-50 hover:from-blue-100 hover:to-indigo-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:rotate-2 hover:translate-y-1">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
            <FaCheckSquare className='text-white text-xl' />
          </div>
          <h2 className="text-xl font-semibold text-gray-800 tracking-tight">Nextjs</h2>
        </div>
        <div className='w-full h-2 rounded-lg bg-gray-300'>
          <div className='w-[100%] h-2 bg-blue-500 rounded-lg'></div>
        </div>
        <h3 className='text-blue-600 text-sm text-right font-semibold mt-1'>95%</h3>
      </div>
    </div>
  </div>
  </div>
  )
}
