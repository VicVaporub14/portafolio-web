"use client"

import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {

  const [gradientPosition, setGradientPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    // Calcula la posición del mouse como un porcentaje relativo al contenedor
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setGradientPosition({ x, y });
  };
  return (
    <div>
      <div 
        className="bg-radial-light w-full h-full"
        style={{
          background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgb(230, 240, 255) 40%, rgb(255, 255, 255) 50%)`,
        }}
        onMouseMove={handleMouseMove}
      >
        <NavBar />
        <Header />
      </div>
      
      <About />
      <Experience/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}
