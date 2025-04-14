import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Experience() {
  return (
    <div id='experience' className='w-full max-w-7xl mx-auto py-10 px-6 scroll-mt-20'> {/* px-[12%] */}
        <h4 className='text-center mb-2 text-lg font-ovo'>What I've done</h4>
        <h2 className='text-center text-4xl font-ovo'>Experience</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>I'm a student from Gomez Palacio Dgo, MX and this is what I've done and what I am proud of</p>
        <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div 
                    key={index} 
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-blue-50 hover:-translate-y-1 duration-500 dark:bg-slate-600 dark:hover:bg-customBlue dark:hover:shadow-none'
                >
                    <Image src={icon} alt='' className='w-10 rounded-md'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                    <Link
                        href={link}
                        className='flex items-center gap-2 text-sm mt-5'
                    >
                        Read more 
                        <Image 
                            src={assets.right_arrow} 
                            className='w-4'
                            alt=''
                        />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
