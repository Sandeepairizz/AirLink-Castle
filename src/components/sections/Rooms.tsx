"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { ROOMS_DATA, RoomItem } from "@/data/content";
import { IMAGES } from "@/data/images";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<RoomItem | null>(null);

  // Feature top 3 suites on homepage
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <section
      id="rooms"
      aria-label="Hotel Rooms and Signature Suites"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)]">
        {/* Section Header: Two Clean Aligned Texts */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase text-[#3C2816] leading-[1.0] tracking-tight mb-3"
            >
              Rooms & Signature Suites.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base text-[#3C2816]/75 font-normal leading-relaxed m-0"
            >
              Fifty-four private rooms crafted for stillness, comfort, and restorative stays in Nedumbassery.
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
              href="/rooms"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3C2816] no-underline transition-colors hover:text-[#4E3C2B]"
            >
              <span>View All 54 Rooms</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* 3-Column Luxury Suite Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredRooms.map((room, index) => {
            const imageInfo = IMAGES.rooms[room.imageKey];

            return (
              <motion.article
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-[#3C2816]/12 shadow-xs transition-all duration-500 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Photo with Hover Zoom */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#3C2816]/5">
                  <Image
                    src={imageInfo.src}
                    alt={imageInfo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Starting Rate Badge */}
                  <div className="absolute bottom-3.5 right-3.5 text-right">
                    <span className="font-bold text-base text-white drop-shadow">
                      ₹{room.startingRate.toLocaleString("en-IN")}
                      <span className="text-[11px] font-normal opacity-85"> / night</span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3
                      className="text-lg text-[#3C2816] font-bold uppercase tracking-tight mb-2 group-hover:text-[#4E3C2B] transition-colors"
                    >
                      {room.name}
                    </h3>

                    {/* Spec Highlights */}
                    <div className="flex items-center gap-2 text-xs text-[#3C2816]/70 font-medium mb-4">
                      <span>{room.size}</span>
                      <span className="text-[#3C2816]/30">•</span>
                      <span>{room.bed}</span>
                      <span className="text-[#3C2816]/30">•</span>
                      <span>{room.view}</span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="pt-3 border-t border-[#3C2816]/10 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedRoom(room)}
                      className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C2816] hover:text-[#4E3C2B] transition-colors py-1.5 cursor-pointer"
                    >
                      Details →
                    </button>
                    <Link
                      href={`/booking?room=${room.id}`}
                      className="rounded-lg px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-[#3C2816] text-white hover:bg-[#4E3C2B] transition-colors"
                    >
                      Reserve
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            href="/rooms"
            className="inline-flex items-center gap-3 rounded-lg border border-[#3C2816]/25 px-8 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#3C2816] hover:bg-[#3C2816] hover:text-white transition-all duration-300"
          >
            <span>Explore All Accommodations & Suites</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Room Details Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-[#3C2816]/15 max-h-[90vh] flex flex-col"
            >
              {/* Modal Image */}
              <div className="relative aspect-[16/9] w-full shrink-0">
                <Image
                  src={IMAGES.rooms[selectedRoom.imageKey].src}
                  alt={selectedRoom.name}
                  fill
                  className="object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedRoom(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/75 transition-colors"
                  aria-label="Close dialog"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 overflow-y-auto">
                <h3
                  className="text-2xl sm:text-3xl text-[#3C2816] font-black uppercase tracking-tight mb-2"
                >
                  {selectedRoom.name}
                </h3>
                <p className="text-sm text-[#3C2816]/75 font-light leading-relaxed mb-6">
                  {selectedRoom.description}
                </p>

                {/* Amenities List */}
                <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#3C2816] mb-3">
                  Included Amenities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {selectedRoom.amenities.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-[#3C2816]/80 font-light">
                      <Check size={14} className="text-[#3C2816] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Modal Footer CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-[#3C2816]/10">
                  <div>
                    <span className="text-2xl font-bold text-[#3C2816]">
                      ₹{selectedRoom.startingRate.toLocaleString("en-IN")}
                      <span className="text-xs font-sans font-light opacity-75"> / night</span>
                    </span>
                  </div>
                  <Link
                    href={`/booking?room=${selectedRoom.id}`}
                    className="rounded-lg px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#3C2816] text-white hover:bg-[#4E3C2B] transition-colors"
                  >
                    Reserve Now
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
