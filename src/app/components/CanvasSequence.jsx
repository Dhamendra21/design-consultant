"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, AnimatePresence } from "framer-motion";

const ZONES = [
  {
    id: "zone-1",
    tag: "ZONE 01 // ENTRY THRESHOLD & COURTYARD",
    index: "[INT.01]",
    title: "Linear Courtyard & Bioclimatic Light Well",
    body: "A transitional open-to-sky breezeway designed to filter harsh tropical sunlight into soft indirect luminescence while generating passive convective airflow across living areas.",
    badges: ["Passive Cooling", "Endemic Planting Palette", "Natural Ventilation"],
  },
  {
    id: "zone-2",
    tag: "ZONE 02 // LIVING & GATHERING SANCTUARY",
    index: "[INT.02]",
    title: "Monolithic Volumes & Tactile Finishes",
    body: "Double-height spatial enclosure framed by seamless mineral lime plaster, acoustic fluted timber joinery, and concealed ambient cove illumination that shifts with the daylight.",
    badges: ["Raw Lime Wash", "Custom Millwork", "Acoustic Attenuation"],
  },
  {
    id: "zone-3",
    tag: "ZONE 03 // PRIVATE SUITE & INTEGRATED COMFORT",
    index: "[INT.03]",
    title: "Quiet Retreat with Concealed Automation",
    body: "Minimalist private wing featuring hidden environmental telemetry, automated solar shading actuators, and integrated circadian lighting for restorative living.",
    badges: ["Circadian Tuning", "Concealed Telemetry", "Thermal Mass Buffering"],
  },
];

const TOTAL_FRAMES_EXPECTED = 819;
const FRAME_BASE_PATH = "/upscaled-video_frames/";
const frameName = (n) => `frame_${String(n).padStart(4, "0")}.webp`;

function drawCover(ctx, img, W, H) {
  if (!img || !img.complete || img.naturalWidth === 0) return;
  const imgR = img.naturalWidth / img.naturalHeight;
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

export default function CanvasSequence() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [activeZone, setActiveZone] = useState(0);

  // Canvas refs
  const imagesRef = useRef([]);
  const loadedIndices = useRef([]);
  const canvasSizeRef = useRef({ w: 0, h: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let settled = 0;
    const total = TOTAL_FRAMES_EXPECTED;
    const imgs = new Array(total);

    const onSettle = (i, success) => {
      if (success) {
        imagesRef.current[i] = imgs[i];
        loadedIndices.current.push(i);
      }
      settled++;
      if (settled === total) {
        loadedIndices.current.sort((a, b) => a - b);
        setReady(loadedIndices.current.length > 0);
      }
    };

    for (let i = 0; i < total; i++) {
      const img = new Image();
      imgs[i] = img;
      const idx = i;
      img.onload = () => onSettle(idx, true);
      img.onerror = () => onSettle(idx, false);
      img.src = `${FRAME_BASE_PATH}${frameName(i + 1)}`;
    }
  }, []);

  const paintFrame = useCallback((frameIdx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imagesRef.current[loadedIndices.current[frameIdx]];
    if (!img) return;
    const { w, h } = canvasSizeRef.current;
    drawCover(ctx, img, w, h);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const applySize = () => {
      const dpr = window.devicePixelRatio || 1;
      const cssW = canvas.parentElement.clientWidth;
      const cssH = canvas.parentElement.clientHeight;
      canvas.width = Math.round(cssW * dpr);
      canvas.height = Math.round(cssH * dpr);
      canvas.style.width = `${cssW}px`;
      canvas.style.height = `${cssH}px`;
      const ctx = canvas.getContext("2d");
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      canvasSizeRef.current = { w: cssW, h: cssH };
      if (ready) paintFrame(0);
    };
    const ro = new ResizeObserver(applySize);
    ro.observe(canvas.parentElement);
    return () => ro.disconnect();
  }, [ready, paintFrame]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.33) {
      setActiveZone(0);
    } else if (latest >= 0.33 && latest < 0.66) {
      setActiveZone(1);
    } else {
      setActiveZone(2);
    }

    if (ready && loadedIndices.current.length > 0) {
      const maxIdx = loadedIndices.current.length - 1;
      const targetFrame = Math.round(latest * maxIdx);
      paintFrame(targetFrame);
    }
  });

  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const zone = ZONES[activeZone];

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[300vh] bg-[#121212]"
    >
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        
        {/* Canvas Background */}
        <div className="absolute inset-0 z-0">
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/15 to-black/40 pointer-events-none" />
        </div>

        {/* Top Bar Telemetry Strip */}
        <header className="relative z-20 flex justify-between items-start p-6 md:p-8 w-full pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md border border-neutral-300 px-4 py-2 text-xs font-mono font-semibold flex items-center gap-3 shadow-md pointer-events-auto">
            <span className="w-2 h-2 rounded-full bg-[#C06C47] animate-pulse" />
            SPATIAL TOUR // PRIVATE RESIDENCE INTERIORS
          </div>
          <div className="hidden sm:block text-white/90 text-xs font-mono font-medium tracking-widest text-right max-w-xs uppercase">
            BHILAI • RISALI REGION • 4,850 SQ. FT. • EAST FACING VASTU
          </div>
        </header>

        {/* HUD Card for Active Zone */}
        <AnimatePresence mode="wait">
          <motion.div
            key={zone.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="absolute bottom-24 md:bottom-28 left-6 md:left-12 z-20 max-w-xl w-[calc(100%-3rem)] sm:w-auto p-0 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-3 drop-shadow-md">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C06C47] font-semibold">
                {zone.tag}
              </span>
              <span className="font-mono text-[10px] text-white/60 font-medium">
                {zone.index}
              </span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-white tracking-tight leading-snug mb-3 drop-shadow-lg">
              {zone.title}
            </h3>
            
            <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6 drop-shadow-md">
              {zone.body}
            </p>
            
            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/20 font-mono text-xs uppercase text-white/90">
              {zone.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="bg-black/20 backdrop-blur-sm border border-white/20 px-3 py-1 font-medium shadow-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Bar Telemetry Strip & Scroll Progress */}
        <footer className="relative z-20 w-full px-6 md:px-12 pb-6 flex flex-col gap-3 pointer-events-none">
          <div className="flex justify-between items-end w-full text-[10px] font-mono tracking-widest text-white/80 uppercase">
            <span>TOUR PROGRESSION</span>
            <span className="animate-bounce">SCROLL TO TRAVERSE RESIDENCE ↓</span>
          </div>
          <div className="w-full h-[2px] bg-white/20 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-[#C06C47]"
              style={{ width: progressBarWidth }}
            />
          </div>
        </footer>
      </div>
    </section>
  );
}
