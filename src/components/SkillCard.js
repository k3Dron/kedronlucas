import React from "react";
import { CardSpotlight } from "./SkillCardSpotlight"; // Update the path if needed

const SkillCard = ({ title, leftLabel, rightLabel, color = "#262626" }) => {
    return (
        <CardSpotlight color={color}>
            <div className="relative z-10 flex flex-col text-white pbutton gap-25">
                <h4 className="bebas">{title}</h4>
                <div className="flex flex-row items-center gap-6 text-sm opacity-80">
                    <span>{leftLabel}</span>
                    <div className="w-px h-4 bg-white/20" />
                    <span>{rightLabel}</span>
                </div>
            </div>
        </CardSpotlight>
    );
};

export default SkillCard;
