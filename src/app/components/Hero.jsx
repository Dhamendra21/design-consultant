"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import MagnifiedHeading from "./MagnifiedHeading";

/**
 * Hero Section
 * - Full viewport height
 * - Massive clamp headline with italic serif accent word
 * - Animated "Scroll to explore" indicator at the bottom
 * - Framer Motion high-end entrance animations
 */
export default function Hero() {
  const scrollIndicatorRef = useRef(null);

  // Parallax tilt effect for image
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["4deg", "-4deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-4deg", "4deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const headingLines = [
    { text: "We engineer", isItalic: false },
    { text: "architectural", isItalic: true },
    { text: "foundations into", isItalic: false },
    { text: "living spaces.", isItalic: true },
  ];

  return (
    <section
      id="hero"
      style={{
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
      }}
      className="hero-section"
    >
      {/* ── Subtle background grid texture ── */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.2, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(17,17,17,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(17,17,17,0.025) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          zIndex: 0,
        }}
      />

      {/* ── Decorative number ── */}
      <motion.span
        aria-hidden="true"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute top-1/2 right-10 -translate-y-[60%] font-sans font-bold tracking-tighter text-arciform-ghost select-none pointer-events-none leading-none z-0 text-[7rem] sm:text-[11rem] md:text-[16rem] lg:text-[22rem] 2xl:text-[26rem]"
      >
        01
      </motion.span>

      {/* ── Main Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          alignItems: "center",
        }}
        className="hero-grid w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16"
      >
        <div>
          {/* Eyebrow label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="inline-block w-8 h-[1px] bg-arciform-border" />
            <span className="font-mono text-[0.72rem] font-medium tracking-[0.14em] uppercase text-neutral-400">
              Architecture & Interior Design — Est. 2000
            </span>
          </motion.div>

          {/* Interactive Magnified Heading */}
          <MagnifiedHeading />

          {/* Subtext row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: "3.5rem",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "3rem",
            }}
          >
            <p
              className="font-sans font-light text-arciform-muted text-xs sm:text-sm md:text-base leading-relaxed max-w-xl lg:max-w-2xl"
            >
              From Bhoomi Pujan to Griha Pravesh — we walk every stage of
              construction with intention, craft, and material honesty.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                ["1100+", "Projects Delivered"],
                ["26", "Years of Practice"],
              ].map(([val, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
                  <span
                    className="font-sans text-[1.6rem] font-bold tracking-tight text-arciform-ink"
                  >
                    {val}
                  </span>
                  <span
                    className="font-mono text-[0.75rem] font-normal uppercase tracking-[0.06em] text-neutral-400"
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Image / Elevation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            width: "100%",
            perspective: 1000,
          }}
          className="hero-image-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "620px",
              border: "1px solid rgba(17,17,17,0.2)",
              background: "rgba(255,255,255,0.2)",
              boxShadow: "0 20px 50px rgba(17,17,17,0.08)",
              padding: "0.75rem",
              rotateX,
              rotateY,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0.75rem auto auto 0.75rem",
                width: "42px",
                height: "42px",
                borderTop: "1px solid rgba(17,17,17,0.5)",
                borderLeft: "1px solid rgba(17,17,17,0.5)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
            
            {/* Image Wrapper for Clip Path Reveal */}
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: "hidden", position: "relative" }}
            >
              <motion.img
                src="/hero.png"
                alt="Architectural project concept"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: "block",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1.15",
                  objectFit: "cover",
                  background: "var(--color-arciform-card)",
                  border: "1px solid var(--color-arciform-border)",
                }}
              />
            </motion.div>

            <div
              style={{
                position: "absolute",
                inset: "auto 0.75rem 0.75rem auto",
                width: "42px",
                height: "42px",
                borderRight: "1px solid rgba(17,17,17,0.5)",
                borderBottom: "1px solid rgba(17,17,17,0.5)",
                pointerEvents: "none",
                zIndex: 2,
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)", // Will combine with motion y safely if not conflicting
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          zIndex: 1,
        }}
      >
        <span
          className="font-sans text-[0.68rem] font-medium uppercase tracking-[0.14em] text-arciform-muted"
        >
          Scroll to explore
        </span>
        {/* Animated scroll pill */}
        <div
          style={{
            width: "22px",
            height: "36px",
            border: "1.5px solid var(--muted)",
            borderRadius: "12px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "4px",
              height: "8px",
              background: "var(--ink)",
              borderRadius: "2px",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes scrollDot {
          0%   { top: 6px; opacity: 1; }
          70%  { top: 18px; opacity: 0.3; }
          100% { top: 6px; opacity: 1; }
        }
      `}</style>
    </section>
  );
}
