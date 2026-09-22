"use client";

import React from "react";

const STATS = [
  {
    value: "1,000+",
    label: "EXECUTED COMMISSIONS",
    detail: "Master plans, sacred pavilions & commercial structures",
  },
  {
    value: "25+",
    label: "YEARS OF PRACTICE",
    detail: "Continuous engineering leadership in Central India",
  },
  {
    value: "100+",
    label: "DISCIPLINARY WORKFORCE",
    detail: "Engineers, draftsmen, site managers & Vastu scholars",
  },
  {
    value: "100%",
    label: "STATUTORY COMPLIANCE",
    detail: "Nagar Nigam approvals & banking sanctions achieved",
  },
];

const OFFERINGS = [
  {
    code: "01",
    title: "Spatial Planning & Blueprints",
    summary:
      "Site zoning, contextual massing, and municipal-ready architectural construction drawings.",
    metric: "PRECISION ZONING",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80",
  },
  {
    code: "02",
    title: "Interior Architecture & Millwork",
    summary:
      "Custom joinery, lighting schematics, and acoustic material palettes tailored for residences and offices.",
    metric: "CUSTOM JOINERY",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
  },
  {
    code: "03",
    title: "Landscape & Micro-Ecology",
    summary:
      "Courtyard biotopes, endemic planting palettes, hardscape detailing, and rainwater harvesting integration.",
    metric: "BIOCLIMATIC HARMONY",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
  },
  {
    code: "04",
    title: "Structural Engineering & Build",
    summary:
      "RCC foundation design, steel detailing, seismic load verification, and strict on-site supervision.",
    metric: "CIVIL EXECUTION",
    image:
      "https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=700&q=80",
  },
  {
    code: "05",
    title: "Adaptive Reuse & Retrofits",
    summary:
      "Structural rehabilitation, facade modernization, and energy retrofitting of aging structures.",
    metric: "STRUCTURAL AUDIT",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
  },
  {
    code: "06",
    title: "Technical Site Consultation",
    summary:
      "Initial feasibility appraisal, Vastu plot orientations, cadastral checks, and municipal viability audits.",
    metric: "PRE-BUILD AUDIT",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="relative w-full bg-[#FAFAFA] text-neutral-900 border-t border-neutral-200 py-24 px-6 md:px-12 flex flex-col items-center overflow-hidden">
      {/* Structural Grid Guides */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 border-x border-neutral-100">
        <div className="border-r border-neutral-100 h-full" />
        <div className="border-r border-neutral-100 h-full" />
        <div className="border-r border-neutral-100 h-full" />
        <div className="border-r border-neutral-100 h-full" />
        <div className="border-r border-neutral-100 h-full" />
      </div>

      {/* Centered Watermark Numeral */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[20rem] md:text-[28rem] font-bold font-sans tracking-tighter text-neutral-100/80 leading-none">
          06
        </span>
      </div>

      {/* Main Centered Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. STATS TICKER LEDGER (Replacing the brown bar)                          */}
        {/* ========================================================================= */}
        <div className="w-full border-y border-neutral-200 bg-white/70 backdrop-blur-sm grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200 mb-24 shadow-sm">
          {STATS.map((stat, i) => (
            <div key={i} className="p-6 md:p-8 flex flex-col justify-between">
              <span className="font-mono text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
                {stat.value}
              </span>
              <div className="mt-4 pt-3 border-t border-neutral-100">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#C06C47] font-semibold">
                  {stat.label}
                </p>
                <p className="text-xs text-neutral-500 font-light mt-1 leading-snug">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* 2. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 bg-neutral-300" />
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
            06 // Capabilities & Delivery
          </p>
          <span className="h-[1px] w-8 bg-neutral-300" />
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-sans font-bold text-center tracking-tight text-neutral-900 max-w-4xl leading-[1.1] mb-6">
          Comprehensive project execution, from{" "}
          <span className="font-serif italic font-normal text-[#C06C47]">
            cadastre to turnkey build.
          </span>
        </h2>

        <p className="text-sm md:text-base text-neutral-600 font-light text-center max-w-2xl leading-relaxed mb-16">
          Every commission is approached as a synthesis of structural rigor,
          environmental stewardship, and municipal compliance.
        </p>

        {/* ========================================================================= */}
        {/* 3. CAPABILITIES GRID (Replacing the cartoon icon cards)                   */}
        {/* ========================================================================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OFFERINGS.map((item) => (
            <div
              key={item.code}
              className="group relative bg-white border border-neutral-200 p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#C06C47] hover:shadow-xl"
            >
              {/* Corner Drafting Marks */}
              <span className="absolute top-2 left-2 font-mono text-[10px] text-neutral-300 select-none group-hover:text-[#C06C47]">+</span>
              <span className="absolute top-2 right-2 font-mono text-[10px] text-neutral-300 select-none group-hover:text-[#C06C47]">+</span>

              <div>
                {/* Header Row: Code & Metric */}
                <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mb-4 px-0.5">
                  <span className="group-hover:text-[#C06C47] font-semibold">[{item.code}]</span>
                  <span className="tracking-widest uppercase">{item.metric}</span>
                </div>

                {/* Aspect 16:9 Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 mb-5 border border-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-[1.05] transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/10 opacity-50 group-hover:opacity-0 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 group-hover:text-[#C06C47] transition-colors mb-2">
                  {item.title}
                </h3>

                {/* Scope Summary */}
                <p className="text-xs text-neutral-600 font-light leading-relaxed mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between font-mono text-[10px] text-neutral-400 uppercase tracking-wider">
                <span>Scope of Work</span>
                <span className="text-[#C06C47] group-hover:translate-x-1 transition-transform inline-block">
                  Detail →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}