import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-full py-10 px-6 scroll-mt-20 mx-auto'> {/* px-[12%] */}
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
        <h2 className='text-center text-4xl font-ovo'>About me</h2>
        <div className='flex w-full flex-col lg:flex-row lg:justify-center items-center gap-10 my-10 mx-auto'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image 
                    src={assets.user_image} 
                    alt='user' 
                    className='w-full rounded-3xl'
                />
            </div>
            <div className=''> {/* flex-1 */}
                <p className='mb-10 text-center max-w-2xl font-ovo '>I am a student passionate about technology, with skills in both frontend and backend development. My focus is on web development and database management, always striving to learn and improve my skills. I have worked on various projects where I have applied technologies such as React, Next.js, Node.js, PostgreSQL, and MongoDB.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='text-center border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-50 hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                            <Image 
                                src={icon} 
                                alt={title} 
                                className='w-7 mt-3 mx-auto'
                            />
                            <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                            <p className='text-gray-600 text-sm'>{description}</p>
                        </li>
                    ))}
                </ul>

                <div className=''>
                    <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>
                    <ul className='grid grid-cols-4 sm:flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li 
                                key={index}
                                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                            >
                                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
