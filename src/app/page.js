"use client"

import React, { useEffect, useState } from "react"
import  HeroScene  from "@/components/HeroScene"
import LoaderOne from "@/components/loader-one";
import ProjectScene from "@/components/ProjectScene";
import AboutScene from "@/components/AboutScene";
import HoverSliderDemo from "@/components/GallaryScene";
import Footer from "@/components/FooterScene";

export function LoaderDemo() {
    return <LoaderOne />;
}

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)
  

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 4000)  // start fading at 4s
    const timer2 = setTimeout(() => setShowLoader(false), 5000) // hide at 5s

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <>
      {showLoader && (
  <div
    className={`fixed inset-0 bg-black z-50 flex items-center justify-center transition-opacity duration-1000 ${
      fadeOut ? "opacity-0" : "opacity-100"
    }`}
  >
    <span className="text-sm sm:text-base md:text-xl font-medium animate-pulse text-white text-center">
      <LoaderDemo />
      <div className="h-4 sm:h-6 md:h-10"></div>
      Kedron is sleeping, waiting for him to wake up...
    </span>
  </div>
)}


      <div className="scroll-smooth">
        <section
          id="hero"
          className="pt-32 h-screen flex items-center justify-center text-white text-4xl font-bold "
        >
          <div className="w-full h-full overflow-hidden">
            <HeroScene />
          </div>
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          <div className="w-full h-full ">
            <AboutScene />
          </div>
        </section>

        <section
          id="projects"
          className="flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          <div className="w-full h-full ">
            <ProjectScene />
          </div>
        </section>

        <section
          id="gallary"
          className="flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          <div className="w-full h-full">
            <HoverSliderDemo />
          </div>
        </section>

        <section
          id="social"
          className="flex items-center justify-center bg-black text-white text-4xl font-bold "
        >
          <div className="w-full h-full ">
            <Footer />
          </div>
        </section>
      </div>
    </>
  )
}
