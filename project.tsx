import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const MobileProject = () => {
    let projects = [
        {
            name: "Number guessing game",
            detail: "Typescript number guessing game project console interactive number guessing game. Guess any number under 10 and try your luck.",
            linke: "https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "game1.png",
        },
        {
            name: "BMI Calculator",
            detail: "Typescript BMI Calculator CLI-based calculator using inquirer.",
            linke: "https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "bmi.png",
        },
        {
            name: "Next.js Portfolio",
            detail: "Next.js portfolio project.",
            linke: "https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "nextjs.png",
        },
        {
            name: "ATM machine",
            detail: "ATM Machine cash withdraw Balance inquiry Fast cash",
            linke: "https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "atm.png",
        },
        {
            name: "Student managment stystem",
            detail: "Desigend to efficiently Manage styudent data and academic Records",
            linke: "https://www.linkedin.com/in/razi-khan-8a64162b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
            image: "student.png",
        },
      
    ];

  return (
    <div className='w-full p-5'>
           <h2 className=" p-10 scroll-m-20 border-b border-blue-700 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
           Project    </h2>
         <div className="flex flex-wrap -m-4">
                    {projects.map((item, i) => (
                        <motion.div
                            key={i}
                            className="lg:w-1/3 sm:w-1/2 p-4"
                            whileHover={{
                                scale: 1.1,
                                rotateY: 10,
                                transition: { type: 'spring', stiffness: 200 },
                            }}
                        >
                            <motion.div className="flex relative h-64 bg-white rounded-xl shadow-lg hover:shadow-2xl">
                                <Image
                                    alt="gallery"
                                    width={1000}
                                    height={1000}
                                    className="absolute inset-0 w-full h-full object-cover object-center rounded-xl"
                                    src={`/assets/${item.image}`}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-300 bg-gradient-to-r from-purple-50 to-blue-50 opacity-0 hover:opacity-100 cursor-pointer duration-500 rounded-xl">
                                    <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight text-blue-800">
                                        {item.name}
                                    </h2>
                                    <p className="mt-3 leading-relaxed text-gray-700">
                                        {item.detail}
                                    </p>
                                    <Link href={item.linke} target='_blank'>
                                        <p className='mt-3 text-blue-500 hover:underline'>
                                            View Project
                                        </p>
                                    </Link>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
    </div>
  )
}
