import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const MobileEducation = () => {
    let education = [
        {
          uniname: "GIAIC University",
          date: "20/Dec/2023",
          filed: "BSAI",
          details:
            "I am learning Artificial Intelligence, Metaverse 3.0. Currently, I'm a web developer and passionate Full Stack Developer, honing my skills at PIAIC and GIAIC. On the front-end, I've mastered Next.js and Tailwind CSS, creating responsive and dynamic user interfaces. As I continue my journey, I am diving deeper into back-end technologies to build comprehensive full-stack applications.",
        },
      ];
  return (
    <div className='w-full p-5 relative  '>
            <h2 className=" scroll-m-20 border-b border-blue-700 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Education   
             </h2>
    <div className="-my-8 divide-y divide-gray-200">
          {education.map((item, i) => (
            <div 
              key={i} 
              className=" flex flex-wrap md:flex-nowrap bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105 hover:rotate-2 hover:translate-y-1 bg-gradient-to-r from-purple-50 to-blue-50"
            >
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col items-start">
                <span className="font-bold text-lg text-indigo-800 uppercase tracking-wide">
                  {item.filed}
                </span>
                <span className="mt-2 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 uppercase tracking-tight">
                  {item.uniname}
                </h2>
                <p className="leading-relaxed text-gray-700 mb-4">
                  {item.details}
                </p>
                <svg
                  className="w-6 h-6 text-indigo-700 ml-2 transition-all duration-300 ease-in-out hover:translate-x-1"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
