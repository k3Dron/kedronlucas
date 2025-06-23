// import React from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className=" scroll-smooth">
      <section id="hero" className="pt-32 h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Hero
        {/* <Card className="bg-white/10 backdrop-blur-md text-white w-[90%] max-w-3xl">
          <CardHeader>
            <CardTitle>About This Site</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Welcome to this modern, animated React site! We've got a sleek navbar,
              smooth scrolling, and interactive UI components ready for more.
            </p>
          </CardContent>
        </Card> */}
      </section>

      <section id="about" className="h-screen flex items-center justify-center bg-black-100 text-white text-4xl font-bold">
        About Me
      </section>

      <section id="experience" className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Experience
      </section>

      <section id="projects" className="h-screen flex items-center justify-center bg-black-100 text-white text-4xl font-bold">
        Projects
      </section>

      <section id="social" className="h-screen flex items-center justify-center bg-black text-white text-4xl font-bold">
        Social Media
      </section>
    </div>
  )
}
