"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";
import { HOTEL_INFO } from "@/data/content";

const REGIONAL_DISTANCES = [
  { destination: "Nedumbassery Heritage Center", time: "3 mins", distance: "1.2 km" },
  { destination: "Angamaly Commercial Hub", time: "8 mins", distance: "4.5 km" },
  { destination: "Cherai Beach & Coastal Backwaters", time: "35 mins", distance: "22 km" },
  { destination: "Kochi City Center & Marine Drive", time: "45 mins", distance: "28 km" },
  { destination: "Athirappilly Majestic Waterfalls", time: "55 mins", distance: "42 km" },
];

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function Location() {
  return (
    <section
      id="location"
      aria-label="Hotel Airlink Castle Location & Regional Surroundings"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)]">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EXPO_OUT }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase text-[#3C2816] leading-[1.0] tracking-tight mb-3"
            >
              Nestled in Nedumbassery, Kochi.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: EXPO_OUT }}
              className="text-sm sm:text-base text-[#3C2816]/75 font-normal leading-relaxed m-0"
            >
              Direct arterial access to Central Kerala’s historic backwaters, spice trading heritage, and green sanctuaries.
            </motion.p>
          </div>
        </div>

        {/* 2-Column Layout: Distances Card & Clean Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Key Distances Column */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO_OUT }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#E8E8E8]/35 rounded-xl p-6 sm:p-8 border border-[#3C2816]/15 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-3 pb-5 border-b border-[#3C2816]/10 mb-6">
                <div className="h-9 w-9 rounded-lg bg-[#3C2816]/10 flex items-center justify-center text-[#3C2816]">
                  <Compass size={18} />
                </div>
                <div>
                  <h3 className="text-base font-bold uppercase tracking-tight text-[#3C2816]">
                    Regional Connectivity
                  </h3>
                  <p className="text-[11px] text-[#3C2816]/65 font-light">
                    Estimated travel times from our private retreat
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {REGIONAL_DISTANCES.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-[#3C2816]/6 last:border-0 hover:translate-x-1 transition-transform duration-200"
                  >
                    <span className="text-xs sm:text-sm text-[#3C2816] font-light">
                      {item.destination}
                    </span>
                    <div className="text-right shrink-0 ml-4">
                      <span className="text-xs font-semibold text-[#3C2816] block">
                        {item.time}
                      </span>
                      <span className="text-[10px] text-[#3C2816]/60 font-mono">
                        {item.distance}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Address & Navigation CTA */}
            <div className="mt-8 pt-6 border-t border-[#3C2816]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-xs text-[#3C2816]/80 font-light">
                <span className="font-semibold text-[#3C2816] block">Hotel Airlink Castle</span>
                <span>Airport Road, Nedumbassery, Kochi, Kerala 683572</span>
              </div>
              <a
                href={HOTEL_INFO.address.googleMapsEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 bg-[#3C2816] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#4E3C2B] transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3C2816]"
              >
                <span>Navigate</span>
                <Navigation size={13} />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map Column */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO_OUT }}
            className="lg:col-span-7 relative min-h-[360px] lg:min-h-full rounded-xl overflow-hidden border border-[#3C2816]/15 shadow-xs"
          >
            <iframe
              title="Hotel Airlink Castle Location Map"
              src={HOTEL_INFO.address.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
