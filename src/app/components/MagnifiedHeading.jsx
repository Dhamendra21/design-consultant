"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";

export default function MagnifiedHeading() {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Raw mouse coordinates relative to the container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-smoothed coordinates for the loupe for an organic optical feel
  const springConfig = { stiffness: 300, damping: 30, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Opacity transition for the loupe and magnification effect
  const opacity = useSpring(0, { stiffness: 300, damping: 30 });

  useEffect(() => {
    opacity.set(isHovered ? 1 : 0);
  }, [isHovered, opacity]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    // Snap to exact position immediately on enter to avoid "flying in" from a previous exit point
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      mouseX.set(x);
      mouseY.set(y);
      smoothX.jump(x);
      smoothY.jump(y);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const scale = 1.35;
  const loupeRadius = 65; // 130px diameter
  const clipRadius = loupeRadius / scale; // Radius of the mask on the scaled overlay

  // Transform origin tracks the mouse, so zooming always centers perfectly on the cursor
  const transformOrigin = useMotionTemplate`${smoothX}px ${smoothY}px`;
  // The clip-path circle effectively becomes `loupeRadius` after the 1.35x scale is applied
  const clipPath = useMotionTemplate`circle(${clipRadius}px at ${smoothX}px ${smoothY}px)`;

  // Top-left coordinates for the loupe decoration border
  const loupeX = useTransform(smoothX, (x) => x - loupeRadius);
  const loupeY = useTransform(smoothY, (y) => y - loupeRadius);

  const headingLines = [
    { text: "We engineer", isItalic: false },
    { text: "architectural", isItalic: true },
    { text: "foundations into", isItalic: false },
    { text: "living spaces.", isItalic: true },
  ];

  const Content = () => (
    <h1
      className="font-bold tracking-[-0.04em] text-arciform-ink font-sans text-6xl sm:text-6xl md:text-5xl md:lg:ml-50 lg:text-6xl xl:text-8xl 2xl:text-[7.5rem] leading-[1.1]"
    >
      {headingLines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.1em]">
          <motion.span
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.1,
              ease: [0.16, 1, 0.3, 1],
              delay: i * 0.12,
            }}
            className={`block ${
              line.isItalic ? "italic font-normal" : ""
            }`}
            style={{
              fontFamily: line.isItalic ? "var(--font-playfair), Georgia, serif" : "inherit",
              color:line.isItalic?"#C06C47":"#000000ff"
            }}
          >
            {line.text}
          </motion.span>
        </span>
      ))}
    </h1>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-fit cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Base Layer */}
      <div className="relative z-0">
        <Content />
      </div>

      {/* Magnified Overlay Layer */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          scale,
          transformOrigin,
          clipPath,
          opacity,
        }}
      >
        <Content />
      </motion.div>

      {/* Technical Loupe UI Decoration */}
      <motion.div
        className="absolute top-0 left-0 z-20 pointer-events-none rounded-full border border-arciform-border shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1),0_8px_10px_-6px_rgba(0,0,0,0.1)] bg-arciform-card/5 backdrop-blur-[1px]"
        style={{
          width: loupeRadius * 2,
          height: loupeRadius * 2,
          x: loupeX,
          y: loupeY,
          opacity,
        }}
      >
        {/* Subtle Drafting Crosshairs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-[1px] bg-arciform-muted/80" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-[1px] bg-arciform-muted/80" />
      </motion.div>
    </div>
  );
}
