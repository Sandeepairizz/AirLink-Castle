"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { DINING_DATA } from "@/data/content";
import { IMAGES } from "@/data/images";

export default function Dining() {
  const [activeTab, setActiveTab] = useState(0);
  const activeOutlet = DINING_DATA[activeTab];
  const activeImage = IMAGES.dining[activeOutlet.imageKey];

  return (
    <section
      id="dining"
      aria-label="Hotel Airlink Castle Restaurants and Bars"
      className="relative bg-white text-[#3C2816] pt-12 pb-20 sm:pt-14 sm:pb-24 lg:pt-14 lg:pb-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)]">
        {/* Section Header: Two Clean Aligned Texts */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-6 lg:mb-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(1.9rem,3.6vw,3.2rem)] font-black uppercase text-[#3C2816] leading-[1.02] tracking-tight mb-2.5"
            >
              <span className="block">Five Distinct</span>
              <span className="block">Culinary Destinations.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#3C2816]/75 font-normal leading-relaxed m-0"
            >
              Authentic Malabar coastal delicacies, 24-hour artisan roasts, and tranquil evening cocktails.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start lg:items-end shrink-0"
          >
            <Link
              href="/dining"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3C2816] hover:text-[#4E3C2B] no-underline transition-colors"
            >
              <span>Explore Menus & Venues</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Minimalist Editorial Tabs for the 5 Outlets */}
        <div className="flex items-center gap-4 sm:gap-8 overflow-x-auto border-b border-[#3C2816]/10 pb-3 mb-6 sm:mb-7 scrollbar-none">
          {DINING_DATA.map((outlet, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={outlet.id}
                type="button"
                onClick={() => setActiveTab(index)}
                className={`group relative pb-2 text-xs font-semibold tracking-[0.14em] uppercase transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "text-[#3C2816]"
                    : "text-[#3C2816]/40 hover:text-[#3C2816]/80"
                }`}
              >
                <span>{outlet.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="diningUnderline"
                    className="absolute -bottom-3 left-0 right-0 h-0.5 bg-[#3C2816]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Outlet Showcase Card on Pure White */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeOutlet.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
          >
            {/* Editorial Text Column on Left (5 cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center pt-1 lg:pt-2">
              <div>
                <h3
                  className="text-2xl sm:text-3xl text-[#3C2816] font-black uppercase tracking-tight leading-[1.05] mb-2.5"
                >
                  {activeOutlet.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#3C2816]/75 font-normal leading-relaxed mb-4">
                  {activeOutlet.description}
                </p>

                {/* Ambiance Callout */}
                <div className="border-l-2 border-[#3C2816]/30 pl-3.5 py-1 mb-6">
                  <p className="text-xs text-[#3C2816]/80 font-medium leading-relaxed">
                    {activeOutlet.atmosphere}
                  </p>
                </div>
              </div>

              {/* Action Buttons with Subtle Rounded Corners */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/dining"
                  className="rounded-lg bg-[#3C2816] text-white px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#4E3C2B] transition-colors shadow-xs"
                >
                  View Menu
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-[#3C2816]/25 text-[#3C2816] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#3C2816] hover:text-white transition-all"
                >
                  Reserve Table
                </Link>
              </div>
            </div>

            {/* Visual Image Column on Right (7 cols) - placed slightly upward */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-[16/10] rounded-xl overflow-hidden bg-[#3C2816]/5 shadow-sm border border-[#3C2816]/12 lg:-mt-1">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
