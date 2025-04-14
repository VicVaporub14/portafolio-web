import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Work({isDarkMode}) {
    return (
        <div id='work' className='w-full max-w-7xl mx-auto py-10 px-6 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>My Portfolio</h4>
            <h2 className='text-center text-4xl font-ovo'>My latest work</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development.</p>

            <div className='my-10 gap-5 space-y-5'>
                {workData.map((project, index)=>(

                    <div
                        key={index}
                        className="flex flex-col md:flex-row max-w-6xl  rounded-lg cursor-pointer bg-white border-[0.5px] border-gray-400 shadow-md hover:bg-blue-50 hover:shadow-black hover:-translate-y-1 duration-500 dark:bg-slate-600 dark:hover:bg-customBlue dark:hover:shadow-none"
                    >
                        <img
                            src={project.bgImage}
                            alt={project.title}
                            className="w-full md:w-1/3 h-auto rounded-lg"
                        />
                        <div className='flex flex-col flex-1 py-6 px-6 justify-center'>
                            <div>
                                <h2>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-white'>{project.description}</p>
                            </div>
                            <Link
                                href={project.link}
                                className='flex items-center gap-2 text-sm mt-5'
                            >
                                Read more 
                                <Image 
                                    src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} 
                                    className='w-4'
                                    alt=''
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            <Link
                href={''}
                className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-50 duration-500 dark:bg-slate-700 dark:border dark:border-gray-400 dark:text-white dark:hover:bg-customBlue'
            >
                Show More
                <Image
                    src={isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold}
                    alt='Right arrow'
                    className='w-4'
                />
            </Link>
        </div>
    )
}
