"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { IMAGES } from "@/data/images";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Staggered heights, widths, and vertical offsets for an organic editorial layout
const IMAGE_CONFIGS = [
  { width: "w-[380px] sm:w-[440px]", aspect: "aspect-[16/11]", yOffset: "-translate-y-6" },
  { width: "w-[280px] sm:w-[340px]", aspect: "aspect-[3/4]",   yOffset: "translate-y-8" },
  { width: "w-[400px] sm:w-[480px]", aspect: "aspect-[4/3]",   yOffset: "translate-y-0" },
  { width: "w-[270px] sm:w-[320px]", aspect: "aspect-[4/5]",   yOffset: "-translate-y-10" },
  { width: "w-[390px] sm:w-[460px]", aspect: "aspect-[16/10]", yOffset: "translate-y-6" },
  { width: "w-[300px] sm:w-[360px]", aspect: "aspect-[3/4]",   yOffset: "-translate-y-4" },
  { width: "w-[420px] sm:w-[500px]", aspect: "aspect-[16/9]",  yOffset: "translate-y-10" },
  { width: "w-[290px] sm:w-[330px]", aspect: "aspect-[4/5]",   yOffset: "-translate-y-8" },
  { width: "w-[380px] sm:w-[450px]", aspect: "aspect-[4/3]",   yOffset: "translate-y-4" },
  { width: "w-[410px] sm:w-[480px]", aspect: "aspect-[16/10]", yOffset: "-translate-y-6" },
];

export default function Gallery() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems = IMAGES.gallery;

  /* Horizontal scroll driven by vertical page scroll */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Moves the wide horizontal track across the viewport
  const trackX = useTransform(scrollYProgress, [0, 1], ["0%", "-68%"]);

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryItems.length);
    }
  };

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + galleryItems.length) % galleryItems.length
      );
    }
  };

  return (
    <section
      ref={containerRef}
      id="gallery"
      aria-label="Hotel Airlink Castle Photography Gallery"
      className={`relative bg-white text-coffee ${
        prefersReduced ? "py-20 lg:py-28" : "h-[300vh]"
      }`}
    >
      {/* ── Sticky Viewport Window ── */}
      <div
        className={
          prefersReduced
            ? "relative w-full"
            : "sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12"
        }
      >
        {/* Header Bar */}
        <div className="relative z-20 w-full max-w-[1680px] mx-auto px-[clamp(20px,4vw,64px)] flex items-end justify-between pt-6 sm:pt-8">
          <div>
            <h2
              className="text-[clamp(1.8rem,3.2vw,3rem)] font-black text-[#3C2816] tracking-tight leading-none uppercase"
              style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
            >
              Moments of rest & craft
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest text-[#3C2816]/60 font-medium">
            <span>Scroll horizontally</span>
            <span>→</span>
          </div>
        </div>

        {/* ── Horizontal Scrolling Filmstrip Track ── */}
        <div className="relative z-10 w-full overflow-hidden flex-1 flex items-center my-auto">
          <motion.div
            style={prefersReduced ? {} : { x: trackX }}
            className="flex items-center gap-8 sm:gap-12 pl-[clamp(20px,4vw,64px)] pr-24 flex-nowrap"
          >
            {galleryItems.map((img, index) => {
              const cfg = IMAGE_CONFIGS[index % IMAGE_CONFIGS.length];

              return (
                <div
                  key={img.id || index}
                  onClick={() => setLightboxIndex(index)}
                  className={`group relative ${cfg.width} ${cfg.aspect} ${cfg.yOffset} shrink-0 overflow-hidden bg-[#E8E8E8] cursor-pointer rounded-xl border border-[#3C2816]/10 shadow-xs hover:border-[#3C2816]/30 transition-all duration-300`}
                >
                  {/* Clean image - zero text until hovered */}
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 500px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay: Revealed ONLY on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6 text-white pointer-events-none">
                    <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mb-1">
                      {img.category}
                    </span>
                    <p className="text-base sm:text-lg font-medium text-white leading-snug">
                      {img.title}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs text-white/90">
                      <span>View full image</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom subtle progress / status row */}
        <div className="relative z-20 w-full max-w-[1680px] mx-auto px-[clamp(20px,4vw,64px)] flex items-center justify-between pb-4 sm:pb-6 text-xs text-[#3C2816]/60">
          <span className="font-mono">01 — {String(galleryItems.length).padStart(2, "0")} ARCHIVE</span>
          <span className="uppercase tracking-widest text-[11px]">Hover image to inspect</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-md p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2.5 rounded-none bg-white/10 text-white hover:bg-white/20 transition-colors z-10 cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 sm:left-6 p-3 rounded-none bg-white/10 text-white hover:bg-white/20 transition-colors z-10 cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 sm:right-6 p-3 rounded-none bg-white/10 text-white hover:bg-white/20 transition-colors z-10 cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              transition={{ ease: EXPO_OUT, duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[75vh] overflow-hidden rounded-none">
                <Image
                  src={galleryItems[lightboxIndex].src}
                  alt={galleryItems[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-white text-base font-medium">
                  {galleryItems[lightboxIndex].title}
                </p>
                <p className="text-white/60 text-xs mt-0.5">
                  {galleryItems[lightboxIndex].category} · Photo {lightboxIndex + 1} of {galleryItems.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
