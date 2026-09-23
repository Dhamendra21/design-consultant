"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * ArchitectCursor
 * Premium custom cursor with live X/Y coordinate telemetry.
 * - Follows the mouse with spring damping for smooth feel
 * - Displays screen coordinates in monospace
 * - Expands and rotates 45° when hovering links, buttons, or [data-cursor="expand"]
 * - Hidden automatically on touch devices
 */
export default function ArchitectCursor() {
  const [visible, setVisible]   = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [coords, setCoords]     = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch]   = useState(true); // default true for SSR safety

  const rawX = useMotionValue(-200);
  const rawY = useMotionValue(-200);

  const springCfg = { stiffness: 160, damping: 20, mass: 0.5 };
  const x = useSpring(rawX, springCfg);
  const y = useSpring(rawY, springCfg);

  useEffect(() => {
    const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    const onMove = (e) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      setCoords({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const onOver = (e) => {
      const el = e.target.closest("a, button, [data-cursor='expand']");
      setExpanded(!!el);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [rawX, rawY]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, opacity: visible ? 1 : 0 }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
    >
      {/* Main crosshair ring */}
      <motion.div
        animate={{
          scale:  expanded ? 2.2 : 1,
          rotate: expanded ? 45  : 0,
        }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        style={{ transform: "translate(-50%, -50%)" }}
        className="relative flex items-center justify-center"
      >
        {/* Square outline */}
        <motion.div
          animate={{
            width:  expanded ? "38px" : "20px",
            height: expanded ? "38px" : "20px",
          }}
          transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="border border-neutral-900/50"
        />

        {/* Centre crosshair mark */}
        <span
          className="absolute font-mono font-bold text-[13px] leading-none text-neutral-900/80 select-none"
          style={{ transform: "translate(-50%, -50%)", top: "50%", left: "50%" }}
        >
          +
        </span>
      </motion.div>

      {/* Coordinate readout — fades out when expanded (hovering) */}
      <motion.div
        animate={{ opacity: expanded ? 0 : 0.55 }}
        transition={{ duration: 0.2 }}
        className="absolute font-mono text-[8px] tracking-widest text-neutral-600 whitespace-nowrap select-none"
        style={{ top: "14px", left: "10px" }}
      >
        {`X:${coords.x} Y:${coords.y}`}
      </motion.div>
    </motion.div>
  );
}
