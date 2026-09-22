"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={containerRef} id="studio" className="relative w-full py-14 px-4 sm:px-6 md:px-10 lg:px-16 lg:py-28 2xl:py-36 bg-arciform-bg overflow-hidden flex flex-col items-center border-t border-arciform-border">
      
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-1 lg:grid-cols-4 gap-8 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 opacity-50">
         <div className="border-x border-arciform-border h-full w-full" />
         <div className="border-x border-arciform-border h-full w-full hidden lg:block" />
         <div className="border-x border-arciform-border h-full w-full hidden lg:block" />
         <div className="border-x border-arciform-border h-full w-full hidden lg:block" />
      </div>

      {/* Visible Giant 04 Background Index */}
      <motion.div style={{ y: yParallax }} className="absolute top-[20%] left-[80%] -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none z-0">
        <span className="text-[7rem] sm:text-[11rem] md:text-[16rem] lg:text-[22rem] 2xl:text-[26rem] font-bold font-sans tracking-tighter text-arciform-ghost leading-none">
          04
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
        <div className="flex flex-col items-start mb-20 max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-arciform-border" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400">
              04 // PRACTICE & LEADERSHIP
            </p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-arciform-ink leading-[1.1] mb-8">
            Built upon rigor, guided by intuition and{" "}
            <span className="font-serif italic font-normal text-arciform-accent">
              technical precision.
            </span>
          </h2>
          <p className="font-sans text-xs sm:text-sm md:text-base text-arciform-muted leading-relaxed max-w-xl lg:max-w-2xl">
            For over two decades, our atelier has united chartered architects, structural engineers, and vastu consultants to translate complex client briefs into enduring built form.
          </p>
        </div>

        {/* Grid & Content Layout (Asymmetric Monograph Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 w-full">
          
          {/* Left Column (7 cols) - Principal Architect */}
          <div className="lg:col-span-7 flex flex-col">
             <div className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] border border-neutral-200 bg-white p-3 md:p-4 shadow-sm group overflow-hidden">
                {/* Drafting Corner Crosshairs */}
                <span className="absolute -top-2 -left-2 font-mono text-xs text-neutral-400 z-10">+</span>
                <span className="absolute -top-2 -right-2 font-mono text-xs text-neutral-400 z-10">+</span>
                <span className="absolute -bottom-2 -left-2 font-mono text-xs text-neutral-400 z-10">+</span>
                <span className="absolute -bottom-2 -right-2 font-mono text-xs text-neutral-400 z-10">+</span>
                
                <div className="relative w-full h-full overflow-hidden bg-arciform-border">
                  <img 
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" 
                    alt="Principal Architect" 
                    className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                </div>
             </div>
             
             <div className="mt-10 flex flex-col gap-5 max-w-2xl pl-2">
               <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-arciform-ink leading-snug">
                 "Architecture is not merely enclosure; it is the structural dialogue between geometry, municipal discipline, and human life."
               </p>
               <div className="h-[1px] w-12 bg-arciform-accent my-3"></div>
               <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
                 Arch. M.K. Sahu — Founder & Chief Consultant
               </p>
             </div>
          </div>

          {/* Right Column (5 cols) - Contextual Figures */}
          <div className="lg:col-span-5 flex flex-col gap-10 lg:gap-16 justify-center lg:mt-16">
             {/* FIG 01 */}
             <div className="flex flex-col gap-4 group cursor-pointer">
               <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                 <span className="w-3 h-[1px] bg-neutral-300"></span>
                 FIG 01 // DRAFTING & SPATIAL PLANNING
               </div>
               <div className="relative w-full aspect-[16/10] border border-neutral-200 p-1.5 bg-white overflow-hidden shadow-sm">
                 <div className="relative w-full h-full overflow-hidden bg-arciform-border">
                   <img 
                     src="https://images.unsplash.com/photo-1581291518655-9523c932deda?auto=format&fit=crop&w=800&q=80" 
                     alt="Drafting" 
                     className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                   />
                 </div>
               </div>
             </div>

             {/* FIG 02 */}
             <div className="flex flex-col gap-4 group cursor-pointer">
               <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-400 flex items-center gap-2">
                 <span className="w-3 h-[1px] bg-neutral-300"></span>
                 FIG 02 // TECHNICAL CONSULTATION
               </div>
               <div className="relative w-full aspect-[16/10] border border-neutral-200 p-1.5 bg-white overflow-hidden shadow-sm">
                 <div className="relative w-full h-full overflow-hidden bg-arciform-border">
                   <img 
                     src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                     alt="Consultation" 
                     className="w-full h-full object-cover grayscale mix-blend-multiply group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                   />
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-t border-neutral-200 pt-8 pb-12 mt-16">
           
           <div className="flex flex-col gap-3 group">
             <div className="font-mono text-sm uppercase tracking-widest text-arciform-ink font-bold flex items-center gap-3">
               <span className="text-arciform-accent text-[10px] bg-arciform-accent/10 px-1.5 py-0.5">[01]</span> 
               25+ YEARS
             </div>
             <p className="font-sans text-sm text-arciform-muted leading-relaxed pl-10 border-l border-transparent transition-colors group-hover:border-arciform-accent">
               Continuous architectural and engineering practice in Bhilai & Raipur.
             </p>
           </div>
           
           <div className="flex flex-col gap-3 group">
             <div className="font-mono text-sm uppercase tracking-widest text-arciform-ink font-bold flex items-center gap-3">
               <span className="text-arciform-accent text-[10px] bg-arciform-accent/10 px-1.5 py-0.5">[02]</span> 
               END-TO-END
             </div>
             <p className="font-sans text-sm text-arciform-muted leading-relaxed pl-10 border-l border-transparent transition-colors group-hover:border-arciform-accent">
               From land acquisition & Vastu to Nagar Nigam sanctions and handover.
             </p>
           </div>

           <div className="flex flex-col gap-3 group">
             <div className="font-mono text-sm uppercase tracking-widest text-arciform-ink font-bold flex items-center gap-3">
               <span className="text-arciform-accent text-[10px] bg-arciform-accent/10 px-1.5 py-0.5">[03]</span> 
               MULTIDISCIPLINARY
             </div>
             <p className="font-sans text-sm text-arciform-muted leading-relaxed pl-10 border-l border-transparent transition-colors group-hover:border-arciform-accent">
               Integrated civil engineering, interior design, and smart automation.
             </p>
           </div>

        </div>

      </motion.div>
    </section>
  );
}