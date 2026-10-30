"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

interface GuestReview {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

const EXPO_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const FEATURED_REVIEW: GuestReview & { heroImage: string } = {
  id: "feat-1",
  author: "Samantha Lee",
  role: "London, UK · Leisure Guest",
  quote:
    "The quiet sanctuary we needed in Nedumbassery. Outstanding Kerala seafood at Simply Fish, whisper-quiet suites, and restorative comfort.",
  rating: 5,
  avatar:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=75&auto=format",
  heroImage:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=75&auto=format",
};

const GRID_REVIEWS: GuestReview[] = [
  {
    id: "rev-1",
    author: "Capt. Rajesh Varma",
    role: "Bengaluru · Business Retreat",
    quote:
      "The bespoke wooden interiors and silent climate control made all the difference for our rest. Courteous round-the-clock service and exceptional hospitality.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=75&auto=format",
  },
  {
    id: "rev-2",
    author: "Elena Rostova",
    role: "London · Holiday Traveler",
    quote:
      "The rooftop swimming pool overlooking endless coconut canopies was blissful. Five specialty dining options made every meal an experience in itself.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=75&auto=format",
  },
  {
    id: "rev-3",
    author: "Dr. Mathew Joseph",
    role: "Kochi · Private Event Host",
    quote:
      "Hosted a private anniversary banquet in the Regent Hall. Impeccable catering, expansive parking, and an attentive coordination team.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=75&auto=format",
  },
  {
    id: "rev-4",
    author: "Priya & Anand Nair",
    role: "Dubai, UAE · Family Vacation",
    quote:
      "Spacious suites with genuine Kerala architectural warmth. The children loved the rooftop pool and Castle Cafe’s freshly baked morning pastries.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=75&auto=format",
  },
];

export default function Reviews() {
  return (
    <section
      id="reviews"
      aria-label="What Our Guests Say"
      className="relative bg-white py-20 lg:py-28 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)]">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EXPO_OUT }}
            className="text-[clamp(2rem,4vw,3.5rem)] font-black uppercase text-[#3C2816] leading-[1.0] tracking-tight mb-3"
          >
            What our guests cherish.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.08, ease: EXPO_OUT }}
            className="text-xs sm:text-sm text-[#3C2816]/70 font-normal leading-relaxed max-w-xl mx-auto m-0"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            Reflections of quiet comfort, attentive hospitality, and restful stays in Nedumbassery.
          </motion.p>
        </div>

        {/* Featured Editorial Review Card with Subtle Radius */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EXPO_OUT }}
          className="relative mb-8 lg:mb-10 overflow-hidden rounded-xl bg-[#E8E8E8]/40 border border-[#3C2816]/15 p-6 sm:p-10 lg:p-12 shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Quote & Author */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 mb-6 text-[#3C2816]">
                  {[...Array(FEATURED_REVIEW.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#3C2816" stroke="none" />
                  ))}
                  <span className="ml-2 text-xs font-semibold tracking-wider text-[#3C2816]">
                    5.0 · Verified Stay
                  </span>
                </div>

                <blockquote
                  className="text-[clamp(1.3rem,2.2vw,1.9rem)] font-bold text-[#3C2816] leading-[1.25] tracking-tight mb-8"
                >
                  &ldquo;{FEATURED_REVIEW.quote}&rdquo;
                </blockquote>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-[#3C2816]/10">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#3C2816]/20">
                  <Image
                    src={FEATURED_REVIEW.avatar}
                    alt={FEATURED_REVIEW.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-[#3C2816]">
                      {FEATURED_REVIEW.author}
                    </span>
                    <CheckCircle size={13} className="text-[#3C2816]/70" />
                  </div>
                  <span className="text-xs text-[#3C2816]/65 font-light">
                    {FEATURED_REVIEW.role}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Atmosphere Image */}
            <div className="lg:col-span-5 relative aspect-[16/11] lg:aspect-[4/3] rounded-lg overflow-hidden border border-[#3C2816]/10">
              <Image
                src={FEATURED_REVIEW.heroImage}
                alt="Restful ambiance at Hotel Airlink Castle"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* 4-Column Grid Reviews with Subtle Radius */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GRID_REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: EXPO_OUT }}
              whileHover={{ y: -5, transition: { duration: 0.25 } }}
              className="flex flex-col justify-between rounded-xl bg-white border border-[#3C2816]/12 p-6 shadow-xs hover:border-[#3C2816]/30 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-[#3C2816] mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={13} fill="#3C2816" stroke="none" />
                  ))}
                </div>

                <p
                  className="text-sm sm:text-base text-[#3C2816]/90 font-medium leading-relaxed mb-6"
                >
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#3C2816]/8">
                <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#3C2816]/15">
                  <Image
                    src={review.avatar}
                    alt={review.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-[#3C2816] leading-none mb-1">
                    {review.author}
                  </h3>
                  <span className="text-[11px] text-[#3C2816]/60 font-light block leading-none">
                    {review.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
