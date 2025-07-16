"use client";

import React from "react";
import BackgroundPaths from "./BackgroundPaths"; // optional if used
import MarqueeText from "@/components/textflow";
import MyShowcase from "./MyShowcase";

const AboutScene = () => (
    <div className="flex flex-col justify-center items-center h-full w-auto">
        {/* Optional animated background */}
        {/* <BackgroundPaths /> */}
        {/* Marquee */}
        <div className="relative w-full flex justify-center items-center">
            <MarqueeText text="Kedron" repeat={30} />
        </div>
   <div className="flex flex-row gap-8 h-full ">
    {/* Row Div 1 */}
   <div className="flex flex-col items-end justify-center rounded shadow-md">
      <img
          src="/images/pm2.png"
          alt="PM2 Logo"
          className="float-animation mpip w-auto animate-float h-40 sm:h-40 md:h-56 lg:h-64 xl:h-94"
        />
        <h1 className="hero-heading text-4xl md:text-8xl bebas bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Kedron Lucas
        </h1>
        <p className="hero-text font-sans font-normal text-right text-base mt-4 text-neutral-300 max-w-lg">
          Uhmmm, Hey there fellow developer / some random person who found this website / my future Hinata 😊.
          Tbh I really don't know how I'm building this website, I'm just vibing with ChatGPT, 21st.dev and
          random sites at 3AM. But, anyways I hope you enjoy the experience! (please view this on a laptop,
          cuz I have no idea how well I've handled the responsiveness 😭😭😭. btw, I just wanted to put a para here)
        </p>  
    </div> 

    {/* Row Div 2 */}
    <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow-md">
      <MyShowcase/>
    </div>
  </div>
    </div>
);

export default AboutScene;
