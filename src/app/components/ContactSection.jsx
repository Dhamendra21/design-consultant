"use client";

import React, { useState } from "react";

const TYPOLOGIES = [
  "Bespoke Residential",
  "Sacred Architecture / Mandir",
  "Commercial Complex",
  "Master Planning & Cadastre",
  "Nagar Nigam Sanction / Legal",
  "Interior & Smart Automation",
];

const LOCATIONS = [
  "Risali / Bhilai",
  "Durg Municipal Area",
  "Raipur Capital Region",
  "Greater Chhattisgarh",
  "Other / Remote Commission",
];

export default function ContactSection() {
  const [selectedTypology, setSelectedTypology] = useState("Bespoke Residential");
  const [selectedLocation, setSelectedLocation] = useState("Risali / Bhilai");
  const [formData, setFormData] = useState({
    clientName: "",
    contactNumber: "",
    emailAddress: "",
    plotArea: "",
    projectBrief: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Designs Consultant. I would like to initiate an architectural commission.\n` +
      `• Typology: ${selectedTypology}\n` +
      `• Location: ${selectedLocation}\n` +
      `• Client: ${formData.clientName || "Prospective Client"}\n` +
      `• Plot Area: ${formData.plotArea || "To be discussed"}\n` +
      `• Brief: ${formData.projectBrief || "Initial Inquiry"}`
    );
    window.open(`https://wa.me/919111466641?text=${text}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#FAFAFA] text-neutral-900 overflow-hidden border-t border-neutral-200"
      style={{
        paddingTop: "7rem",
        paddingBottom: "8rem",
        paddingLeft: "clamp(1.5rem, 4vw, 4rem)",
        paddingRight: "clamp(1.5rem, 4vw, 4rem)",
      }}
    >
      {/* Background Architectural Drafting Guides */}
      <div
        className="absolute inset-0 pointer-events-none grid grid-cols-6 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto border-x border-neutral-200/60"
        style={{
          paddingLeft: "clamp(1rem, 3vw, 4rem)",
          paddingRight: "clamp(1rem, 3vw, 4rem)",
        }}
      >
        <div className="border-r border-neutral-200/60 h-full" />
        <div className="border-r border-neutral-200/60 h-full" />
        <div className="border-r border-neutral-200/60 h-full" />
        <div className="border-r border-neutral-200/60 h-full" />
        <div className="border-r border-neutral-200/60 h-full" />
      </div>

      {/* Ghost Background Numeral */}
      <div
        className="absolute select-none pointer-events-none z-0"
        style={{ top: "3rem", right: "3rem" }}
      >
        <span className="text-[14rem] md:text-[22rem] font-bold font-sans tracking-tighter text-neutral-200/60 leading-none">
          07
        </span>
      </div>

      <div className="relative z-10 w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto">
        
        {/* ========================================================================= */}
        {/* 1. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div
          className="max-w-4xl"
          style={{ marginBottom: "4.5rem" }}
        >
          <div
            className="flex items-center"
            style={{ gap: "0.75rem", marginBottom: "1.25rem" }}
          >
            <span className="h-[1px] w-8 bg-[#C06C47]" />
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#C06C47] font-semibold">
              COMMISSION INTAKE // CHAPTER 07
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold tracking-tight text-neutral-900 leading-[1.12]">
            Initiate an architectural brief or{" "}
            <span className="font-serif italic font-normal text-[#C06C47]">
              schedule a studio consultation.
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* 2. SPLIT DOSSIER GRID (Left: Form | Right: Atelier + Map Embed)           */}
        {/* ========================================================================= */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 items-start"
          style={{ gap: "3.5rem" }}
        >
          
          {/* LEFT: INTAKE DOSSIER FORM (7 Cols) */}
          <div
            className="lg:col-span-7 bg-white border border-neutral-300 shadow-sm relative"
            style={{ padding: "clamp(1.75rem, 3.5vw, 3rem)" }}
          >
            {/* Corner Drafting Marks */}
            <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
            <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
            <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>
            <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-neutral-400 select-none">+</span>

            <div
              className="border-b border-neutral-200 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-neutral-500"
              style={{ paddingBottom: "1.25rem", marginBottom: "2rem" }}
            >
              <span>PROJECT DOSSIER SPECIFICATION</span>
              <span className="text-[#C06C47] font-semibold">STATUS: ACTIVE INTAKE</span>
            </div>

            {isSubmitted ? (
              <div
                className="text-center"
                style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
              >
                <div
                  className="w-12 h-12 rounded-full bg-[#C06C47]/10 text-[#C06C47] flex items-center justify-center mx-auto text-xl font-mono"
                  style={{ marginBottom: "1.25rem" }}
                >
                  ✓
                </div>
                <h3 className="text-2xl font-sans font-bold text-neutral-900" style={{ marginBottom: "0.75rem" }}>
                  Dossier Successfully Logged
                </h3>
                <p className="text-sm text-neutral-600 font-light max-w-md mx-auto leading-relaxed">
                  Our principal consultant will review your site parameters and contact you within 24 hours to arrange an atelier or on-site consultation.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="font-mono text-xs uppercase tracking-widest text-[#C06C47] underline hover:text-neutral-900 cursor-pointer"
                  style={{ marginTop: "1.75rem", display: "inline-block" }}
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
              >
                
                {/* Typology Selection */}
                <div>
                  <label
                    className="block font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    [01] SELECT COMMISSION TYPOLOGY *
                  </label>
                  <div
                    className="grid grid-cols-1 sm:grid-cols-2"
                    style={{ gap: "0.625rem" }}
                  >
                    {TYPOLOGIES.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setSelectedTypology(type)}
                        className={`text-left font-mono text-xs border transition-all duration-200 cursor-pointer ${
                          selectedTypology === type
                            ? "bg-neutral-900 text-white border-neutral-900"
                            : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-400"
                        }`}
                        style={{
                          paddingTop: "0.75rem",
                          paddingBottom: "0.75rem",
                          paddingLeft: "1rem",
                          paddingRight: "1rem",
                        }}
                      >
                        {selectedTypology === type ? "■ " : "□ "} {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Zone */}
                <div>
                  <label
                    className="block font-mono text-xs uppercase tracking-wider text-neutral-500 font-medium"
                    style={{ marginBottom: "0.75rem" }}
                  >
                    [02] REGIONAL JURISDICTION / SITE TERRITORY *
                  </label>
                  <div
                    className="flex flex-wrap"
                    style={{ gap: "0.5rem" }}
                  >
                    {LOCATIONS.map((loc) => (
                      <button
                        type="button"
                        key={loc}
                        onClick={() => setSelectedLocation(loc)}
                        className={`font-mono text-xs border transition-all duration-200 cursor-pointer ${
                          selectedLocation === loc
                            ? "border-[#C06C47] bg-[#C06C47]/10 text-[#C06C47] font-semibold"
                            : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400"
                        }`}
                        style={{
                          paddingTop: "0.5rem",
                          paddingBottom: "0.5rem",
                          paddingLeft: "0.85rem",
                          paddingRight: "0.85rem",
                        }}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Client & Site Inputs */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2"
                  style={{ gap: "1.25rem", paddingTop: "0.25rem" }}
                >
                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-neutral-500"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      CLIENT OR FIRM NAME *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      required
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder="e.g. Er. Rajesh Verma"
                      className="w-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-sans"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-neutral-500"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      DIRECT PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      name="contactNumber"
                      required
                      value={formData.contactNumber}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-sans"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-neutral-500"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      EMAIL DISPATCH
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleChange}
                      placeholder="client@domain.com"
                      className="w-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-sans"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block font-mono text-xs uppercase tracking-wider text-neutral-500"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      ESTIMATED PLOT AREA (SQ. FT.)
                    </label>
                    <input
                      type="text"
                      name="plotArea"
                      value={formData.plotArea}
                      onChange={handleChange}
                      placeholder="e.g. 2,400 sq. ft."
                      className="w-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-sans"
                      style={{
                        paddingTop: "0.75rem",
                        paddingBottom: "0.75rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                      }}
                    />
                  </div>
                </div>

                {/* Spatial Brief Textarea */}
                <div>
                  <label
                    className="block font-mono text-xs uppercase tracking-wider text-neutral-500"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    PROJECT VISION & STATUTORY REQUIREMENTS
                  </label>
                  <textarea
                    rows={4}
                    name="projectBrief"
                    value={formData.projectBrief}
                    onChange={handleChange}
                    placeholder="Describe spatial vision, Vastu orientation, timeline, or municipal approvals required..."
                    className="w-full bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 font-sans resize-none"
                    style={{
                      padding: "1rem",
                    }}
                  />
                </div>

                {/* Submit and WhatsApp Action Row */}
                <div
                  className="border-t border-neutral-200 flex flex-col sm:flex-row items-center"
                  style={{
                    paddingTop: "1.25rem",
                    gap: "1rem",
                  }}
                >
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 group inline-flex items-center justify-center bg-neutral-900 text-white font-mono text-xs uppercase tracking-widest hover:bg-[#C06C47] transition-colors cursor-pointer"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      gap: "0.75rem",
                    }}
                  >
                    <span>Log Architectural Dossier</span>
                    <span className="text-sm group-hover:translate-x-1 transition-transform">→</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center border border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_0_15px_rgba(37,211,102,0.12)] cursor-pointer"
                    style={{
                      paddingTop: "1rem",
                      paddingBottom: "1rem",
                      paddingLeft: "1.5rem",
                      paddingRight: "1.5rem",
                      gap: "0.75rem",
                    }}
                  >
                    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.699c.971.53 1.838.814 2.796.814 3.18 0 5.767-2.586 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.485-4.457 9.942-9.969 9.942-1.748 0-3.376-.453-4.802-1.246l-5.229 1.366 1.396-5.101c-.886-1.488-1.396-3.224-1.396-5.061 0-5.485 4.456-9.942 9.969-9.942 5.513 0 9.969 4.457 9.969 9.942z" />
                    </svg>
                    <span>Instant WhatsApp</span>
                  </button>
                </div>

              </form>
            )}
          </div>

          {/* RIGHT: ATELIER REGISTRY + GOOGLE MAP EMBED (5 Cols) */}
          <div
            className="lg:col-span-5"
            style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
            
            {/* Atelier Coordinates Card */}
            <div
              className="bg-white border border-neutral-300 shadow-sm"
              style={{ padding: "2rem" }}
            >
              <span
                className="font-mono text-[10px] uppercase text-[#C06C47] tracking-widest block font-semibold"
                style={{ marginBottom: "0.5rem" }}
              >
                HEAD ATELIER // CENTRAL INDIA
              </span>
              <h3
                className="text-xl font-sans font-bold text-neutral-900 tracking-tight"
                style={{ marginBottom: "1rem" }}
              >
                Designs Consultant Studio
              </h3>
              <p
                className="text-sm text-neutral-600 font-light leading-relaxed"
                style={{ marginBottom: "1.5rem" }}
              >
                Near Durga Mata Mandir, Krishna Talkies Road,
                <br />
                Risali, Bhilai, Chhattisgarh — 490006[cite: 1, 6]
              </p>

              {/* Direct Lines */}
              <div
                className="border-t border-neutral-200 font-mono text-xs"
                style={{
                  paddingTop: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div className="flex justify-between">
                  <span className="text-neutral-400">TELEPHONE:</span>
                  <a href="tel:+919111466640" className="text-neutral-900 hover:text-[#C06C47] transition-colors">
                    +91 91114 66640[cite: 1, 6]
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">SECONDARY:</span>
                  <a href="tel:+919111466641" className="text-neutral-900 hover:text-[#C06C47] transition-colors">
                    +91 91114 66641[cite: 1, 6]
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">ELECTRONIC:</span>
                  <a href="mailto:designconsultant545@gmail.com" className="text-neutral-900 hover:text-[#C06C47] transition-colors">
                    designconsultant545@gmail.com[cite: 1, 6]
                  </a>
                </div>
              </div>
            </div>

            {/* ===================================================================== */}
            {/* GOOGLE MAPS EMBED PLACEHOLDER                                         */}
            {/* ===================================================================== */}
            <div className=" border border-neutral-300 shadow-sm overflow-hidden">
              <div
                className="border-b border-neutral-200 flex items-center justify-between font-mono text-[10px] uppercase text-neutral-500 bg-neutral-50"
                style={{
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <span>CARTOGRAPHIC SATELLITE LOCATOR</span>
                <span className="text-[#C06C47]">ZONE 44N</span>
              </div>

              {/* Responsive Map Container */}
              <div
                className="relative w-full bg-neutral-100"
                style={{ height: "260px" }}
              >
                <iframe
                  title="Designs Consultant Studio Location"
                  className="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.8374815887323!2d81.33233217526015!3d21.158864980523344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293df4a5c71ba7%3A0xd9e0fe00239aec95!2sDesign%20Consultant!5e0!3m2!1sen!2sin!4v1790224364743!5m2!1sen!2sin"
                />
              </div>

              {/* Map Footer Bar */}
              <div
                className="border-t border-neutral-200 flex items-center justify-between font-mono text-[10px] text-neutral-500"
                style={{
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                }}
              >
                <span>21.1873° N, 81.3090° E</span>
                <a
                  href="https://maps.google.com/?q=Risali,Bhilai,Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C06C47] hover:underline"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>

            {/* Practice Protocol */}
            <div
              className="border border-neutral-200 bg-neutral-50/60"
              style={{ padding: "1.75rem" }}
            >
              <h4
                className="font-mono text-xs uppercase tracking-widest text-neutral-900 font-semibold"
                style={{ marginBottom: "1rem" }}
              >
                CONSULTATION PROTOCOL
              </h4>
              <ul
                className="font-mono text-xs text-neutral-600 list-none p-0 m-0"
                style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
              >
                <li className="flex items-start" style={{ gap: "0.625rem" }}>
                  <span className="text-[#C06C47] font-bold">[01]</span>
                  <span><strong>Initial Cadastre Review:</strong> Preliminary discussion covering site layout, orientation, and feasibility.</span>
                </li>
                <li className="flex items-start" style={{ gap: "0.625rem" }}>
                  <span className="text-[#C06C47] font-bold">[02]</span>
                  <span><strong>Statutory Diligence:</strong> Nagar Nigam sanction checks, zoning verification, and Vastu compliance audit[cite: 1, 6].</span>
                </li>
                <li className="flex items-start" style={{ gap: "0.625rem" }}>
                  <span className="text-[#C06C47] font-bold">[03]</span>
                  <span><strong>Turnkey Execution:</strong> Integrated civil engineering, RCC inspection, and full architectural oversight[cite: 1, 6].</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}