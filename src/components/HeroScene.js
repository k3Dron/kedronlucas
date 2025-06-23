'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function HeroScene() {
  return (
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Kedron Lucas
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            I love Shridhar. this is an established fact. Yes i am saying this so he helps we with designing this fkg website which i have no fkg knowledge to do so.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-2 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
  )
}