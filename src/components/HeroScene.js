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
        <div className="flex-1 relative hidden md:block">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
       </div>
  )
}

import { Squares } from "@/components/ui/squares-background"

