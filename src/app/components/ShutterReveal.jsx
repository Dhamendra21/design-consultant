"use client";

import { motion } from "framer-motion";

/**
 * ShutterReveal
 * Wraps an image container and adds an architectural shutter mask:
 * a solid overlay div that wipes vertically away (scaleY: 1 → 0,
 * origin: top) to reveal the photograph underneath when the card
 * enters the viewport.
 *
 * Usage:
 *   <ShutterReveal className="...optional extra classes...">
 *     <img src="..." alt="..." className="w-full h-full object-cover" />
 *   </ShutterReveal>
 */
export default function ShutterReveal({ children, className = "", delay = 0 }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The content (image) underneath */}
      {children}

      {/* The shutter overlay — wipes off downward */}
      <motion.div
        initial={{ scaleY: 1 }}
        whileInView={{ scaleY: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: 0.9,
          ease:     [0.16, 1, 0.3, 1],
          delay,
        }}
        style={{ transformOrigin: "top" }}
        className="absolute inset-0 bg-[#EBEBEB] z-10 pointer-events-none"
      />
    </div>
  );
}
