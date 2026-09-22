"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  { id: 1, code: "PRJ-01", title: "Matri Vidya Niketan Campus", category: "Institutional", location: "Bhilai, CG", year: "2021", area: "45,000 sq.ft", x: 28, y: 35, imageSrc: "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=800&q=80" },
  { id: 2, code: "PRJ-02", title: "Radha Krishna Sacred Pavilion", category: "Sacred", location: "Risali, CG", year: "2023", area: "12,500 sq.ft", x: 42, y: 58, imageSrc: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80" },
  { id: 3, code: "PRJ-03", title: "Shubh Labh Commercial Center", category: "Commercial", location: "Durg, CG", year: "2022", area: "28,000 sq.ft", x: 65, y: 24, imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" },
  { id: 4, code: "PRJ-04", title: "Risali Courtyard Residence", category: "Residential", location: "Risali, CG", year: "2024", area: "4,800 sq.ft", x: 50, y: 72, imageSrc: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" },
  { id: 5, code: "PRJ-05", title: "Zenith Tech Tower", category: "Commercial", location: "Raipur, CG", year: "2025", area: "62,000 sq.ft", x: 80, y: 45, imageSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" },
  { id: 6, code: "PRJ-06", title: "Civic Cultural Center", category: "Institutional", location: "Bhilai, CG", year: "2020", area: "31,000 sq.ft", x: 35, y: 15, imageSrc: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" },
  { id: 7, code: "PRJ-07", title: "Villas at the Green", category: "Residential", location: "Durg, CG", year: "2021", area: "12,000 sq.ft", x: 18, y: 65, imageSrc: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80" },
  { id: 8, code: "PRJ-08", title: "Lakeside Corporate Park", category: "Commercial", location: "Raipur, CG", year: "2022", area: "85,000 sq.ft", x: 88, y: 20, imageSrc: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" },
  { id: 9, code: "PRJ-09", title: "Sector 9 Modern Pavilion", category: "Residential", location: "Bhilai, CG", year: "2019", area: "6,500 sq.ft", x: 45, y: 88, imageSrc: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=800&q=80" },
  { id: 10, code: "PRJ-10", title: "Sunrise Luxury Apartments", category: "Residential", location: "Raipur, CG", year: "2023", area: "120,000 sq.ft", x: 75, y: 65, imageSrc: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80" },
];

const CATEGORIES = ["All", "Institutional", "Commercial", "Residential", "Sacred"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const filteredProjects = PROJECTS.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const [activeId, setActiveId] = useState(filteredProjects[0]?.id || 1);
  const [isHovered, setIsHovered] = useState(false);
  const hoverTimeoutRef = useRef(null);
  const activeItemRef = useRef(null);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  // Sync activeId when category changes
  useEffect(() => {
    if (filteredProjects.length > 0 && !filteredProjects.find(p => p.id === activeId)) {
      setActiveId(filteredProjects[0].id);
    }
  }, [activeCategory, filteredProjects, activeId]);

  // Auto-cycle logic
  useEffect(() => {
    if (isHovered || isTouchDevice || filteredProjects.length === 0) return;

    const interval = setInterval(() => {
      setActiveId(prevId => {
        const currentIndex = filteredProjects.findIndex(p => p.id === prevId);
        const nextIndex = (currentIndex + 1) % filteredProjects.length;
        return filteredProjects[nextIndex].id;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered, isTouchDevice, filteredProjects]);

  // Handle active item scroll on desktop
  useEffect(() => {
    if (!isTouchDevice && activeItemRef.current) {
      activeItemRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, [activeId, isTouchDevice]);

  const handleInteraction = (id) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsHovered(true);
    if (id) setActiveId(id);
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  return (
    <section ref={sectionRef} id="work" className="relative w-full py-14 px-4 sm:px-6 md:px-10 lg:px-16 lg:py-28 2xl:py-36 bg-arciform-bg overflow-hidden flex flex-col items-center border-t border-neutral-200">
      
      {/* Visible Giant 03 Background Index */}
      <motion.div style={{ y: yParallax }} className="absolute top-[20%] right-[80%] translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[7rem] sm:text-[11rem] md:text-[16rem] lg:text-[22rem] 2xl:text-[26rem] font-bold font-sans tracking-tighter text-arciform-ghost leading-none">
          03
        </span>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto flex flex-col"
      >
        
        {/* Header Area */}
        <div className="flex flex-col items-start mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-arciform-border" />
            <p className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400">
              03 // REGIONAL MASTER PLAN & FOOTPRINT
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arciform-ink tracking-tight max-w-4xl leading-[1.1]">
            Spatial distribution of built commissions across{" "}
            <span className="font-serif italic font-normal text-arciform-accent">
              Central India.
            </span>
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-8 w-full overflow-x-auto no-scrollbar pb-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 sm:px-4 sm:py-2 text-[10px] sm:text-xs font-mono uppercase tracking-wider rounded-sm transition-all duration-300 shrink-0 ${
                activeCategory === cat
                  ? "bg-arciform-ink text-white"
                  : "bg-arciform-card text-arciform-muted hover:text-arciform-ink border border-arciform-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Dual Navigation Layout */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[420px] sm:min-h-[500px] lg:min-h-[720px] 2xl:min-h-[820px] mt-4 lg:mt-10"
          onMouseEnter={() => !isTouchDevice && handleInteraction()}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Main CAD/Blueprint Canvas Container */}
          <div className="relative lg:col-span-9 h-[420px] sm:h-[500px] lg:h-full border border-arciform-border bg-white shadow-sm overflow-hidden group">
            {/* Subtle Drafting Grid Lines */}
            <div className="absolute inset-0 pointer-events-none opacity-60" style={{ backgroundImage: "linear-gradient(rgba(229, 229, 229, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 229, 229, 0.4) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
            
            {/* Topography SVG Curves */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="none" viewBox="0 0 1000 600">
              <path d="M-100,100 C 200,300 400,-100 700,200 S 1100,500 1200,100" stroke="#E5E5E5" strokeWidth="1" fill="none" />
              <path d="M-100,150 C 200,350 400,-50 700,250 S 1100,550 1200,150" stroke="#E5E5E5" strokeWidth="1" fill="none" />
              <path d="M-100,200 C 200,400 400,0 700,300 S 1100,600 1200,200" stroke="#E5E5E5" strokeWidth="1" fill="none" />
            </svg>

            {/* Rectangular Image Markers */}
            <AnimatePresence>
              {PROJECTS.map((project) => {
                const isMatch = activeCategory === "All" || project.category === activeCategory;
                const isActive = project.id === activeId;
                
                let targetOpacity = 0;
                if (isMatch) {
                  targetOpacity = isActive ? 1 : 0.7;
                }
                
                return (
                  <motion.div
                    layout
                    key={project.id}
                    className={`absolute flex flex-col bg-white p-1 cursor-pointer pointer-events-auto ${isActive ? 'ring-2 ring-[#C06C47] shadow-2xl z-40' : 'border border-neutral-300 shadow-sm z-10'}`}
                    initial={false}
                    animate={{
                      opacity: targetOpacity,
                      width: isActive && !isTouchDevice ? 256 : (isTouchDevice ? 44 : 80),
                      height: isTouchDevice && !isActive ? 44 : 'auto',
                      pointerEvents: isMatch ? "auto" : "none"
                    }}
                    transition={{
                      layout: { type: "spring", stiffness: 260, damping: 22 },
                      opacity: { duration: 0.3 }
                    }}
                    style={{
                      left: `${project.x}%`,
                      top: `${project.y}%`,
                      x: "-50%",
                      y: "-50%",
                    }}
                    onClick={() => handleInteraction(project.id)}
                    onMouseEnter={() => !isTouchDevice && handleInteraction(project.id)}
                  >
                    {!isTouchDevice && (
                      <div className="absolute top-0 left-0 -mt-2 -ml-2 z-30 font-mono text-[9px] bg-neutral-900 text-white px-1 py-0.5 shadow-sm">
                        {project.code}
                      </div>
                    )}

                    <motion.div layout="position" className={`relative w-full h-full overflow-hidden ${isActive && !isTouchDevice ? 'aspect-auto bg-arciform-border' : (isTouchDevice ? 'bg-[#C06C47]' : 'aspect-[16/10] bg-arciform-border')}`}>
                       {!isTouchDevice ? (
                        <img 
                          src={project.imageSrc} 
                          alt={project.title} 
                          className={`w-full h-full object-cover transition-all duration-500 ${isActive ? 'grayscale-0' : 'grayscale mix-blend-multiply'}`} 
                        />
                       ) : (
                         <div className="flex items-center justify-center w-full h-full text-white text-[10px] font-mono">
                           {isActive ? project.id : '•'}
                         </div>
                       )}
                    </motion.div>
                    
                    <AnimatePresence>
                      {isActive && !isTouchDevice && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }} 
                          animate={{ opacity: 1, height: 'auto' }} 
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="flex flex-col mt-3 px-2 pb-2 overflow-hidden bg-white"
                        >
                          <h4 className="font-sans font-bold text-sm text-neutral-900 leading-tight">{project.title}</h4>
                          <div className="font-mono text-[10px] text-neutral-500 mt-1 whitespace-nowrap">{project.category} • {project.location}</div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dual Navigation: Sidebar on Desktop, Snap-Scroll on Mobile */}
          <div className="w-full lg:col-span-3 flex flex-col lg:border border-arciform-border lg:bg-white lg:shadow-sm overflow-hidden h-auto lg:h-full lg:max-h-[720px] 2xl:max-h-[820px]">
            <div className="hidden lg:flex p-4 border-b border-arciform-border bg-arciform-bg font-mono text-[10px] uppercase tracking-widest text-neutral-500 justify-between items-center">
              <span>Project Index</span>
              <span>{filteredProjects.length} Entries</span>
            </div>
            
            {/* Scroll Container */}
            <div className="flex-1 flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-hidden overflow-y-hidden lg:overflow-y-auto snap-x snap-mandatory lg:snap-none scrollbar-thin scrollbar-thumb-arciform-border scrollbar-track-transparent gap-4 lg:gap-0 pb-4 lg:pb-0 px-1 lg:px-0 no-scrollbar">
              <AnimatePresence>
                {filteredProjects.map((p, i) => {
                  const isActive = activeId === p.id;
                  
                  return (
                    <motion.div
                      key={p.id}
                      ref={isActive ? activeItemRef : null}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => handleInteraction(p.id)}
                      onMouseEnter={() => !isTouchDevice && handleInteraction(p.id)}
                      className={`flex flex-col lg:flex-row gap-3 p-4 border border-arciform-border lg:border-0 lg:border-b cursor-pointer transition-colors shrink-0 w-[260px] sm:w-[300px] lg:w-auto snap-center bg-white ${
                        isActive 
                          ? 'bg-[#C06C47]/10 lg:border-l-2 lg:border-l-[#C06C47]' 
                          : 'hover:bg-black/[0.015] lg:border-l-2 lg:border-l-transparent'
                      }`}
                    >
                      <div className="flex justify-between items-start lg:hidden mb-2">
                        <div className={`font-mono text-[9px] px-1.5 py-0.5 ${isActive ? 'bg-[#C06C47] text-white' : 'bg-neutral-900 text-white'}`}>
                          {p.code}
                        </div>
                      </div>

                      <div className={`hidden lg:block font-mono text-[9px] px-1 py-0.5 transition-colors self-start ${isActive ? 'bg-[#C06C47] text-white' : 'bg-neutral-900 text-white'}`}>
                        {p.code}
                      </div>

                      <div className="flex flex-col">
                        <span className="font-sans font-bold text-sm sm:text-base text-neutral-900">
                          {p.title}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-500 mt-1 lg:mt-0.5">
                          {p.category} • {p.location}
                        </span>
                        
                        {/* Mobile Image Thumbnail */}
                        <div className="lg:hidden w-full aspect-[16/9] mt-3 bg-arciform-border overflow-hidden">
                           <img src={p.imageSrc} alt={p.title} className="w-full h-full object-cover" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
