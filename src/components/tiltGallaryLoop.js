import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationFrame } from 'framer-motion';
import { Tilt } from './tilt';
import { GithubIcon, ArrowRightIcon, LinkedinIcon } from 'lucide-react';

export default function TiltGalleryLoop({ items = [] }) {
    const containerRef = useRef(null);
    const scrollX = useRef(0);
    const [paused, setPaused] = useState(false);
    const dragState = useRef({ dragging: false, startX: 0, lastX: 0 });

    const duplicatedItems = [...items, ...items]; // duplicate for seamless loop

    useAnimationFrame((t, delta) => {
        if (!containerRef.current || paused || dragState.current.dragging) return;

        scrollX.current -= 0.05 * delta; // speed

        const container = containerRef.current;
        const width = container.scrollWidth / 2; // original list width

        if (Math.abs(scrollX.current) >= width) {
            scrollX.current = 0; // reset for seamless loop
        }

        container.style.transform = `translateX(${scrollX.current}px)`;
    });

    // Drag handlers
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const getEventX = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

        const onPointerDown = (e) => {
            setPaused(true);
            dragState.current.dragging = true;
            dragState.current.startX = getEventX(e) - scrollX.current;
            dragState.current.lastX = getEventX(e);
            window.addEventListener('mousemove', onPointerMove);
            window.addEventListener('mouseup', onPointerUp);
            window.addEventListener('touchmove', onPointerMove);
            window.addEventListener('touchend', onPointerUp);
        };

        const onPointerMove = (e) => {
            if (!dragState.current.dragging) return;
            const x = getEventX(e);
            const dx = x - dragState.current.lastX;
            dragState.current.lastX = x;
            scrollX.current += dx;
            const width = container.scrollWidth / 2;
            if (scrollX.current > 0) scrollX.current = -width;
            if (Math.abs(scrollX.current) >= width) scrollX.current = 0;
            container.style.transform = `translateX(${scrollX.current}px)`;
        };

        const onPointerUp = () => {
            dragState.current.dragging = false;
            setPaused(false);
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('mouseup', onPointerUp);
            window.removeEventListener('touchmove', onPointerMove);
            window.removeEventListener('touchend', onPointerUp);
        };

        container.addEventListener('mousedown', onPointerDown);
        container.addEventListener('touchstart', onPointerDown);

        return () => {
            container.removeEventListener('mousedown', onPointerDown);
            container.removeEventListener('touchstart', onPointerDown);
            window.removeEventListener('mousemove', onPointerMove);
            window.removeEventListener('mouseup', onPointerUp);
            window.removeEventListener('touchmove', onPointerMove);
            window.removeEventListener('touchend', onPointerUp);
        };
    }, []);

    return (
        <div className="overflow-hidden w-full">
            <div
                ref={containerRef}
                className="flex w-fit gap-6 cursor-grab active:cursor-grabbing"
                style={{ willChange: 'transform', userSelect: 'none', touchAction: 'pan-y' }}
            >
                {duplicatedItems.map((item, index) => {
                    const { image, name, description, tech, github, linkedin, link } = item;
                    // tech can be array or object or set, normalize to array of strings
                    let techTags = [];
                    if (Array.isArray(tech)) techTags = tech;
                    else if (tech && typeof tech === 'object' && !(tech instanceof Set)) techTags = Object.keys(tech);
                    else if (tech instanceof Set) techTags = Array.from(tech);
                    else if (typeof tech === 'string') techTags = [tech];

                    return (
                        <div
                            key={index}
                            className="w-80 shrink-0"
                            onMouseEnter={() => setPaused(true)}
                            onMouseLeave={() => setPaused(false)}
                        >
                            <Tilt
                                rotationFactor={6}
                                isRevese
                                springOptions={{
                                    stiffness: 26.7,
                                    damping: 4.1,
                                    mass: 0.2,
                                }}
                                className="group relative rounded-2xl flex flex-col gap-3"
                            >
                                <div
                                    className="rounded-2xl overflow-hidden "
                                    style={{
                                        height: '33vh',
                                        width: '33vh',
                                        minWidth: '0',
                                        minHeight: '0',
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                    }}
                                >
                                    <img
                                        src={image}
                                        alt={name}
                                        className="rounded-2xl object-cover grayscale duration-700 group-hover:grayscale-0 transition-transform group-hover:scale-110"
                                        style={{
                                            height: '100%',
                                            width: '100%',
                                            display: 'block',
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col space-y-0.5 pb-0 pt-3 gap-3">
                                    <h3 className="text-md bebas text-black dark:text-white">
                                        {name}
                                    </h3>
                                    <p className="font-mono text-sm font-medium text-zinc-500 dark:text-zinc-400">
                                        {description}
                                    </p>
                                    {techTags.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-1">
                                            {techTags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="bg-zinc-200 dark:bg-zinc-700 text-sm bebas font-medium ptags rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <div className="mt-2 flex items-center gap-2">
                                    <div className="flex items-center gap-2">
                                        {github && (
                                            <a
                                                href={github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 ptags rounded-full text-xs font-mono hover:underline"
                                            >
                                                <GithubIcon size={16} /> GitHub
                                            </a>
                                        )}
                                        {linkedin && (
                                            <a
                                                href={linkedin}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 ptags rounded-full text-xs font-mono hover:underline"
                                            >
                                                <LinkedinIcon size={16} /> LinkedIn
                                            </a>
                                        )}
                                    </div>
                                    {link && (
                                        <a
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 rounded-full ptags bg-white text-white hover:bg-neutral-900 transition-colors"
                                        >
                                            {/* Red Pulse Dot */}
                                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping-slow"></span>
                                            {/* Live Text */}
                                            <span className="bebas tracking-wide text-lg">Live</span>
                                            {/* Icon */}
                                            <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
                                        </a>
                                    )}
                                </div>
                            </Tilt>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
