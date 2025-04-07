import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-full py-10 px-6 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduccion</h4>
        <h2 className='text-center text-4xl font-ovo'>Acerca de Mi</h2>
        <div className='flex w-full flex-col lg:flex-row lg:justify-center items-center gap-10 my-10 mx-auto'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image 
                    src={assets.user_image} 
                    alt='user' 
                    className='w-full rounded-3xl'
                />
            </div>
            <div className=''>
                <p className='mb-10 max-w-2xl font-ovo'>Soy un estudiante apasionado por la tecnología, con habilidades tanto en el desarrollo frontend como backend. Mi enfoque está en el desarrollo web y la gestión de bases de datos, siempre buscando aprender y mejorar mis habilidades. He trabajado en diversos proyectos donde he aplicado tecnologías como React, Next.js, Node.js, PostgreSQL y MongoDB.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='text-center border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-blue-100 hover:-translate-y-1 duration-500' key={index}>
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
            </div>
        </div>
    </div>
  )
}
