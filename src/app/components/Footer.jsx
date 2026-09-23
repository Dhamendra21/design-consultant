"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MaskReveal from "./MaskReveal";
import MagneticButton from "./MagneticButton";

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
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // Pre-filled WhatsApp inquiry message formatted for direct chat
  const whatsappNumber = "919111466641";
  const whatsappMessage = encodeURIComponent(
    "Hello Designs Consultant team, I would like to initiate an architectural consultation regarding my project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-[#121212] text-neutral-300 border-t border-neutral-800 overflow-hidden flex flex-col items-center"
      style={{
        paddingTop: "6rem",
        paddingBottom: "3rem",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      {/* Centered Background Architectural Grid Guides */}
      <div
        className="absolute inset-0 pointer-events-none grid grid-cols-6 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto border-x border-neutral-900/60"
        style={{
          paddingLeft: "clamp(1rem, 3vw, 4rem)",
          paddingRight: "clamp(1rem, 3vw, 4rem)",
        }}
      >
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
        <div className="border-r border-neutral-900/60 h-full" />
      </div>

      {/* Centered Watermark Index */}
      <motion.div
        className="absolute select-none pointer-events-none z-0"
        style={{ right: "2.5rem", y: watermarkY }}
      >
        <span className="text-[18rem] md:text-[26rem] font-bold font-sans tracking-tighter text-neutral-900/60 leading-none">
          END
        </span>
      </motion.div>

      {/* Main Centered Wrapper */}
      <div className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto flex flex-col items-center">
        
        {/* ========================================================================= */}
        {/* 1. CENTERED EDITORIAL CALL-TO-ACTION                                      */}
        {/* ========================================================================= */}
        <div
          className="w-full border-b border-neutral-800 flex flex-col items-center text-center"
          style={{
            paddingBottom: "5rem",
            marginBottom: "4rem",
          }}
        >
          <div
            className="flex items-center"
            style={{ gap: "0.75rem", marginBottom: "1.5rem" }}
          >
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="inline-block h-[1px] w-8 bg-[#C06C47]"
            />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C06C47]">
              COMMISSION AN ENGAGEMENT
            </p>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              style={{ transformOrigin: "left" }}
              className="inline-block h-[1px] w-8 bg-[#C06C47]"
            />
          </div>

          <MaskReveal>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl font-sans font-bold text-white tracking-tight leading-[1.1] max-w-4xl text-center"
              style={{ marginBottom: "2.25rem" }}
            >
              Let's structure your next{" "}
              <span className="font-serif italic font-normal text-[#C06C47]">
                architectural commission.
              </span>
            </h2>
          </MaskReveal>

          {/* Action CTAs (Email + Highlighted Direct WhatsApp) */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center w-full"
            style={{ gap: "1rem" }}
          >
            {/* Primary Email Consultation */}
            <MagneticButton>
              <a
                href="mailto:designconsultant545@gmail.com"
                className="group inline-flex items-center justify-center border border-neutral-700 bg-neutral-900/80 text-white font-mono text-xs uppercase tracking-widest hover:border-[#C06C47] hover:bg-[#C06C47] transition-all duration-300 w-full sm:w-auto"
                style={{
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  paddingLeft: "2.25rem",
                  paddingRight: "2.25rem",
                  gap: "1.25rem",
                }}
              >
                <span>Initiate Consultation</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </MagneticButton>

            {/* Highlighted WhatsApp Consultation Trigger */}
            <MagneticButton>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.18)] hover:shadow-[0_0_25px_rgba(37,211,102,0.45)] w-full sm:w-auto"
                style={{
                  paddingTop: "1.25rem",
                  paddingBottom: "1.25rem",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  gap: "0.85rem",
                }}
              >
                {/* WhatsApp Icon */}
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.814 2.796.814 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.485-4.457 9.942-9.969 9.942-1.748 0-3.376-.453-4.802-1.246l-5.229 1.366 1.396-5.101c-.886-1.488-1.396-3.224-1.396-5.061 0-5.485 4.456-9.942 9.969-9.942 5.513 0 9.969 4.457 9.969 9.942z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. ARCHITECTURAL COLOPHON MATRIX (Balanced 4-Column Grid)                  */}
        {/* ========================================================================= */}
        <div
          className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 border-b border-neutral-800"
          style={{
            gap: "2.5rem",
            paddingBottom: "5rem",
          }}
        >
          {/* Brand & Atelier Coordinates */}
          <div
            className="lg:col-span-4 flex flex-col justify-between"
            style={{ gap: "1.5rem" }}
          >
            <div>
              <div
                className="flex items-center"
                style={{
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div className="w-7 h-7 bg-white flex items-center justify-center font-mono font-bold text-xs text-black">
                  DC
                </div>
                <span className="font-sans font-bold text-lg tracking-tight text-white">
                  DESIGNS CONSULTANT
                </span>
              </div>
              <p
                className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm"
                style={{ marginBottom: "1.5rem" }}
              >
                A multidisciplinary civil design, structural engineering, and spatial planning
                consultancy delivering commercial, sacred, and residential commissions across Central India.
              </p>
              <div
                className="font-mono text-[11px] text-neutral-500"
                style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}
              >
                <p>COORDINATES // 21.1873° N, 81.3090° E</p>
                <p>REGIONAL REGISTRY // BHILAI • DURG • RAIPUR</p>
              </div>
            </div>

            <div
              className="border-t border-neutral-800"
              style={{ paddingTop: "1rem" }}
            >
              <span
                className="font-mono text-[10px] uppercase text-[#C06C47] tracking-widest block"
                style={{ marginBottom: "0.25rem" }}
              >
                PRACTICE STATUS
              </span>
              <span className="text-xs text-neutral-300">
                Accepting new master planning & execution briefs.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h4
              className="font-mono text-[11px] uppercase tracking-widest text-neutral-400"
              style={{ marginBottom: "1.5rem" }}
            >
              [INDEX]
            </h4>
            <ul
              className="font-mono text-xs list-none p-0 m-0"
              style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
            >
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
            <h4
              className="font-mono text-[11px] uppercase tracking-widest text-neutral-400"
              style={{ marginBottom: "1.5rem" }}
            >
              [DISCIPLINES]
            </h4>
            <ul
              className="font-mono text-[11px] text-neutral-400 list-none p-0 m-0"
              style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
            >
              {DISCIPLINES.map((discipline) => (
                <li key={discipline} className="hover:text-white transition-colors truncate">
                  • {discipline}
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contacts & Registry */}
          <div
            className="lg:col-span-3"
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div>
              <h4
                className="font-mono text-[11px] uppercase tracking-widest text-neutral-400"
                style={{ marginBottom: "1.5rem" }}
              >
                [STUDIO ATELIER]
              </h4>
              <p
                className="text-xs text-neutral-300 font-light leading-relaxed"
                style={{ marginBottom: "1rem" }}
              >
                Near Durga Mata Mandir, Krishna Talkies Road,
                <br />
                Risali, Bhilai, Chhattisgarh — 490006
              </p>
            </div>

            <div
              className="font-mono text-xs"
              style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}
            >
              <div>
                <span className="text-neutral-500 block text-[10px]">DIRECT LINES</span>
                <div
                  className="flex flex-col"
                  style={{ gap: "0.25rem", marginTop: "0.25rem" }}
                >
                  <a
                    href="tel:+919111466640"
                    className="text-neutral-300 hover:text-[#C06C47] transition-colors"
                  >
                    +91 91114 66640
                  </a>
                  <a
                    href="tel:+919111466641"
                    className="text-neutral-300 hover:text-[#C06C47] transition-colors"
                  >
                    +91 91114 66641
                  </a>
                </div>
              </div>

              <div style={{ paddingTop: "0.5rem" }}>
                <span className="text-neutral-500 block text-[10px]">ELECTRONIC DISPATCH</span>
                <a
                  href="mailto:designconsultant545@gmail.com"
                  className="text-neutral-300 hover:text-[#C06C47] transition-colors break-all"
                >
                  designconsultant545@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links with Highlighted WhatsApp Pill */}
            <div
              className="flex items-center font-mono text-[10px] uppercase text-neutral-400"
              style={{
                gap: "1rem",
                paddingTop: "0.75rem",
              }}
            >
              <a href="#" className="hover:text-[#C06C47] transition-colors">LinkedIn</a>
              <span>/</span>
              <a href="#" className="hover:text-[#C06C47] transition-colors">Instagram</a>
              <span>/</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-semibold flex items-center"
                style={{ gap: "0.25rem" }}
              >
                <span>WhatsApp</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 3. CENTERED COLOPHON BOTTOM BAR                                           */}
        {/* ========================================================================= */}
        <div
          className="w-full flex flex-col md:flex-row items-center justify-between font-mono text-[10px] text-neutral-500 uppercase tracking-widest text-center md:text-left"
          style={{
            paddingTop: "2rem",
            gap: "1rem",
          }}
        >
          <p>© {new Date().getFullYear()} DESIGNS CONSULTANT. ALL RIGHTS RESERVED.</p>
          <div
            className="flex items-center"
            style={{ gap: "1.5rem" }}
          >
            <span>VASTU • STRUCTURAL • CIVIC SANCTIONS</span>
            <span>CENTRAL INDIA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}