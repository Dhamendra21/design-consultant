import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CanvasSequence from "./components/CanvasSequence";
import ServicesSection from "./components/ServicesSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import Footer from "./components/Footer";
import SectionDivider from "./components/SectionDivider";
import ArchitectCursor from "./components/ArchitectCursor";

/**
 * Root page — assembles all major sections.
 * CanvasSequence is a client component (has "use client" directive).
 * This server component simply imports and renders them in order.
 */
export default function HomePage() {
  return (
    <main>
      {/* ── Custom architectural cursor (desktop only) ── */}
      <ArchitectCursor />

      {/* ── Fixed Navigation ── */}
      <Navbar />

      {/* ── Hero: full-viewport headline ── */}
      <Hero />

      {/* ── Scroll-Driven Canvas Image Sequence ── */}
      <CanvasSequence />

      {/* ── About Studio Section ── */}
      <AboutSection />

      <SectionDivider chapter="03" title="SPATIAL CADASTRE" />

      {/* ── Projects Section ── */}
      <ProjectsSection />

      {/* ── Services / Conclusion Section ── */}
      <ServicesSection />

      <CapabilitiesSection/>

      <Footer/>
    </main>
  );
}
