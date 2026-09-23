/**
 * Arciform — Shared Animation Constants
 * Weighted quintic ease used for all kinetic reveals site-wide.
 */
export const ARCH_EASE = [0.16, 1, 0.3, 1];
export const ARCH_DURATION = 0.85;

export const archTransition = (delay = 0) => ({
  duration: ARCH_DURATION,
  ease: ARCH_EASE,
  delay,
});
