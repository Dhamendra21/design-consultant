"use client";

import React from "react";

const NAV_LINKS = [
  { label: "Selected Works", href: "#works" },
  { label: "Master Plan Map", href: "#map" },
  { label: "Studio & Practice", href: "#studio" },
  { label: "Practice Disciplines", href: "#services" },
  { label: "Statutory & Sanctions", href: "#approvals" },
  { label: "Project Inquiry", href: "#contact" },
];

const DISCIPLINES = [
  "Architectural Design & Planning",
  "Vastu Shastra Consultation",
  "Structural Engineering Supervision",
  "Municipal & Nagar Nigam Clearances",
  "Land Mapping & Cadastre Verification",
  "Banking Valuation & Project Finance",
  "Interior Architecture & Millwork",
  "Smart Automation & Telemetry",
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#121212] text-neutral-300 border-t border-neutral-800 overflow-hidden pt-24 pb-12 px-6 md:px-12 flex flex-col items-center">
      {/* Centered Background Architectural Grid Guides */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-6 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto border-x border-neutral-900/60 lg:px-16">
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
      </div>

      {/* Centered Watermark Index */}
      <div className="absolute right-10 select-none pointer-events-none z-0">
        <span className="text-[18rem] md:text-[26rem] font-bold font-sans tracking-tighter text-neutral-900/60 leading-none">
          END
        </span>
      </div>

      {/* Main Centered Wrapper */}
      <div className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. CENTERED EDITORIAL CALL-TO-ACTION                                      */}
        {/* ========================================================================= */}
        <div className="w-full border-b border-neutral-800 pb-20 mb-16 flex flex-col items-center ">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-[#C06C47]" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C06C47]">
              COMMISSION AN ENGAGEMENT
            </p>
            <span className="h-[1px] w-8 bg-[#C06C47]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-sans font-bold text-white tracking-tight leading-[1.1] max-w-4xl mb-8 text-center">
            Let’s structure your next{" "}
            <span className="font-serif italic font-normal text-[#C06C47]">
              architectural commission.
            </span>
          </h2>

          <a
            href="mailto:designconsultant545@gmail.com"
            className="group inline-flex items-center justify-center gap-6 border border-neutral-700 bg-neutral-900/80 px-10 py-5 text-white font-mono text-xs uppercase tracking-widest hover:border-[#C06C47] hover:bg-[#C06C47] transition-all duration-300"
          >
            <span>Initiate Consultation</span>
            <span className="text-lg group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL COLOPHON MATRIX (Balanced 4-Column Grid)                  */}
        {/* ========================================================================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-20 border-b border-neutral-800">
          
          {/* Brand & Atelier Coordinates */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-7 h-7 bg-white flex items-center justify-center font-mono font-bold text-xs text-black">
                  DC
                </div>
                <span className="font-sans font-bold text-lg tracking-tight text-white">
                  DESIGNS CONSULTANT
                </span>
              </div>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
                A multidisciplinary civil design, structural engineering, and spatial planning
                consultancy delivering commercial, sacred, and residential commissions across Central India.
              </p>
              <div className="font-mono text-[11px] text-neutral-500 space-y-1">
                <p>COORDINATES // 21.1873° N, 81.3090° E</p>
                <p>REGIONAL REGISTRY // BHILAI • DURG • RAIPUR</p>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800">
              <span className="font-mono text-[10px] uppercase text-[#C06C47] tracking-widest block mb-1">
                PRACTICE STATUS
              </span>
              <span className="text-xs text-neutral-300">
                Accepting new master planning & execution briefs.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-6">
              [INDEX]
            </h4>
            <ul className="space-y-3 font-mono text-xs">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-white hover:text-[#C06C47] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Disciplines */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-6">
              [DISCIPLINES]
            </h4>
            <ul className="space-y-2.5 font-mono text-[11px] text-neutral-400">
              {DISCIPLINES.map((discipline) => (
                <li key={discipline} className="hover:text-white transition-colors truncate">
                  • {discipline}
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contacts & Registry */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h4 className="font-mono text-[11px] uppercase tracking-widest text-neutral-400 mb-6">
                [STUDIO ATELIER]
              </h4>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-4">
                Near Durga Mata Mandir, Krishna Talkies Road,
                <br />
                Risali, Bhilai, Chhattisgarh — 490006
              </p>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div>
                <span className="text-neutral-500 block text-[10px]">DIRECT LINES</span>
                <div className="flex flex-col gap-0.5 mt-0.5">
                  <a href="tel:+919111466640" className="text-neutral-300 hover:text-[#C06C47] transition-colors">
                    +91 91114 66640
                  </a>
                  <a href="tel:+919111466641" className="text-neutral-300 hover:text-[#C06C47] transition-colors">
                    +91 91114 66641
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-neutral-500 block text-[10px]">ELECTRONIC DISPATCH</span>
                <a
                  href="mailto:designconsultant545@gmail.com"
                  className="text-neutral-300 hover:text-[#C06C47] transition-colors break-all"
                >
                  designconsultant545@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex items-center gap-4 font-mono text-[10px] uppercase text-neutral-400">
              <a href="#" className="hover:text-[#C06C47] transition-colors">LinkedIn</a>
              <span>/</span>
              <a href="#" className="hover:text-[#C06C47] transition-colors">Instagram</a>
              <span>/</span>
              <a href="#" className="hover:text-[#C06C47] transition-colors">WhatsApp</a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. CENTERED COLOPHON BOTTOM BAR                                           */}
        {/* ========================================================================= */}
        <div className="w-full pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-neutral-500 uppercase tracking-widest text-center md:text-left">
          <p>© {new Date().getFullYear()} DESIGNS CONSULTANT. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span>VASTU • STRUCTURAL • CIVIC SANCTIONS</span>
            <span>CENTRAL INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}