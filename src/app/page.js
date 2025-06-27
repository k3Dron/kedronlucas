"use client"

import React, { useEffect, useState } from "react"
import  HeroScene  from "@/components/HeroScene"
import LoaderOne from "@/components/loader-one";
import { Component } from "@/components/circular-gallery";
import BackgroundPaths from "@/components/BackgroundPaths"
import { Component as CircularGallery } from '@/components/circular-gallery';


const demoItems = [
  {
    image: "/images/mymainpic.jpeg",
    text: "Bridge",
  },
];

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
          <span className="text-xl font-medium animate-pulse text-white">
            <LoaderDemo />
            <div className="h-10"></div>
            Kedron is sleeping, waiting for him to wake up...
          </span>
        </div>
      )}

      <div className="scroll-smooth">
        <section
          id="hero"
          className="pt-32 h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
        <HeroScene />
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
            <div className="flex-1 h-full w-auto relative flex flex-col justify-center items-center">          
            <BackgroundPaths />
            <img src="/images/pm2.png" alt="PM2 Logo" className="float-animation mpip w-auto animate-float h-40 sm:h-40 md:h-56 lg:h-64 xl:h-100" />
            <h1 className=" hero-heading text-4xl md:text-8xl bebas bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                Kedron Lucas
            </h1>
            <p className="hero-text font-sans font-normal text-right text-base mt-4 text-neutral-300 max-w-lg">
              Uhmmm, Hey there fellow developer / some random person who found this website / my future Hinata 😊. Tbh i really dont know how I'm building this website, i'm just vibing with ChatGPT, 21st.dev and random sites at 3AM.
              But, anyways i hope you enjoy the experience! (please view this on a laptop, cuz i have no idea how well i've handle the responsivness 😭😭😭. btw, I just wanted to put a para here)
            </p>
        </div>
        </section>

        <section
          id="gallary"
          className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          <CircularGallery
  items= {demoItems}
  bend={2}
  textColor="#fff"
  borderRadius={0.1}
  font="bold 24px Arial"
/>
        </section>

        <section
          id="projects"
          className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          Projects
        </section>

        <section
          id="social"
          className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold"
        >
          Social Media
        </section>
      </div>
    </>
  )
}
