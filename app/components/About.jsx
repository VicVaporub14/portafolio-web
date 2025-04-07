import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>Introduccion</h4>
        <h2 className='text-center text-5xl font-ovo'>Acerca de Mi</h2>
        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image 
                    src={assets.user_image} 
                    alt='user' 
                    className='w-full rounded-3xl'
                />
            </div>
            <div className='flex-1'>
                <p className='mb-10 max-w-2xl font-ovo'>Soy un estudiante apasionado por la tecnología, con habilidades tanto en el desarrollo frontend como backend. Mi enfoque está en el desarrollo web y la gestión de bases de datos, siempre buscando aprender y mejorar mis habilidades. He trabajado en diversos proyectos donde he aplicado tecnologías como React, Next.js, Node.js, PostgreSQL y MongoDB.</p>

                <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                    {infoList.map(({icon, iconDark, title, description}, index) => (
                        <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer' key={index}>
                            <Image src={icon} alt={title} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
