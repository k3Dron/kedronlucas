// components/animated-slideshow.js
"use client";

import React, { createContext, useContext, useState, useCallback, forwardRef } from "react";
import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/components/utils";
import { ExternalLink } from "lucide-react";

function splitText(text) {
  const words = text.split(" ").map((word) => word.concat(" "));
  const characters = words.map((word) => word.split("")).flat(1);
  return { words, characters };
}

const HoverSliderContext = createContext(undefined);

function useHoverSliderContext() {
  const context = useContext(HoverSliderContext);
  if (!context) {
    throw new Error("useHoverSliderContext must be used within a HoverSliderProvider");
  }
  return context;
}

export const HoverSlider = forwardRef(({ children, className, ...props }, ref) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const changeSlide = useCallback((index) => setActiveSlide(index), []);

  return (
    <HoverSliderContext.Provider value={{ activeSlide, changeSlide }}>
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    </HoverSliderContext.Provider>
  );
});
HoverSlider.displayName = "HoverSlider";

export const TextStaggerHover = forwardRef(({ text, index, className, ...props }, ref) => {
  const { activeSlide, changeSlide } = useHoverSliderContext();
  const { characters } = splitText(text);
  const isActive = activeSlide === index;
  const handleMouse = () => changeSlide(index);

  return (
    <span
      className={cn("relative inline-block origin-bottom overflow-hidden", className)}
      ref={ref}
      onMouseEnter={handleMouse}
      {...props}
    >
      {characters.map((char, i) => (
        <span key={`${char}-${i}`} className="relative inline-block overflow-hidden">
          <MotionConfig
            transition={{ delay: i * 0.025, duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span
              className="inline-block opacity-20"
              initial={{ y: "0%" }}
              animate={isActive ? { y: "-110%" } : { y: "0%" }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
            <motion.span
              className="absolute left-0 top-0 inline-block opacity-100"
              initial={{ y: "110%" }}
              animate={isActive ? { y: "0%" } : { y: "110%" }}
            >
              {char}
            </motion.span>
          </MotionConfig>
        </span>
      ))}
    </span>
  );
});
TextStaggerHover.displayName = "TextStaggerHover";

export const HoverSliderImageWrap = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "grid overflow-hidden [&>*]:col-start-1 [&>*]:col-end-1 [&>*]:row-start-1 [&>*]:row-end-1 [&>*]:size-full",
        className
      )}
      {...props}
    />
  );
});
HoverSliderImageWrap.displayName = "HoverSliderImageWrap";

export const clipPathVariants = {
  visible: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  },
  hidden: {
    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0px)",
  },
};

export const HoverSliderImage = forwardRef(({ index, className, ...props }, ref) => {
  const { activeSlide } = useHoverSliderContext();
  return (
    <motion.img
      ref={ref}
      className={cn("inline-block align-middle", className)}
      transition={{ ease: [0.33, 1, 0.68, 1], duration: 0.8 }}
      variants={clipPathVariants}
      animate={activeSlide === index ? "visible" : "hidden"}
      {...props}
    />
  );
});
HoverSliderImage.displayName = "HoverSliderImage";

export const SlideDescription = forwardRef(
  ({ descriptions = [], dates = [], linkedinLinks = [], className, ...props }, ref) => {
    const { activeSlide } = useHoverSliderContext();

    const description = descriptions[activeSlide];
    const date = dates[activeSlide];
    const linkedin = linkedinLinks[activeSlide];

    if (!description) return null;

    return (
      <motion.div
        ref={ref}
        className={cn("flex flex-col items-left text-white mt-4 gap-5", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        key={activeSlide}
        {...props}
      >
        {date && (
          <span className="bebas font-normal  mt-4 text-neutral-300 ">{date}</span>
        )}

        <p className="font-sans font-normal text-base mt-4 text-neutral-300 max-w-100">{description}</p>

        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 ptags rounded-full text-xs font-mono hover:underline mt-2"
          >
            <ExternalLink size={16} /> LinkedIn
          </a>
        )}
      </motion.div>
    );
  }
);

SlideDescription.displayName = "SlideDescription";
