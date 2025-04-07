
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useRef } from "react";

export default function NavBar() {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <>
            <nav className="w-full px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
                <a href="#top">
                    <Image 
                        src={assets.logo}
                        alt="logo"
                        className="w-52 cursor-pointer mr-14"
                    />
                </a>

                <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-md bg-opacity-50">
                    <li><a className="font-ovo" href="#top">Inicio </a></li>
                    <li><a className="font-ovo" href="#about">Sobre mi </a></li>
                    <li><a className="font-ovo" href="#experience">Experiencia </a></li>
                    <li><a className="font-ovo" href="#projects">Proyectos </a></li>
                    <li><a className="font-ovo" href="#contact">Contacto </a></li>
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
                        Contactar 
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
                    <li><a className="font-ovo" onClick={closeMenu} href="#top">Inicio </a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#about">Sobre mi </a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#experience">Experiencia </a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#projects">Proyectos </a></li>
                    <li><a className="font-ovo" onClick={closeMenu} href="#contact">Contacto </a></li>
                </ul>
            </nav>
        </>
    )
}
