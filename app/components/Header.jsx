import { assets } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <div
            className='w-11/12 max-w-2xl text-center mx-auto h-screen pt-28 flex flex-col items-center justify-center gap-4'
        >
            <div>
                <Image 
                    src={assets.profile_img} 
                    alt='imagen_perfil'
                    className='rounded-full w-32 2xl:w-48'
                />
            </div>
            <h3
                className='flex items-end gap-2 text-lg md:text-xl mb-3 font-ovo'
            >
                Hi! I'm Victor Hugo Soto
                <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
            <h1
                className='text-4xl text-sky-800 font-ovo'
            >Web Developer</h1>
            <p
                className='max-w-xl mx-auto font-ovo'
            >I'm a Computer Systems Engineering Student, currently learning and improving my skills as a FullStack Web Developer</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <Link 
                    href="#contact"
                    className='text-sm 2xl:text-lg 2xl:px-10 px-6 2xl:py-3 py-2 border border-white rounded-full bg-black text-white flex items-center gap-2'
                >
                    Contact me
                    <Image 
                        src={assets.right_arrow_white} 
                        alt='' 
                        className='w-4'
                    />
                </Link>
                <Link 
                    target='_blank'
                    href="/my-resume.pdf"
                    className='text-sm 2xl:text-lg 2xl:px-10 px-6 2xl:py-3  py-2 border rounded-full border-gray-500 flex items-center gap-2'
                >
                    My Resume
                    <Image 
                        src={assets.download_icon} 
                        alt='' 
                        className='w-4'
                    />
                </Link>
            </div>
            
        </div>
    )
}
