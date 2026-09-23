"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * MaskReveal
 * Clips its children inside an overflow-hidden container and
 * animates them from y:"100%" → y:"0%" as the element enters the viewport.
 */
export default function MaskReveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "115%" }}
        animate={isInView ? { y: "0%" } : { y: "115%" }}
        transition={{
          duration: 0.85,
          ease:     [0.16, 1, 0.3, 1],
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
