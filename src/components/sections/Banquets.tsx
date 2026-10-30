"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { X, Send, Check, ArrowUpRight } from "lucide-react";

interface VenueItem {
  id: string;
  number: string;
  name: string;
  capacity: string;
  dimensions: string;
  image: string;
}

const VENUES: VenueItem[] = [
  {
    id: "grand-ballroom",
    number: "01",
    name: "Grand Ballroom",
    capacity: "Up to 800 Guests",
    dimensions: "12,000 sq. ft. · Pillarless Architecture",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2560&q=85&auto=format",
  },
  {
    id: "senate-hall",
    number: "02",
    name: "Senate Hall",
    capacity: "Up to 150 Guests",
    dimensions: "3,500 sq. ft. · Executive Summit Setup",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2560&q=85&auto=format",
  },
  {
    id: "regent-chamber",
    number: "03",
    name: "Regent Chamber",
    capacity: "Up to 300 Guests",
    dimensions: "5,200 sq. ft. · Royal Dining & Banquets",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2560&q=85&auto=format",
  },
  {
    id: "summit-suite",
    number: "04",
    name: "Summit Suite",
    capacity: "Up to 40 Guests",
    dimensions: "1,200 sq. ft. · Private Boardroom & AV",
    image:
      "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=2560&q=85&auto=format",
  },
  {
    id: "palm-court",
    number: "05",
    name: "Palm Court",
    capacity: "Up to 600 Guests",
    dimensions: "Open-Air Lawn · Poolside Celebrations",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=2560&q=85&auto=format",
  },
];

export default function Banquets() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track scroll position to update active venue with diagonal curtain wipe
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const idx = Math.min(
      VENUES.length - 1,
      Math.max(0, Math.floor(latest * VENUES.length))
    );
    if (idx !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(idx);
    }
  });

  const changeVenue = (idx: number) => {
    if (idx !== activeIndex) {
      setPrevIndex(activeIndex);
      setActiveIndex(idx);
    }
  };

  const currentVenue = VENUES[activeIndex];
  const previousVenue = VENUES[prevIndex];

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      ref={containerRef}
      id="banquets"
      aria-label="Hotel Airlink Castle Banquets and Event Venues"
      className="relative bg-black text-white h-[350vh]"
    >
      {/* ── Sticky Full-Viewport Container ── */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none bg-black">
        {/* ── Fullscreen Background Image with Angled Diagonal Curtain Wipe ── */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Base Layer: Previous image remains visible while new one wipes up */}
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={previousVenue.image}
              alt={previousVenue.name}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />
          </div>

          {/* Active Layer: Angled Slanted Wipe matching reference video */}
          <AnimatePresence initial={false}>
            <motion.div
              key={currentVenue.id}
              initial={{
                clipPath: "polygon(0% 100%, 100% 112%, 100% 100%, 0% 100%)",
                scale: 1.05,
              }}
              animate={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                scale: 1,
              }}
              exit={{
                opacity: 0.85,
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="absolute inset-0 w-full h-full z-10"
            >
              <Image
                src={currentVenue.image}
                alt={currentVenue.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
              {/* Dark vignette gradient overlay for pristine left typography legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/20 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── TOP BAR: Minimalist Navigation Header ── */}
        <div className="relative z-20 flex items-center justify-between w-full pb-4">
          <h2
            className="text-xs uppercase tracking-[0.2em] font-semibold text-white/90"
          >
            Banquets & Celebrations
          </h2>

          <button
            type="button"
            onClick={() => setQuoteModalOpen(true)}
            className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white font-medium transition-colors cursor-pointer"
          >
            Inquire · Index
          </button>
        </div>

        {/* ── CENTER / LEFT: Clean Un-Congested Typographic Stack (Exact Video Layout) ── */}
        <div className="relative z-20 my-auto max-w-3xl flex flex-col justify-center">
          <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
            {VENUES.map((venue, idx) => {
              const isActive = activeIndex === idx;

              return (
                <button
                  key={venue.id}
                  type="button"
                  onMouseEnter={() => changeVenue(idx)}
                  onClick={() => {
                    changeVenue(idx);
                    setQuoteModalOpen(true);
                  }}
                  className="group flex items-center gap-4 sm:gap-6 text-left focus-visible:outline-none cursor-pointer"
                >
                  <span
                    className={`text-[clamp(2.2rem,5vw,4.5rem)] font-black uppercase leading-[0.98] tracking-[-0.03em] transition-all duration-300 ${
                      isActive
                        ? "text-white translate-x-2"
                        : "text-white/30 hover:text-white/70"
                    }`}
                  >
                    {venue.name}
                  </span>

                  {/* Circular Action Indicator next to active item (from video) */}
                  {isActive && (
                    <motion.span
                      layoutId="venueActiveBullet"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl shrink-0 group-hover:scale-110 transition-transform"
                      aria-hidden="true"
                    >
                      <ArrowUpRight size={17} strokeWidth={2.2} />
                    </motion.span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── BOTTOM ROW: Index Indicator & Active Venue Metadata ── */}
        <div className="relative z-20 flex items-center justify-between w-full pt-4">
          {/* Index Counter: 01 / 05 (matching reference video bottom-left) */}
          <div className="font-mono text-xs sm:text-sm tracking-widest text-white/80 select-none">
            {currentVenue.number}{" "}
            <span className="opacity-40">/</span> 0{VENUES.length}
          </div>

          {/* Active Venue Details at Bottom-Right (Un-congested) */}
          <div className="flex items-center gap-4 text-right">
            <span className="text-xs uppercase tracking-[0.16em] text-white/80 font-medium hidden sm:inline-block">
              {currentVenue.capacity} · {currentVenue.dimensions}
            </span>

            <button
              type="button"
              onClick={() => setQuoteModalOpen(true)}
              className="text-xs font-medium uppercase tracking-[0.16em] text-white hover:text-white/80 transition-colors pb-0.5 border-b border-white/40 cursor-pointer"
            >
              Inquire Now →
            </button>
          </div>
        </div>
      </div>

      {/* ── Proposal Request Modal ── */}
      <AnimatePresence>
        {quoteModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setQuoteModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 16 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#140F0A] text-white rounded-xl p-6 sm:p-8 shadow-2xl border border-white/20"
            >
              <button
                type="button"
                onClick={() => setQuoteModalOpen(false)}
                className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                    <Check size={24} />
                  </div>
                  <h3
                    className="text-xl font-bold uppercase tracking-tight text-white mb-2"
                  >
                    Proposal Request Received
                  </h3>
                  <p className="text-sm text-white/70 max-w-xs mx-auto">
                    Our banquet director will contact you within 24 hours with floor plans, culinary packages, and pricing for {currentVenue.name}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div>
                    <h3
                      className="text-xl font-bold uppercase tracking-tight text-white"
                    >
                      Inquire About {currentVenue.name}
                    </h3>
                    <p className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                      {currentVenue.capacity} · {currentVenue.dimensions}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
                        placeholder="+91 ..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-1">
                        Event Date
                      </label>
                      <input
                        type="date"
                        required
                        className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm text-white focus:border-white focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-1">
                        Expected Guests
                      </label>
                      <input
                        type="number"
                        min="10"
                        className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none"
                        placeholder="e.g. 150"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider text-white/70 mb-1">
                      Event Type / Notes
                    </label>
                    <textarea
                      rows={2}
                      className="w-full rounded-lg bg-white/5 border border-white/15 px-3 py-2 text-sm text-white placeholder-white/30 focus:border-white focus:outline-none resize-none"
                      placeholder="Wedding reception, conference summit, birthday banquet..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-white text-black py-3 text-xs font-semibold uppercase tracking-wider hover:bg-[#E8E8E8] transition-colors cursor-pointer"
                  >
                    <Send size={14} />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
