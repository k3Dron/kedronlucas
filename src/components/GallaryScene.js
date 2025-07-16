"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
  SlideDescription
} from "@/components/animated-slideshow";



const SLIDES = [
  {
    id: "slide-1",
    title: "Retrothon Hackathon",
    description:"Won First Place at Retrothon Hackathon. Built The AutoAgent, a no-code/low-code platform that allows anyone to create, deploy, and monetize AI Agents using a drag-and-drop canvas—just like Canva, but for AI! The platform supports custom model integration, RAG workflows, and even has an AI chatbot that builds agents for non-tech users. Our team handled everything from flow logic, marketplace backend, and model hosting to UI and API access. Judges from top companies like SJ Innovations, Persistent Systems, and Qualitas recognized it as the top project. We’re now in talks with investors to launch it as a full-scale product!",
    imageUrl: "https://images.unsplash.com/photo-1654618977232-a6c6dea9d1e8?q=80&w=2486&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-hackathon-retrothon-activity-7312070130383929344-VHRN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-2",
    title: "InternSpirit Hackathon",
    description:"We earned a winning spot at the InternSpirit Hackathon with MSMEDhara, an AI-powered platform that simplifies global trade for MSMEs. It suggests ideal export markets, handles compliance via trusted CHAs, and offers affordable, bulk-shipping logistics. Buyers are auto-notified, and post-sale analytics use ML to optimize future sales. Fueled by extensive research, real MSME interviews, and sleepless coding sessions, MSMEDhara brings smart exports to life.",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-ml-hackathonwinner-activity-7302069361324736512-OZh-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-3",
    title: "AI/ML Mentor",
    description:"Last Friday, at InternSpirit’s mentorship program (for the first and third-year students), I had the opportunity to mentor in the AI/ML domain. After listening to other mentors from other domains share their tech wisdom, it was finally my turn. The auditorium felt like a cozy library—quiet, focused, and… very ready for a ...",
    imageUrl: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-machinelearning-mentorshipmatters-activity-7291553633110740992-eO-3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-4",
    title: "LevelSupermind Hackathon",
    description:"Harsh Sawant , Chinmay Gadgil and I built ART (Automated and Trigger Finder), an application designed to slash the time spent on ad creation research. Imagine this: instead of spending hours sifting through data, ART gives you key points, CTAs, and performance insights on the fly ...",
    imageUrl: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_weekendproject-hackathonlife-levelsupermind-activity-7286822430910619649-0bfo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-5",
    title: "NITG Hackathon",
    description:"WINNING project for the NITG 24-hour Hackathon. What is Peer-Hive? Peer-Hive is THE platform where student associations, councils, and clubs can finally stop running around ...",
    imageUrl: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_hackathon-nitgoa-techtonics-activity-7261987720493715456-GvG-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-6",
    title: "MIT Hackathon",
    description:"Excited to share that my team consisting of Chinmay Gadgil, SHAUN D'SOUZA, Kedron Lucas, Parshuram Gooli and I Harsh Sawant have been selected to participate in the 36-hour hackathon at ...",
    imageUrl: "https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_hackathon-nitgoa-techtonics-activity-7261987720493715456-GvG-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-7",
    title: "Goa Polics Hackathon",
    description:"Goa Police Hackathon just wrapped, and what a ride it’s been! From sleepless nights fueled by adrenaline to moments of breakthrough that made it all worth it, this journey tested our skills, teamwork, and endurance. We tackled challenges that matter, using tech, ML ...",
    imageUrl: "https://images.unsplash.com/photo-1726066012698-bb7a3abce786?q=80&w=2487&auto=format&fit=crop",
    date: "June 2024",
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_innovation-techforgood-ml-activity-7246196597947039747-pTfR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
];

export default function HoverSliderDemo() {
  return (
    <div className="h-full w-full flex flex-col items-center gap-20">
    <div className="hero-heading text-4xl md:text-8xl bebas bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">🌀Memories down the line</div>
    <p className="font-sans font-normal text-center text-base mt-4 text-neutral-300 ">These are my Shinobi Scrolls — snapshots of the chaos, creativity, 
      and ramen-fueled nights behind each jutsu I've learned! <br/>From shadowy sketches to full-blown design Rasengans, 
      very frame holds a part of my journey. <br/>Believe it!</p>
    <HoverSlider className=" place-content-center 1tags text-white">
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex flex-col space-y-2 md:space-y-4">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-4xl font-bold uppercase tracking-tighter"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap>
          {SLIDES.map((slide, index) => (
            <div key={`img-${slide.id}`}>
              <HoverSliderImage
                index={index}
                src={slide.imageUrl}
                alt={slide.title}
                className="size-full max-h-96 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          ))}
        </HoverSliderImageWrap>
        <SlideDescription
  descriptions={SLIDES.map((s) => s.description)}
  dates={SLIDES.map((s) => s.date)}
  linkedinLinks={SLIDES.map((s) => s.linkedin)}
/>
      </div>
    </HoverSlider>
    </div>
  );
}
