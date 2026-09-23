"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * MagneticButton
 * Wraps any child element so it gently follows the cursor
 * within a configurable px radius on hover.
 *
 * Usage:
 *   <MagneticButton>
 *     <a href="...">Initiate Consultation →</a>
 *   </MagneticButton>
 */
export default function MagneticButton({ children, strength = 0.38, className = "" }) {
  const ref     = useRef(null);
  const rawX    = useMotionValue(0);
  const rawY    = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 220, damping: 22 });
  const y = useSpring(rawY, { stiffness: 220, damping: 22 });

  const MAX_OFFSET = 20; // px

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect    = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width  / 2;
    const centerY = rect.top  + rect.height / 2;

    const dx = (e.clientX - centerX) * strength;
    const dy = (e.clientY - centerY) * strength;

    rawX.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dx)));
    rawY.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, dy)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
