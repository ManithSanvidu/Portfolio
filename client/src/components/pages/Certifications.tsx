
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { Button } from "../ui/button";

// Import certificate images
import python1 from "../images/python1.jfif";
import azure1 from "../images/azure1.jfif";
import docker from "../images/docker.jfif";
import vector1 from "../images/vector1.jfif";
import pythonMoratuwa from "../images/pythonMoratuwa.jpg";

interface CertificateBookPage {
  id: number;
  title: string;
  image: string;
  color: string;
  issuer?: string;
  verifyUrl?: string;
}

const certificatePages: CertificateBookPage[] = [
  {
    id: 1,
    title: "Python Programming & Applications",
    image: python1,
    color: "from-blue-500 to-indigo-600",
    issuer: "Python Certification",
  },
  {
    id: 2,
    title: "Microsoft Azure Fundamentals",
    image: azure1,
    color: "from-sky-500 to-blue-600",
    issuer: "Microsoft Azure",
  },
  {
    id: 3,
    title: "Docker Containerization & DevOps",
    image: docker,
    color: "from-cyan-500 to-blue-600",
    issuer: "Docker",
  },
  {
    id: 4,
    title: "Vector Search & AI Embeddings",
    image: vector1,
    color: "from-violet-500 to-purple-600",
    issuer: "Vector Database & AI",
  },
  {
    id: 5,
    title: "Python for Beginners - University of Moratuwa",
    image: pythonMoratuwa,
    color: "from-orange-500 to-red-500",
    issuer: "University of Moratuwa",
    verifyUrl:
      "https://open.uom.lk/lms/mod/customcert/verify_certificate.php",
  },
];

export function Certifications() {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto flip every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentPage((prev) => (prev + 1) % certificatePages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % certificatePages.length);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage(
      (prev) =>
        (prev - 1 + certificatePages.length) % certificatePages.length
    );
  };

  const currentCert = certificatePages[currentPage];

  // 3D page flip transition variants
  const pageVariants: Variants = {
    enter: (dir: number) => ({
      rotateY: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.94,
      transformOrigin: dir > 0 ? "left center" : "right center",
    }),

    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: "center center",
      transition: {
        duration: 0.65,
        ease: [0.25, 1, 0.5, 1] as const,
      },
    },

    exit: (dir: number) => ({
      rotateY: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.94,
      transformOrigin: dir > 0 ? "left center" : "right center",
      transition: {
        duration: 0.5,
        ease: [0.5, 0, 0.75, 0] as const,
      },
    }),
  };

  return (
    <div className="min-h-full pt-20 pb-16 md:pt-24 md:pb-20 portfolio-page-surface select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#b783f5]/20 bg-[#b783f5]/5 text-[#b783f5] text-xs font-semibold tracking-[0.25em] uppercase mb-4 backdrop-blur-sm">
            <Sparkles size={13} className="text-[#b783f5]" />
            Accreditations & Badges
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] mb-4 text-white">
            Professional{" "}
            <span className="font-semibold text-white">
              Achievements
              <span className="text-[#b783f5]">.</span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Interactive certificate album. Flips automatically every 4
            seconds, or click anywhere on the book to turn the page.
          </p>
        </motion.div>

        {/* Interactive 3D Book Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-[#b783f5]/15 to-blue-600/20 rounded-3xl blur-2xl -z-10 transition-all duration-700 pointer-events-none" />

          {/* Book Outer Cover */}
          <div
            onClick={nextPage}
            className="cursor-pointer group relative bg-[#141416] border border-white/10 rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)] hover:border-[#b783f5]/40 transition-all duration-300"
            style={{ perspective: 1400 }}
          >
            {/* Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-3 sm:w-4 bg-gradient-to-r from-[#0a0a0c] via-black/40 to-transparent rounded-l-2xl md:rounded-l-3xl z-30 pointer-events-none border-r border-white/5" />

            <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-white/10 z-30 pointer-events-none" />

            {/* Book Spine Stitch */}
            <div className="absolute inset-y-0 left-1 sm:left-2 flex flex-col justify-around py-8 z-30 pointer-events-none opacity-40">
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 mb-4" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50 mb-4" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>

            {/* Inner Book Page Container */}
            <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-[#0d0d0f] border border-white/[0.06] aspect-[4/3] sm:aspect-[16/11] flex items-center justify-center">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentPage}
                  custom={direction}
                  variants={pageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0 flex flex-col justify-between p-3 sm:p-5 md:p-6 bg-[#161619]"
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] z-10">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#b783f5]" />

                      <span className="text-xs sm:text-sm font-medium text-white/80 tracking-wide truncate max-w-[200px] sm:max-w-xs">
                        {currentCert.issuer || "Certificate"}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] sm:text-xs text-white/40 tracking-widest uppercase font-mono">
                        Page {currentPage + 1} of {certificatePages.length}
                      </span>

                      {currentCert.verifyUrl && (
                        <a
                          href={currentCert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1 text-[11px] text-[#b783f5] hover:text-[#d3abfc] underline ml-2 transition-colors"
                        >
                          Verify
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Certificate Image Stage */}
                  <div className="relative flex-1 my-3 flex items-center justify-center overflow-hidden rounded-lg bg-black/60 shadow-inner border border-white/5 group-hover:border-white/10 transition-colors">
                    <img
                      src={currentCert.image}
                      alt={currentCert.title}
                      className="max-h-full max-w-full object-contain drop-shadow-md select-none transition-transform duration-500 group-hover:scale-[1.01]"
                      draggable={false}
                    />

                    {/* Page Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10 pointer-events-none" />
                  </div>

                  {/* Bottom Footer */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs text-white/50">
                    <p className="font-medium text-white/90 text-xs sm:text-sm truncate pr-2">
                      {currentCert.title}
                    </p>

                    <span className="hidden sm:inline-block text-[11px] text-[#b783f5]/80 shrink-0">
                      Tap page to flip &rarr;
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Book Corner Flip Badge */}
            <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] sm:text-xs px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-white/70 shadow-lg">
                Click to turn page
              </span>
            </div>
          </div>

          {/* Navigation Controls & Pagination Dots */}
          <div className="flex items-center justify-between mt-6 px-2">
            <Button
              variant="outline"
              size="sm"
              onClick={prevPage}
              className="border-white/10 hover:border-[#b783f5]/40 hover:bg-[#b783f5]/10 text-white rounded-xl gap-1 transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {certificatePages.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setDirection(index > currentPage ? 1 : -1);
                    setCurrentPage(index);
                  }}
                  aria-label={`Go to page ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? "w-7 bg-[#b783f5]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextPage}
              className="border-white/10 hover:border-[#b783f5]/40 hover:bg-[#b783f5]/10 text-white rounded-xl gap-1 transition-all"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Auto-flip Status Hint */}
          <div className="text-center mt-3">
            <span className="text-[11px] text-white/40">
              {isPaused
                ? "Auto-flip paused on hover"
                : "Auto-turning page every 4s"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
