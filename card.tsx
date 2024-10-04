// import React from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import { FaCloudDownloadAlt, FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

const MobileCard = () => {
  return (
    <div className='h-[90vh] flex flex-col items-center justify-center'>
        <div className="card bg-blue-300 glass w-80 p-5 items-center transform transition-all duration-500 ease-in-out hover:scale-105 hover:rotate-2 hover:shadow-xl">
        <Image 
        src="/assets/mypic.jpeg" 
        alt="profile-pic" 
        width={100} 
        height={100} 
        className="rounded-full shadow-lg transform transition duration-500 hover:scale-110 mx-auto"
      />

  <div className="card-body text-center">
    <h1 className="card-title text-2xl font-extrabold tracking-tight uppercase text-indigo-800">
          Razi Ullah Khan
        </h1>
        <h2 className="text-lg font-medium tracking-tight text-gray-500 mt-1">
          <Typewriter
            options={{
              strings: ['Web Developer', 'Frontend Specialist', 'Tech Enthusiast'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>    
        {/* social media */}
        <div className="mt-6 grid grid-cols-3 gap-4">
        <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
          <FaLinkedin className="text-4xl text-gray-500 hover:text-blue-700" />
        </Link>
        <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
          <FaInstagram className="text-4xl text-gray-500 hover:text-pink-500" />
        </Link>
        <Link href="#" target="_blank" className="transform transition duration-300 hover:scale-110">
          <FaGithubSquare className="text-4xl text-gray-500 hover:text-gray-800" />
        </Link>
      </div>
       {/* Download CV button */}
       <Link href="/assets/cv/cv.pdf" className="mt-8">
        <Button className="flex items-center space-x-2 bg-indigo-600 text-white hover:bg-indigo-700 transition duration-300">
          <FaCloudDownloadAlt className="h-5 w-5" />
          <span>Download CV</span>
        </Button>
      </Link>
    </div>
  </div>
</div>
    
  )
}

export default MobileCard
