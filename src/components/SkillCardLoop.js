import React, { useRef, useEffect, useState } from "react";
import { useAnimationFrame } from "framer-motion";
import SkillCard from "./SkillCard"; // Make sure this path is correct

export default function SkillCardLoop({ cards = [] }) {
  const containerRef = useRef(null); // Ref for the scrolling container
  const scrollX = useRef(0); // Current horizontal scroll position
  const [paused, setPaused] = useState(false); // Pause animation when dragging or hovering
  const dragState = useRef({ dragging: false, startX: 0, lastX: 0 }); // Stores drag info

  // Duplicate cards for seamless loop
  const duplicatedCards = [...cards, ...cards];

  // Animate horizontal scroll frame by frame
  useAnimationFrame((_, delta) => {
    if (!containerRef.current || paused || dragState.current.dragging) return;

    scrollX.current -= 0.05 * delta; // Control scroll speed
    const container = containerRef.current;
    const width = container.scrollWidth / 2; // Width of the original card set

    // Reset position when end of list is reached for looping
    if (Math.abs(scrollX.current) >= width) scrollX.current = 0;

    // Apply the scroll transformation
    container.style.transform = `translateX(${scrollX.current}px)`;
  });

  // Dragging logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const getEventX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

    const onPointerDown = (e) => {
      setPaused(true);
      dragState.current.dragging = true;
      dragState.current.startX = getEventX(e) - scrollX.current;
      dragState.current.lastX = getEventX(e);

      // Attach move and end listeners
      window.addEventListener("mousemove", onPointerMove);
      window.addEventListener("mouseup", onPointerUp);
      window.addEventListener("touchmove", onPointerMove);
      window.addEventListener("touchend", onPointerUp);
    };

    const onPointerMove = (e) => {
      if (!dragState.current.dragging) return;
      const x = getEventX(e);
      const dx = x - dragState.current.lastX;
      dragState.current.lastX = x;
      scrollX.current += dx;

      const width = container.scrollWidth / 2;
      // Loop position back if scrolled too far in either direction
      if (scrollX.current > 0) scrollX.current = -width;
      if (Math.abs(scrollX.current) >= width) scrollX.current = 0;

      container.style.transform = `translateX(${scrollX.current}px)`;
    };

    const onPointerUp = () => {
      dragState.current.dragging = false;
      setPaused(false);
      // Remove event listeners
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };

    // Attach initial down listeners
    container.addEventListener("mousedown", onPointerDown);
    container.addEventListener("touchstart", onPointerDown);

    return () => {
      container.removeEventListener("mousedown", onPointerDown);
      container.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
    };
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex w-fit gap-6 cursor-grab active:cursor-grabbing"
        style={{ willChange: "transform", userSelect: "none", touchAction: "pan-y" }}
      >
        {/* Render the duplicated skill cards */}
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            className="w-80 shrink-0"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <SkillCard {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
