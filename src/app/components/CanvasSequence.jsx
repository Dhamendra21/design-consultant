"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ─── Register GSAP Plugin (client-side only, via useEffect) ─── */
// Registration is deferred to useEffect to avoid SSR hydration mismatch.

/* ─── Frame Configuration ───────────────────────────────────── */
/**
 * Total frames to load from /upscaled-video_frames/.
 * Files: frame_0001.webp → frame_0479.webp
 * Frames that fail to load are silently skipped.
 */
const TOTAL_FRAMES_EXPECTED = 481;
const FRAME_BASE_PATH = "/upscaled-video_frames/";

/**
 * Generates the zero-padded filename for a 1-indexed frame number.
 * Files: /upscaled-video_frames/frame_0001.webp ... frame_0479.webp
 */
const frameName = (n) =>
  `frame_${String(n).padStart(4, "0")}.webp`;

/* ─── Phase captions tied to scroll progress ───────────────── */
const PHASES = [
  {
    range: [0, 0.25],
    phase: "Phase 01",
    title: "Sacred Origins",
    body: "Bhoomi Pujan rituals marking ground zero.",
    tag: "Commencement",
  },
  {
    range: [0.26, 0.50],
    phase: "Phase 02",
    title: "Structural Grid",
    body: "Footings, reinforced rebar, and rising RCC pillars.",
    tag: "Foundation",
  },
  {
    range: [0.51, 0.75],
    phase: "Phase 03",
    title: "Brick & Form",
    body: "Precision masonry, centering decks, and slab casting.",
    tag: "Superstructure",
  },
  {
    range: [0.76, 1.0],
    phase: "Phase 04",
    title: "Modern Sanctuary",
    body: "Plaster finish, warm facades, and Griha Pravesh.",
    tag: "Completion",
  },
];

/* ─── Helpers ───────────────────────────────────────────────── */

/**
 * Draw an HTMLImageElement onto canvas with object-fit: cover semantics.
 */
function drawCover(ctx, img, W, H) {
  if (!img || !img.complete || img.naturalWidth === 0) return;
  const imgR    = img.naturalWidth / img.naturalHeight;
  const canvasR = W / H;
  let sx, sy, sw, sh;
  if (imgR > canvasR) {
    sh = img.naturalHeight;
    sw = sh * canvasR;
    sx = (img.naturalWidth - sw) / 2;
    sy = 0;
  } else {
    sw = img.naturalWidth;
    sh = sw / canvasR;
    sx = 0;
    sy = (img.naturalHeight - sh) / 2;
  }
  ctx.clearRect(0, 0, W, H);
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, H);
}

/**
 * Linear interpolation helper
 */
const lerp = (a, b, t) => a + (b - a) * t;

/* ─── Component ─────────────────────────────────────────────── */

export default function CanvasSequence() {
  const sectionRef    = useRef(null);
  const stickyRef     = useRef(null);
  const canvasRef     = useRef(null);
  const ctxRef        = useRef(null);
  const canvasSizeRef = useRef({ w: 0, h: 0 });

  // Stores only successfully-loaded Image objects (sparse array by index 0..N-1)
  const imagesRef     = useRef([]);
  // The ordered list of frame indices that actually loaded
  const loadedIndices = useRef([]);

  // Smooth current display position (float, 0 → loadedCount-1)
  const currentFrameF = useRef(0);
  // Target frame from scroll (float)
  const targetFrameF  = useRef(0);
  // rAF loop handle
  const rafHandle     = useRef(null);
  const isRunning     = useRef(false);

  const [loadProgress, setLoadProgress] = useState(0);
  const [ready, setReady]               = useState(false);
  const [activePhase, setActivePhase]   = useState(0);

  /* ── 1. Preload frames ───────────────────────────────────── */
  useEffect(() => {
    let settled = 0;
    const total = TOTAL_FRAMES_EXPECTED;
    const imgs  = new Array(total);

    const onSettle = (i, success) => {
      if (success) {
        imagesRef.current[i] = imgs[i];
        loadedIndices.current.push(i);
      }
      settled++;
      setLoadProgress(Math.round((settled / total) * 100));
      if (settled === total) {
        // Sort loaded indices ascending for deterministic lookup
        loadedIndices.current.sort((a, b) => a - b);
        setReady(loadedIndices.current.length > 0);
      }
    };

    for (let i = 0; i < total; i++) {
      const img = new Image();
      imgs[i] = img;
      const idx = i; // closure capture
      img.onload  = () => onSettle(idx, true);
      img.onerror = () => onSettle(idx, false);
      img.src = `${FRAME_BASE_PATH}${frameName(i + 1)}`;
    }

    return () => {
      for (let i = 0; i < total; i++) {
        if (imgs[i]) { imgs[i].onload = null; imgs[i].onerror = null; }
      }
    };
  }, []);

  /* ── 2. Canvas resize (DPR-aware) ───────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const applySize = () => {
      const dpr  = window.devicePixelRatio || 1;
      const cssW = sticky.clientWidth;
      const cssH = sticky.clientHeight;
      canvas.width  = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width  = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctxRef.current = ctx;
      canvasSizeRef.current = { w: cssW, h: cssH };
      // Redraw after resize
      paintFrame(Math.round(currentFrameF.current));
    };

    const ro = new ResizeObserver(applySize);
    ro.observe(sticky);
    applySize();
    return () => ro.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── 3. Render a specific loaded-frame index ─────────────── */
  const paintFrame = useCallback((idx) => {
    const ctx    = ctxRef.current;
    const { w, h } = canvasSizeRef.current;
    if (!ctx || w === 0 || h === 0) return;

    // idx is relative to loadedIndices array
    const li = loadedIndices.current;
    if (!li || li.length === 0) return;
    const clamped   = Math.max(0, Math.min(Math.round(idx), li.length - 1));
    const rawIndex  = li[clamped];
    const img       = imagesRef.current[rawIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;
    drawCover(ctx, img, w, h);
  }, []);

  /* ── 4. Smooth rAF render loop ───────────────────────────── */
  const startLoop = useCallback(() => {
    if (isRunning.current) return;
    isRunning.current = true;

    const tick = () => {
      // Lerp toward target (smooth ~8 frames @ 60fps ≈ 133ms ease)
      const SMOOTH = 0.12;
      currentFrameF.current = lerp(currentFrameF.current, targetFrameF.current, SMOOTH);

      paintFrame(Math.round(currentFrameF.current));

      // Keep running while not settled
      if (Math.abs(currentFrameF.current - targetFrameF.current) > 0.5) {
        rafHandle.current = requestAnimationFrame(tick);
      } else {
        // Snap to exact target then stop
        currentFrameF.current = targetFrameF.current;
        paintFrame(Math.round(currentFrameF.current));
        isRunning.current = false;
        rafHandle.current = null;
      }
    };

    rafHandle.current = requestAnimationFrame(tick);
  }, [paintFrame]);

  /* ── 5. GSAP ScrollTrigger ───────────────────────────────── */
  useEffect(() => {
    // Register here (client-only, no SSR mismatch)
    gsap.registerPlugin(ScrollTrigger);

    if (!ready) return;

    const section = sectionRef.current;
    if (!section) return;

    // Draw first frame immediately
    currentFrameF.current = 0;
    targetFrameF.current  = 0;
    paintFrame(0);

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: true,           // scrub:true = direct 1:1 mapping, no GSAP lag
      onUpdate: (self) => {
        const progress = Math.max(0, Math.min(1, self.progress));

        // Map progress → frame index in loadedIndices space
        const maxIdx = loadedIndices.current.length - 1;
        targetFrameF.current = progress * maxIdx;

        // Update active phase
        const pi = PHASES.findIndex(
          (p) => progress >= p.range[0] && progress <= p.range[1]
        );
        if (pi !== -1) setActivePhase(pi);

        // Kick off smooth loop
        startLoop();
      },
    });

    return () => {
      st.kill();
      if (rafHandle.current) cancelAnimationFrame(rafHandle.current);
      isRunning.current = false;
    };
  }, [ready, paintFrame, startLoop]);

  /* ── Helpers ─────────────────────────────────────────────── */
  const isPhaseActive = (i) => i === activePhase;

  return (
    <section
      ref={sectionRef}
      id="sequence"
      style={{ height: "400vh", position: "relative" }}
    >
      {/* ── Loading Overlay ─────────────────────────────────── */}
      {!ready && (
        <div
          role="status"
          aria-live="polite"
          aria-label={`Loading frames: ${loadProgress}%`}
          className="sticky top-0 h-[100dvh] flex flex-col items-center justify-center bg-arciform-bg z-20 gap-6"
        >
          {/* Thin progress bar */}
          <div
            style={{
              width: "240px",
              height: "1px",
              background: "rgba(17,17,17,0.1)",
              position: "relative",
              overflow: "hidden",
              borderRadius: "1px",
            }}
          >
            <div
              className="absolute inset-0 rounded-[1px] transition-all duration-150 bg-arciform-ink"
              style={{
                width: `${loadProgress}%`,
              }}
            />
          </div>
          <span
            className="font-sans text-[0.7rem] tracking-[0.12em] uppercase text-arciform-muted"
          >
            Preparing sequence — {loadProgress}%
          </span>
        </div>
      )}

      {/* ── Sticky Canvas Viewport ───────────────────────────── */}
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100dvh",
          overflow: "hidden",
          opacity: ready ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          aria-label="Construction sequence animation"
          style={{
            position: "absolute",
            inset: 0,
            display: "block",
          }}
        />

        {/* ── Gradient vignette top/bottom ─────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(251,251,253,0.25) 0%, transparent 15%, transparent 85%, rgba(251,251,253,0.25) 100%)",
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* ── Phase Caption Overlays ───────────────────────── */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {PHASES.map((phase, i) => (
            <div
              key={i}
              aria-hidden={!isPhaseActive(i)}
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1rem",
                right: "1rem",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                gap: "0.75rem",
                transition: "opacity 0.6s cubic-bezier(0.4,0,0.2,1), transform 0.6s cubic-bezier(0.4,0,0.2,1)",
                opacity: isPhaseActive(i) ? 1 : 0,
                transform: isPhaseActive(i) ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Caption text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem", maxWidth: "min(72vw, 520px)" }}>
                <span
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "clamp(0.5rem, 1.6vw, 0.7rem)",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {phase.phase} — {phase.tag}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontSize: "clamp(1rem, 2.8vw, 1.65rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.03em",
                    color: "#FBFBFD",
                    lineHeight: 1.15,
                    textShadow: "0 2px 28px rgba(0,0,0,0.45)",
                  }}
                >
                  {phase.title}:{" "}
                  <em
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: "0.78em",
                      lineHeight: 1.2,
                    }}
                  >
                    {phase.body}
                  </em>
                </p>
              </div>

              {/* Phase progress dots */}
              <div style={{ display: "flex", gap: "6px", alignItems: "center", flexShrink: 0 }}>
                {PHASES.map((_, di) => (
                  <span
                    key={di}
                    style={{
                      display: "block",
                      width: di === i ? "24px" : "6px",
                      height: "6px",
                      borderRadius: "3px",
                      background: di === i ? "#FBFBFD" : "rgba(255,255,255,0.25)",
                      transition: "all 0.45s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Right-edge phase track ───────────────────────── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "1.75rem",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 4,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          {PHASES.map((_, i) => (
            <div
              key={i}
              style={{
                width: "2px",
                height: activePhase === i ? "32px" : "14px",
                background: activePhase === i ? "#FBFBFD" : "rgba(255,255,255,0.2)",
                borderRadius: "2px",
                transition: "all 0.45s ease",
              }}
            />
          ))}
        </div>

        {/* ── Frame counter (dev aid, remove if needed) ───── */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "5rem",
            right: "2rem",
            zIndex: 4,
            fontFamily: "var(--font-inter), monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          {loadedIndices.current.length} frames loaded
        </div>
      </div>
    </section>
  );
}
