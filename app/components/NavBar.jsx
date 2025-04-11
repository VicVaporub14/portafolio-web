
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function NavBar() {

    const [isScroll, setIsScroll] = useState(false)

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    },[])

    return (
        <>
            <nav className={`fixed w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
            ${isScroll ? 'bg-opacity-50 backdrop-blur-lg shadow-sm' : ''}`}>
                <a href="#top">
                    <Image 
                        src={assets.logo}
                        alt="logo"
                        className="w-52 cursor-pointer mr-14"
                    />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-md bg-opacity-50'}`}>
                    <li><a className="font-ovo" href="#top">Home</a></li>
                    <li><a className="font-ovo" href="#about">About me</a></li>
                    <li><a className="font-ovo" href="#experience">Experience</a></li>
                    <li><a className="font-ovo" href="#work">My Work </a></li>
                    <li><a className="font-ovo" href="#contact">Contact me </a></li>
                </ul>

                <div className="flex items-center gap-4">
                    <button>
                        <Image 
                            src={assets.moon_icon}
                            alt=""
                            className="w-6"
                        />
                    </button>
                    <a 
                        href="#contact"
                        className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-400 rounded-full ml-4 font-ovo"
                    >
                        Contact
                        <Image 
                            src={assets.arrow_icon} 
                            alt="arrow-icon"
                            className="w-3" 
                        />
                    </a>

                    <button className="block md:hidden ml-3">
                        <Image
                            src={assets.menu_black}
                            alt=""
                            className="w-6 cursor-pointer"
                            onClick={openMenu}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}

                <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-200 transition duration-500">
                    <div className="absolute right-6 top-6" onClick={closeMenu}>
                        <Image
                            src={assets.close_black} alt="" className="w-5 cursor-pointer"
                        />
                    </div>
                    <li><a className="font-ovo" onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}
