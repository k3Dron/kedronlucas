'use client';

import React from "react";
import { ArrowRight, Mail } from "lucide-react";
import Button from "./Button";
import SkillCard from "./SkillCard";

const skills = [
    { name: "Deep Learning", percentage: 85 },
    { name: "AI Agents Development", percentage: 75 },
    { name: "Flutter", percentage: 70 },
    { name: "Figma", percentage: 60 },
];

const MyShowcase = () => {
    return (
        <div className="full-wrapper">
            <div className="section-container">
                {/* <h2 className="section-heading bebas">Ultimate Power Booster</h2>
                <div className="music-section">
                    <a href="https://example.com/album1" target="_blank" rel="noopener noreferrer">
                        <img src="/images/album-cover.png" alt="Album Cover" className="album-cover" />
                    </a>
                    <a href="https://example.com/album2" target="_blank" rel="noopener noreferrer">
                        <img src="/images/football.png" alt="Album Cover" className="album-cover" />
                    </a>
                    <a href="https://example.com/album3" target="_blank" rel="noopener noreferrer">
                        <img src="/images/fishing.png" alt="Album Cover" className="album-cover" />
                    </a>
                    <a href="https://example.com/album4" target="_blank" rel="noopener noreferrer">
                        <img src="/images/chat-gpt.png" alt="Album Cover" className="album-cover" />
                    </a>
                </div> */}

                <h2 className="section-heading bebas">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        <SkillCard
          title="React Developer"
          leftLabel="Experience"
          rightLabel="3+ Years"
        />
        <SkillCard
          title="TypeScript Expert"
          leftLabel="Proficiency"
          rightLabel="Advanced"
          color="#1E40AF"
        />
        <SkillCard
          title="Node.js Engineer"
          leftLabel="Projects"
          rightLabel="15+ Built"
          color="#047857"
        />
        <SkillCard
          title="Node.js Engineer"
          leftLabel="Projects"
          rightLabel="15+ Built"
          color="#047857"
        />
      </div>
                {/* Buttons Row */}
                <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                    <Button text="Contact" scrollToId="social" Icon={Mail} />
                    <Button text="See Projects" scrollToId="projects" Icon={ArrowRight} />
                </div>
            </div>
        </div>
    );
};

export default MyShowcase;
