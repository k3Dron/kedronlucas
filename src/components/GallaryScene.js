"use client";

import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
  SlideDescription
} from "@/components/animated-slideshow";
import  TiltGalleryLoop from '@/components/tiltGallaryLoop';
import ScrambledText from './ScrambledText';



const SLIDES = [
  {
    id: "slide-1",
    title: "Retrothon Hackathon",
    name: "Retrothon Hackathon",
    description: "Won First Place at Retrothon Hackathon. Built AutoAgent—a Canva-like AI Agent builder with drag-and-drop support, custom models, and chatbot flow generation. We're in talks with investors to scale it!",
    image: '/images/gallary/it-25.jpg',
    date: "April 2025",
    tech: ["April 2025"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-hackathon-retrothon-activity-7312070130383929344-VHRN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-2",
    title: "InternSpirit Hackathon",
    name: "InternSpirit Hackathon",
    description: "Built MSMEDhara—an AI platform for MSMEs to simplify exports using market suggestions, bulk shipping, and smart CHAs. Powered by ML and real MSME interviews, it brings smart global trade to life.",
    image: '/images/gallary/internspirit-25.jpg',
    date: "March 2025",
    tech: ["March 2025"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-ml-hackathonwinner-activity-7302069361324736512-OZh-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-3",
    title: "AI/ML Mentor",
    name: "AI/ML Mentor",
    description: "Mentored first and third-year students in AI/ML during the InternSpirit program. Shared insights on real-world AI applications and simplified complex ML topics for young learners.",
    image: '/images/gallary/aimlmentor.jpg',
    date: "March 2025",
    tech: ["March 2025"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_ai-machinelearning-mentorshipmatters-activity-7291553633110740992-eO-3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-4",
    title: "LevelSupermind Hackathon",
    name: "LevelSupermind Hackathon",
    description: "Built ART (Automated Research & Trigger Finder) to reduce ad research time. It gives insights, CTAs, and trends instantly—turning chaotic ad brainstorming into strategic execution.",
    image: '/images/gallary/levelsupermind.jpg',
    date: "Jan 2025",
    tech: ["Jan 2025"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_weekendproject-hackathonlife-levelsupermind-activity-7286822430910619649-0bfo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-5",
    title: "NITG Hackathon",
    name: "NITG Hackathon",
    description: "Winning project for NITG 24-hour Hackathon. Peer-Hive is a platform for student bodies to centralize events, resources, and comms—ending the chaos of scattered tools and WhatsApp groups.",
    image: '/images/gallary/nit-24.jpg',
    date: "Dec 2024",
    tech: ["Dec 2024"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_hackathon-nitgoa-techtonics-activity-7261987720493715456-GvG-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-6",
    title: "MIT Hackathon",
    name: "MIT Hackathon",
    description: "Selected for MIT's 36-hour Hackathon! Collaborated with an awesome team to tackle big challenges, learn fast, and build something meaningful. Watch this space for what we built!",
    image: '/images/gallary/mit-24.jpg',
    date: "Oct 2024",
    tech: ["Oct 2024"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_hackathon-nitgoa-techtonics-activity-7261987720493715456-GvG-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
  {
    id: "slide-7",
    title: "Goa Police Hackathon",
    name: "Goa Police Hackathon",
    description: "Wrapped up the Goa Police Hackathon after intense rounds of ideation, problem-solving, and coding! Tackled real-world policing issues with ML and tech for better safety solutions.",
    image: '/images/gallary/goapolice-24.jpg',
    date: "Sept 2024",
    tech: ["Sept 2024"],
    linkedin: "https://www.linkedin.com/posts/kedron-lucas_innovation-techforgood-ml-activity-7246196597947039747-pTfR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETdTr4Bbb0FNngGAWLvDxiWctGt6nQKXD4",
  },
];


export default function HoverSliderDemo() {
  return (
    <div className="h-full w-full flex flex-col items-center ">
    <ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.2}
  scrambleChars=".:"
>
  Memories...
</ScrambledText>
    <p className="font-sans font-normal text-center text-sm md:text-base mt-4 text-neutral-300 pbutton ">These are my Shinobi Scrolls — snapshots of the chaos, creativity, 
      and ramen-fueled nights behind each jutsu Ive learned! <br/>From shadowy sketches to full-blown design Rasengans, 
      very frame holds a part of my journey. <br/>Believe it!</p>
    <div className="h-4 md:h-10"/>
    <HoverSlider className=" place-content-center 1tags text-white hidden lg:block">
      <div className="flex flex-wrap items-center justify-evenly gap-6 md:gap-12">
        <div className="flex flex-col space-y-2 md:space-y-4">
          {SLIDES.map((slide, index) => (
            <TextStaggerHover
              key={slide.id}
              index={index}
              className="cursor-pointer text-base xl:text-4xl font-bold uppercase tracking-tighter"
              text={slide.title}
            />
          ))}
        </div>
        <HoverSliderImageWrap>
          {SLIDES.map((slide, index) => (
            <div key={`img-${slide.id}`}>
              <HoverSliderImage
                index={index}
                src={slide.image}
                alt={slide.title}
                className="w-40 h-28 xl:size-full xl:max-h-96 size-full max-h-96 object-cover"
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
  className="text-sm xl:text-lg max-w-md lg:max-w-xl xl:max-w-2xl text-center mt-4"
/>
      </div>
    </HoverSlider>
    <div className="lg:hidden"><TiltGalleryLoop items={SLIDES}/></div>
    </div>
  );
}
