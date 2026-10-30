"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { HOTEL_INFO } from "@/data/content";
import { IMAGES } from "@/data/images";

interface PackageItem {
  id: string;
  number: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  alt: string;
  highlights: string;
}

const PACKAGES: PackageItem[] = [
  {
    id: "pkg-1",
    number: "01",
    title: "Weekend sanctuary retreat.",
    description:
      "Private suite accommodation with panoramic coconut grove vistas, morning rooftop terrace breakfast, and leisurely late check-out until 3:00 PM.",
    badge: "Leisure Escape",
    image: IMAGES.offers.transitStay.src,
    alt: "Guest enjoying suite comfort at Hotel Airlink Castle",
    highlights: "Suite Stay · Rooftop Breakfast · Late Check-out",
  },
  {
    id: "pkg-2",
    number: "02",
    title: "Culinary discovery journey.",
    description:
      "A five-venue gastronomic experience crafted by master chefs. Includes a 4-course dinner at Royal Dine, sunset drinks at Horizon, and artisan morning bakery.",
    badge: "Gastronomic Tour",
    image: IMAGES.dining.royalDine.src,
    alt: "Royal Dine multi-cuisine restaurant table setting",
    highlights: "4-Course Dinner · Sunset Cocktails · Castle Cafe",
  },
  {
    id: "pkg-3",
    number: "03",
    title: "Executive business sanctuary.",
    description:
      "Designed for seamless productivity and restorative peace. High-speed fiber Wi-Fi, executive boardroom access for two hours, and 24-hour flexible arrival.",
    badge: "Corporate Comfort",
    image: IMAGES.rooms.presidentialSuite.src,
    alt: "Executive Presidential Suite private lounge and work desk",
    highlights: "Flexible Arrival · Boardroom Access · Express Laundry",
  },
  {
    id: "pkg-4",
    number: "04",
    title: "Extended serenity stay.",
    description:
      "Special weekly privileges for unhurried retreats in God’s Own Country. Daily chef's breakfast buffet, rooftop pool access, and dedicated personal concierge.",
    badge: "Extended Privileges",
    image: IMAGES.welcome.exterior.src,
    alt: "Lush tropical palm groves and serene resort grounds",
    highlights: "Weekly Tariff · Daily Buffet · Personal Concierge",
  },
];

export default function Offers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePackage = PACKAGES[activeIndex];

  return (
    <section
      id="offers"
      aria-label="Curated Private Stay Packages"
      className="relative bg-white pt-12 pb-10 sm:pt-16 sm:pb-12 lg:pt-16 lg:pb-14 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)]">
        {/* Section Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.9rem,3.6vw,3.2rem)] font-black uppercase text-[#3C2816] leading-[1.0] tracking-tight mb-2.5"
            >
              Curated Private Packages.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#3C2816]/75 font-normal leading-relaxed m-0"
            >
              Seasonal privileges crafted for romantic getaways, wellness retreats, and culinary indulgence.
            </motion.p>
          </div>
        </div>

        {/* Two-Column Interactive Layout matching Reference Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ── LEFT COLUMN: Interactive Accordion-Tabs List (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#3C2816]/10">
            {PACKAGES.map((pkg, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={pkg.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`py-3 sm:py-3.5 transition-all duration-300 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-35 hover:opacity-75"
                  }`}
                >
                  {/* Top line: Indicator dash + Number + Title */}
                  <div className="flex items-baseline gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-mono tracking-wider transition-colors duration-300 shrink-0 ${
                        isActive ? "text-[#3C2816] font-semibold" : "text-[#3C2816]/60"
                      }`}
                    >
                      {isActive ? "— " : "  "}
                      {pkg.number}
                    </span>

                    <h3
                      className={`text-lg sm:text-xl lg:text-2xl font-black uppercase tracking-tight transition-colors duration-300 ${
                        isActive ? "text-[#3C2816]" : "text-[#3C2816]"
                      }`}
                    >
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Expanded Content (visible when active) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pl-7 sm:pl-9"
                      >
                        <p className="text-xs sm:text-sm text-[#3C2816]/75 font-light leading-relaxed max-w-xl mt-2 mb-3">
                          {pkg.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-4">
                          <span className="text-[0.6875rem] uppercase tracking-wider text-[#3C2816]/70 font-medium">
                            {pkg.highlights}
                          </span>

                          <a
                            href={HOTEL_INFO.contact.whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.14em] text-[#3C2816] hover:text-[#4E3C2B] group"
                          >
                            <span>Reserve Package</span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Dynamic Synchronized Image Showcase (5 cols) ── */}
          <div className="lg:col-span-5 lg:sticky lg:top-20 lg:-mt-2">
            <div className="relative aspect-[4/3.5] w-full rounded-xl overflow-hidden shadow-sm bg-[#3C2816] border border-[#3C2816]/15 max-h-[440px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePackage.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activePackage.image}
                    alt={activePackage.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                  {/* Floating Badge on Top */}
                  <div className="absolute top-5 left-5">
                    <span className="rounded-md px-3 py-1 text-[0.6875rem] font-semibold uppercase tracking-wider bg-white text-[#3C2816] shadow-xs">
                      {activePackage.badge}
                    </span>
                  </div>

                  {/* Floating Package Caption at Bottom */}
                  <div className="absolute bottom-6 inset-x-6 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[0.625rem] uppercase tracking-widest text-white/70 block font-light">
                        Featured Package {activePackage.number}
                      </span>
                      <span
                        className="text-base sm:text-lg font-bold uppercase tracking-tight block"
                      >
                        {activePackage.title}
                      </span>
                    </div>

                    <a
                      href={HOTEL_INFO.contact.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 rounded-full bg-white text-[#3C2816] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                      aria-label={`Inquire about ${activePackage.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
