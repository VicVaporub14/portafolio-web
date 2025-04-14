import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "motion/react"

export default function Header() {
    return (
        <div
            className='w-11/12 max-w-2xl text-center mx-auto h-screen pt-28 flex flex-col items-center justify-center gap-4'
        >
            <motion.div
                initial={{scale: 0}}
                whileInView={{scale: 1}}
                transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image 
                    src={assets.profile_img} 
                    alt='imagen_perfil'
                    className='rounded-full w-32 2xl:w-48'
                />
            </motion.div>
            <motion.h3
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity:1}}
                transition={{duration: 0.6, delay: 0.3}}
                className='flex items-end gap-2 text-lg md:text-xl mb-3 font-ovo'
            >
                Hi! I'm Victor Hugo Soto
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1
                initial={{y: -30, opacity: 0}}
                whileInView={{y: 0, opacity:1}}
                transition={{duration: 0.8, delay: 0.5}}
                className='text-4xl dark:text-sky-600 text-sky-700 font-ovo'
            >Web Developer</motion.h1>

            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity:1}}
                transition={{duration: 0.6, delay: 0.7}}
                className='max-w-xl mx-auto font-ovo'
            >I'm a Computer Systems Engineering Student, currently learning and improving my skills as a FullStack Web Developer</motion.p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a 
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity:1}}
                    transition={{duration: 0.6, delay: 1}}
                    href="#contact"
                    className='text-sm 2xl:text-lg 2xl:px-10 px-6 2xl:py-3 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent dark:hover:bg-customBlue duration-500'
                >
                    Contact me
                    <Image 
                        src={assets.right_arrow_white} 
                        alt='' 
                        className='w-4'
                    />
                </motion.a>
                <motion.a 
                    initial={{y: 30, opacity: 0}}
                    whileInView={{y: 0, opacity:1}}
                    transition={{duration: 0.6, delay: 1.2}}
                    target='_blank'
                    href="/my-resume.pdf"
                    className='text-sm 2xl:text-lg 2xl:px-10 px-6 2xl:py-3  py-2 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
                >
                    My Resume
                    <Image 
                        src={assets.download_icon} 
                        alt='' 
                        className='w-4'
                    />
                </motion.a>
            </div>
            
        </div>
    )
}
