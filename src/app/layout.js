import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Arciform — Architecture & Interior Design Studio",
  description:
    "We engineer architectural foundations into living spaces. Award-winning design consultancy specialising in residential & commercial projects.",
  openGraph: {
    title: "Arciform — Architecture & Interior Design Studio",
    description:
      "We engineer architectural foundations into living spaces.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full`}
    >
      <body className="min-h-full bg-[#FAFAFA] text-neutral-900 relative selection:bg-[#C06C47] selection:text-white">
        
        {/* Left Architectural Margin Guide */}
        <div className="hidden lg:flex fixed left-0 top-0 bottom-0 w-16 border-r border-neutral-200/80 items-center justify-center z-50 pointer-events-none py-12">
          <span className="font-mono text-[10px] text-neutral-400 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            GEODETIC DATUM // LAT 21.1873° N, LONG 81.3090° E // ZONE 44N
          </span>
        </div>

        {/* Right Architectural Margin Guide */}
        <div className="hidden lg:flex fixed right-0 top-0 bottom-0 w-16 border-l border-neutral-200/80 items-center justify-center z-50 pointer-events-none py-12">
          <span className="font-mono text-[10px] text-neutral-400 tracking-[0.3em] uppercase" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            ARCIFORM ARCHIVE // 2000–2026 // CENTRAL INDIA
          </span>
        </div>

        <div className="w-full relative lg:px-12 xl:px-16">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
