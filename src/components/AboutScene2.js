"use client";

import React from "react";
import ScrollVelocity from "./ScrollVelocityComponent";
import ScrollFloat from "./ScrollFloat";
import SkillCardLoop from "./SkillCardLoop";
import Button from "./Button";
import { Mail, ArrowRight } from "lucide-react";

const skills = [
  { title: "Flutter Developer", leftLabel: "3+yr Experience", rightLabel: "5+ Projects" },
  { title: "Python Developer", leftLabel: "3+yr Experience", rightLabel: "10+ Projects" },
  { title: "C Developer", leftLabel: "3+yr Experience", rightLabel: "7+ Projects" },
  { title: "C++ Developer", leftLabel: "3+yr Experience", rightLabel: "7+ Projects" },
  { title: "AI Engineer", leftLabel: "3+yr Experience", rightLabel: "10+ Projects" },
  { title: "ML Engineer", leftLabel: "2+yr Experience", rightLabel: "10+ Projects" },
  { title: "Hackathons", leftLabel: "3+ Wins", rightLabel: "10+ Participation" },
  { title: "Blockchain", leftLabel: "1+yr Experience", rightLabel: "5+ Projects" },
  { title: "Mentor", leftLabel: "Mentored 15+", rightLabel: "3+ placed" },
];

const AboutScene = () => (
  <div className="z-10 flex flex-col items-center min-h-screen w-full relative bg-black text-white">
    {/* Scroll content */}
    <div className="flex flex-col items-center pt-24 pb-48">
      <ScrollVelocity
        texts={[
          "Hi there, Welcome to my Portfolio!",
          "Hope you enjoy the experience!",
        ]}
        velocity={20}
        className="custom-scroll-text"
      />
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Kedron Lucas
      </ScrollFloat>
    </div>

    {/* Profile image slightly above bottom */}
    <div className="absolute bottom-[140px] left-0 w-full flex justify-center z-10">
      <img
        src="/images/mainpfp.png"
        alt="Profile"
        className="w-auto h-130 my-4"
      />
    </div>

    {/* SkillCardLoop fixed at bottom */}
    <div className="absolute bottom-4 w-full z-20">
      <SkillCardLoop cards={skills} />
    </div>

    {/* Buttons in bottom corners */}
    <div className="absolute bottom-60 pbutton w-full z-30 flex justify-between ">
      <Button text="Contact" scrollToId="social" Icon={Mail} />
      <Button text="See Projects" scrollToId="projects" Icon={ArrowRight} />
    </div>
  </div>
);

export default AboutScene;
