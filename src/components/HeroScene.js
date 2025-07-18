'use client'

import { SplineScene } from "@/components/ui/spline";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Squares as SquaresBackground } from "@/components/ui/squares-background"
 
export default function HeroScene() {
  const bubbleTexts = ['AI', 'Code', 'Kedron', 'Creativity', 'NextJS', 'React']

  return (
      <div className="flex flex-col md:flex-row w-full h-full">
        <SquaresBackground
          className="absolute inset-0 z-0"
          direction="right"
          speed={0.5} 
          borderColor="#333"
          squareSize={40}
        />
        <div className="absolute inset-0 z-0 flex items-center justify-center">
  <div className="bg-text text-orange-500 text-[40vw] md:text-[40vw] text-center leading-[1.1] whitespace-pre-line px-4 break-words">
    <span className="block md:hidden">
      Holla!
    </span>
    <span className="hidden md:inline-block">
      Holla!
    </span>
  </div>
</div>
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
       </div>
  )
}

import { Squares } from "@/components/ui/squares-background"

