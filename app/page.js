"use client"

import About from "./components/About";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <div className=" bg-radial-light w-full h-full">
      <NavBar />
      <Header />
      <About />
    </div>
  );
}
