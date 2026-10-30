"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Check if loader should be skipped (subsequent visits in session or testing flag)
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.has("noloader") || sessionStorage.getItem("airlink_loaded") === "1") {
        setIsDone(true);
        onComplete?.();
        return;
      }
      sessionStorage.setItem("airlink_loaded", "1");
    } catch (e) {}

    // Prevent body scrolling during preloader
    document.body.style.overflow = "hidden";

    const duration = 1250; // Snappy ~1.25s for smooth, responsive experience
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const t = Math.min(elapsed / duration, 1);

      // Smooth luxury easing curve: accelerates smoothly, decelerates into 100
      const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const currentVal = Math.min(100, Math.floor(ease * 100));
      setProgress(currentVal);

      if (t < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsDone(true);
          document.body.style.overflow = "";
          onComplete?.();
        }, 180);
      }
    };

    const rafId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(rafId);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="preloader"
          aria-hidden="true"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Centered Logo Only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-14 w-44 sm:h-18 sm:w-56 md:h-20 md:w-64"
          >
            <Image
              src="/logo.png"
              alt="Hotel Airlink Castle"
              fill
              priority
              sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
              className="object-contain"
            />
          </motion.div>

          {/* Small 0 to 100 Counter on Bottom Right */}
          <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-12 flex items-baseline gap-1 select-none font-mono text-xs sm:text-sm tracking-widest text-[#3C2816] tabular-nums font-medium">
            <span>{progress}</span>
            <span className="text-[10px] text-[#3C2816]/50">%</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
