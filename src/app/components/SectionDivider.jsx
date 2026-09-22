import React from "react";

export default function SectionDivider({ chapter, title, elevation = "290M", lat = "21.18° N" }) {
  return (
    <div className="relative w-full border-y border-neutral-200 bg-[#FAFAFA] py-6 my-12">
      <div className="w-full max-w-[1560px] 2xl:max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">
          CHAPTER // {chapter} — {title}
        </span>
        <div className="flex items-center gap-4 font-mono text-[10px] text-neutral-400">
          <span>ELEVATION: {elevation}</span>
          <span>•</span>
          <span>LAT {lat}</span>
        </div>
      </div>
    </div>
  );
}
