import { assets, experienceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'motion/react'

export default function Experience({isDarkMode}) {
  return (
    <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{ duration: 1}}
        id='experience' className='w-full max-w-7xl mx-auto py-10 px-6 scroll-mt-20'
    > {/* px-[12%] */}

        <motion.h4 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.3, duration: 0.5}}
            className='text-center mb-2 text-lg font-ovo'
        >What I've done</motion.h4>

        <motion.h2 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{delay: 0.5, duration: 0.5}}
            className='text-center text-4xl font-ovo'
        >Experience</motion.h2>

        <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.7, duration: 0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'
        >I'm a student from Gomez Palacio Dgo, MX and this is what I've done and what I am proud of</motion.p>

        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{delay: 0.9, duration: 0.6}}
            className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'
        >
            {experienceData.map(({icon, title, description, link}, index)=>(
                <motion.div 
                    whileHover={{scale: 1.02}}
                    key={index} 
                    className='text-center border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-blue-50 hover:-translate-y-1 duration-500 dark:bg-slate-600 dark:hover:bg-customBlue dark:hover:shadow-none'
                >
                    <Image src={icon} alt='icon' className='w-10 rounded-md mx-auto'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                    
                </motion.div>
            ))}
        </motion.div>
    </motion.div>
  )
}
