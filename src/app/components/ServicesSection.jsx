"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const SERVICES = [
  {
    code: "01",
    title: "Architectural Design & Planning",
    discipline: "SPATIAL ARCHITECTURE",
    description:
      "Conceptual zoning, spatial layouts, exterior elevations, and working blueprints tailored to site topography and urban micro-climates.",
    deliverables: ["2D Master Plans", "3D Visualization", "Facade Engineering"],
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "02",
    title: "Vastu Shastra Consultation",
    discipline: "ORIENTATIONAL HARMONY",
    description:
      "Vastu-compliant directional alignment and energetic balance for residential, commercial, and sacred institutional master layouts.",
    deliverables: ["Energy Flow Analysis", "Zone Correction", "Plot Orientation"],
    image:
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "03",
    title: "Structural Engineering & Supervision",
    discipline: "CIVIL & STRUCTURAL",
    description:
      "On-site civil quality monitoring, RCC load calculation, steel schedules, and foundation structural integrity audits.",
    deliverables: ["Foundation Design", "Steel Scheduling", "Site Inspections"],
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "04",
    title: "Municipal & Nagar Nigam Approvals",
    discipline: "REGULATORY COMPLIANCE",
    description:
      "End-to-end statutory documentation, building layout sanctions, master plan clearance, and official local authority approvals.",
    deliverables: ["Building Sanctions", "NOC Clearance", "Zoning Approvals"],
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "05",
    title: "Land Acquisition & Real Estate Advisory",
    discipline: "LAND CADASTRE",
    description:
      "Technical due diligence, land mapping, market valuation, and legal plot verification for private and commercial ventures.",
    deliverables: ["Title Checks", "Plot Demarcation", "Feasibility Studies"],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "06",
    title: "Banking & Project Finance Liaison",
    discipline: "FINANCIAL DOCUMENTATION",
    description:
      "Preparation of detailed estimation reports, BOQ schedules, and technical valuation certificates for leading financial institutions.",
    deliverables: ["Valuation Reports", "BOQ Estimates", "Institutional Liaison"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "07",
    title: "Interior & Spatial Architecture",
    discipline: "INTERIOR ENVIRONMENTS",
    description:
      "Tailored interior layouts, acoustic optimization, custom millwork joinery, lighting schematics, and premium material sourcing.",
    deliverables: ["Joinery Details", "Lighting Schematics", "Material Specs"],
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "08",
    title: "Utility & Electricity Meter Clearances",
    discipline: "INFRASTRUCTURE",
    description:
      "Substation load planning, high-tension clearance verification, transformer sanctioning, and grid documentation.",
    deliverables: ["Load Sanctions", "Transformer Clearances", "Grid Inspection"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
  },
  {
    code: "09",
    title: "Smart Building & IoT Integration",
    discipline: "INTELLIGENT SYSTEMS",
    description:
      "Embedded smart automation, telemetry, remote motor control, and integrated energy efficiency hardware for connected spaces.",
    deliverables: ["Hardware Integration", "Telemetry Modules", "Automated Controls"],
    image:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
  },
];

export default function ParallaxServicesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none) and (pointer: coarse)").matches);
  }, []);

  // Parallax scroll observation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section
      ref={containerRef}
      id="services"
      className="relative w-full bg-[#FAFAFA] text-neutral-900 border-t border-neutral-200 overflow-hidden py-14 px-4 sm:px-6 md:px-10 lg:px-16 lg:py-28 2xl:py-36 flex flex-col items-center"
    >
      {/* Structural Grid Guides */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 lg:grid-cols-6 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto border-x border-neutral-100 lg:px-16">
        <div className="border-r border-neutral-100 h-full hidden lg:block" />
        <div className="border-r border-neutral-100 h-full hidden lg:block" />
        <div className="border-r border-neutral-100 h-full hidden lg:block" />
        <div className="border-r border-neutral-100 h-full hidden lg:block" />
        <div className="border-r border-neutral-100 h-full hidden lg:block" />
      </div>

      {/* Centered Giant 05 Background Index */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[7rem] sm:text-[11rem] md:text-[16rem] lg:text-[22rem] 2xl:text-[26rem] font-bold font-sans tracking-tighter text-neutral-100/75 leading-none">
          05
        </span>
      </div>

      {/* Main Centered Content Container */}
      <div className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto flex flex-col items-center">
        
        {/* Overline Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-neutral-300" />
          <p className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.25em] text-neutral-400">
            05 // Practice Disciplines & Scope
          </p>
          <span className="h-[1px] w-8 bg-neutral-300" />
        </div>

        {/* Centered Editorial Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold tracking-tight text-neutral-900 max-w-4xl leading-[1.1] mb-6 text-center">
          Full-lifecycle architecture, engineering, and{" "}
          <span className="font-serif italic font-normal text-[#C06C47]">
            municipal execution.
          </span>
        </h2>

        {/* Centered Subtext */}
        <p className="text-xs sm:text-sm md:text-base pb-10 text-neutral-600 font-light max-w-xl lg:max-w-2xl leading-relaxed mb-10 lg:mb-20 text-center">
          From technical land cadastre to structural commissioning and automated living,
          each discipline operates under rigorous architectural oversight.
        </p>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full ">
          
          {/* Left Column: Scrolling Service Rows */}
          <div className="lg:col-span-7 flex flex-col space-y-6 lg:space-y-12 lg:mt-[80px]">
            {SERVICES.map((service, index) => (
              <ServiceRow
                key={service.code}
                service={service}
                index={index}
                isActive={activeIdx === index}
                onInView={() => setActiveIdx(index)}
                isTouchDevice={isTouchDevice}
              />
            ))}
          </div>

          {/* Right Column: Sticky Architectural Parallax Viewport (Hidden on Mobile) */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            <div className="relative border border-neutral-300 bg-white p-3 shadow-xl">
              {/* Corner Drafting Marks */}
              <span className="absolute -top-1.5 -left-1.5 font-mono text-[11px] text-neutral-400 select-none">+</span>
              <span className="absolute -top-1.5 -right-1.5 font-mono text-[11px] text-neutral-400 select-none">+</span>
              <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[11px] text-neutral-400 select-none">+</span>
              <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[11px] text-neutral-400 select-none">+</span>

              {/* Viewport Frame */}
              <div className="relative aspect-[4/5] min-h-[580px] w-full overflow-hidden bg-neutral-900">
                <motion.div
                  style={{ scale: imageScale, y: imageY }}
                  className="w-full h-full relative"
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={SERVICES[activeIdx].code}
                      src={SERVICES[activeIdx].image}
                      alt={SERVICES[activeIdx].title}
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="w-full h-full object-cover grayscale contrast-[1.08]"
                    />
                  </AnimatePresence>
                </motion.div>

                {/* Overlaid Technical Badge */}
                <div className="absolute top-3 left-3 bg-neutral-900/90 text-white font-mono text-[10px] px-2.5 py-1 tracking-widest uppercase">
                  DISCIPLINE // [{SERVICES[activeIdx].code}]
                </div>

                {/* Position Marker */}
                <div className="absolute bottom-3 right-3 bg-white/95 text-neutral-900 font-mono text-[10px] px-2 py-0.5 tracking-wider">
                  0{activeIdx + 1} / 09
                </div>
              </div>

              {/* Technical Caption Strip */}
              <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-neutral-500 uppercase tracking-wider px-1">
                <span className="truncate pr-4">{SERVICES[activeIdx].title}</span>
                <span className="text-[#C06C47] font-semibold shrink-0">ACTIVE DISCIPLINE</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Individual Service Row
function ServiceRow({ service, isActive, onInView, isTouchDevice }) {
  const rowRef = useRef(null);

  useEffect(() => {
    if (isTouchDevice) return; // Disable scroll observation on touch to prefer manual tap
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onInView();
        }
      },
      {
        rootMargin: "-25% 0px -35% 0px",
        threshold: 0.1,
      }
    );

    if (rowRef.current) {
      observer.observe(rowRef.current);
    }

    return () => observer.disconnect();
  }, [onInView, isTouchDevice]);

  return (
    <div
      ref={rowRef}
      onMouseEnter={() => !isTouchDevice && onInView()}
      onClick={() => isTouchDevice && onInView()}
      className={`border-b border-neutral-200 pb-8 lg:pb-10 pt-2 transition-all duration-500 cursor-pointer lg:cursor-default ${
        isActive ? "opacity-100" : "opacity-40 lg:opacity-35"
      }`}
    >
      {/* Top Meta Line */}
      <div className="flex items-center justify-between mb-3 font-mono text-[10px] sm:text-xs">
        <span className={isActive ? "text-[#C06C47] font-bold" : "text-neutral-400"}>
          [{service.code}]
        </span>
        <span className="text-[9px] sm:text-[10px] tracking-wider uppercase text-neutral-400">
          {service.discipline}
        </span>
      </div>

      {/* Mobile Inline Accordion Image (Visible on touch when active) */}
      <AnimatePresence>
        {isTouchDevice && isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full overflow-hidden lg:hidden"
          >
            <div className="w-full aspect-[16/9] mb-4 bg-neutral-900 overflow-hidden relative">
              <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale mix-blend-multiply" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Title */}
      <h3
        className={`text-xl sm:text-2xl md:text-3xl font-sans font-bold tracking-tight mb-3 transition-colors duration-300 ${
          isActive ? "text-[#C06C47]" : "text-neutral-900"
        }`}
      >
        {service.title}
      </h3>

      {/* Scope Description */}
      <AnimatePresence>
        {(isActive || !isTouchDevice) && (
          <motion.p 
            initial={isTouchDevice ? { height: 0, opacity: 0 } : false}
            animate={isTouchDevice ? { height: "auto", opacity: 1 } : false}
            exit={isTouchDevice ? { height: 0, opacity: 0 } : false}
            className="text-xs sm:text-sm md:text-base text-neutral-600 font-light leading-relaxed mb-5"
          >
            {service.description}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Deliverable Tags */}
      <div className="flex flex-wrap gap-2">
        {service.deliverables.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-neutral-600 bg-neutral-100 border border-neutral-200 px-2 sm:px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}