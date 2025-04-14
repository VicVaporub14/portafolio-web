"use client"

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {

  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect( () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  },[])

  useEffect( () => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = '';
    }
  },[isDarkMode])

  // const handleMouseMove = (e) => {
  //   const { clientX, clientY, currentTarget } = e;
  //   const { width, height, left, top } = currentTarget.getBoundingClientRect();

  //   // Calcula la posición del mouse como un porcentaje relativo al contenedor
  //   const x = ((clientX - left) / width) * 100;
  //   const y = ((clientY - top) / height) * 100;

  //   setGradientPosition({ x, y });
  // };
  return (
    <div>
      <div
        className={`w-full h-full ${isDarkMode ? 'bg-radial-dark' : 'bg-radial-light'}`}
        // style={
        //   !isDarkMode
        //     ? {
        //         background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgb(230, 240, 255) 40%, rgb(255, 255, 255) 50%)`,
        //       }
        //     : {}
        // }
        // onMouseMove={!isDarkMode ? handleMouseMove : null}
      >
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkMode={isDarkMode} />
      </div>
      
      <About isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}
