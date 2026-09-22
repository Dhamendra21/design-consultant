"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Responsive floating Navbar with brand logo, desktop links,
 * and a mobile slide-over drawer with Framer Motion.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  /* ── Track scroll to transition background ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close menu on Escape key ── */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Lock scroll when menu open ── */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const desktopLinks = [
    { label: "Work", href: "#work" },
    { label: "Studio", href: "#studio" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
  ];

  const mobileLinks = [
    { num: "01", label: "Selected Works", href: "#work" },
    { num: "02", label: "Master Plan", href: "#work" },
    { num: "03", label: "Disciplines", href: "#services" },
    { num: "04", label: "Studio", href: "#studio" },
  ];

  return (
    <>
      {/* ─── Navbar Bar ─────────────────────────────────────── */}
      <header
        ref={navRef}
        style={{
          background: scrolled ? "rgba(251,251,253,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(17,17,17,0.06)" : "1px solid transparent",
        }}
        className="fixed top-0 left-0 right-0 z-[100] h-[72px] px-4 md:px-10 lg:px-16 flex items-center justify-between transition-all duration-400"
      >
        {/* Brand */}
        <a
          href="#"
          className="font-sans font-semibold text-lg tracking-tight text-arciform-ink no-underline flex items-center gap-2"
        >
          <span className="inline-block w-4 h-4 bg-arciform-ink rounded-sm shrink-0" />
          <span className="hidden sm:inline">Arciform</span>
          <span className="inline sm:hidden">DC</span>
        </a>

        {/* Desktop Links (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center gap-8">
          {desktopLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] uppercase tracking-widest text-arciform-ink hover:text-[#C06C47] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-widest bg-arciform-ink text-white px-5 py-2 hover:bg-[#C06C47] transition-colors"
          >
            Engage
          </a>
        </nav>

        {/* Mobile Menu Trigger (Hidden on Desktop) */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center gap-2 bg-transparent border-none cursor-pointer py-2 text-arciform-ink"
        >
          <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase mt-[2px]">
            {menuOpen ? "Close" : "Menu"}
          </span>
          {/* Animated Burger */}
          <div className="relative w-5 h-3 flex flex-col justify-between">
            <span
              className="block w-full h-[1.5px] bg-arciform-ink rounded-sm origin-center transition-transform duration-300"
              style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-full h-[1.5px] bg-arciform-ink rounded-sm transition-opacity duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-full h-[1.5px] bg-arciform-ink rounded-sm origin-center transition-transform duration-300"
              style={{ transform: menuOpen ? "translateY(-5.5px) rotate(-45deg)" : "none" }}
            />
          </div>
        </button>
      </header>

      {/* ─── Full-Screen Mobile Drawer ───────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[99] bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md flex flex-col justify-between px-6 pt-32 pb-10"
          >
            <nav className="flex flex-col gap-4">
              {mobileLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  className="group flex items-baseline gap-4 text-arciform-ink dark:text-white no-underline hover:text-[#C06C47] dark:hover:text-[#C06C47] transition-colors"
                >
                  <span className="font-mono text-sm tracking-widest text-[#C06C47] shrink-0">
                    [{link.num}]
                  </span>
                  <span className="font-sans font-bold text-4xl sm:text-5xl tracking-tight leading-[1.1]">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4 w-full"
            >
              <div className="flex items-center gap-3 w-full">
                <a
                  href="https://wa.me/919111466640"
                  className="flex-1 text-center py-4 border border-arciform-ink dark:border-white font-mono text-[10px] tracking-widest uppercase hover:bg-arciform-ink hover:text-white dark:hover:bg-white dark:hover:text-[#121212] transition-colors"
                >
                  WhatsApp
                </a>
                <a
                  href="tel:+919111466640"
                  className="flex-1 text-center py-4 bg-arciform-ink text-white dark:bg-white dark:text-[#121212] font-mono text-[10px] tracking-widest uppercase hover:bg-[#C06C47] dark:hover:bg-[#C06C47] dark:hover:text-white transition-colors"
                >
                  Call Now
                </a>
              </div>
              <p className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase text-center mt-4">
                © 2026 Arciform Studio // Central India
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
