"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_DATA } from "@/data/content";

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section
      id="faq"
      aria-label="Frequently Asked Questions"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-[clamp(20px,4vw,64px)]">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO_OUT }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase text-[#3C2816] leading-[1.0] tracking-tight mb-3"
          >
            Frequently asked questions.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: EXPO_OUT }}
            className="text-xs sm:text-sm text-[#3C2816]/70 font-normal leading-relaxed m-0"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Essential guidance regarding check-in times, suite amenities, private dining reservations, and hotel policies.
          </motion.p>
        </div>

        {/* Clean Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3.5">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: EXPO_OUT }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#E8E8E8]/30 border-[#3C2816]/25 shadow-xs"
                    : "bg-white border-[#3C2816]/12 hover:border-[#3C2816]/25 shadow-2xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:px-6 sm:py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#3C2816]/50 tracking-wider font-medium">
                      0{index + 1}
                    </span>
                    <h3
                      className="text-sm sm:text-base text-[#3C2816] font-semibold tracking-tight"
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    size={17}
                    className={`text-[#3C2816]/60 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#3C2816]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EXPO_OUT }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#3C2816]/80 font-light leading-relaxed border-t border-[#3C2816]/6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
