"use client";

import {
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Pause, Play } from "lucide-react";

/* ─── Constants ─────────────────────────────────────────────────────────────── */
const POSTER_SRC = "/img/about/01.webp";

/* ─── Date helpers (client-side only to prevent hydration mismatch) ───────── */
function toLocalDateString(d: Date): string {
  const yyyy = d.getFullYear();
  const mm   = String(d.getMonth() + 1).padStart(2, "0");
  const dd   = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return toLocalDateString(d);
}

export default function HeroSection() {
  const prefersReduced = useReducedMotion();
  const router         = useRouter();

  /* Section refs */
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef   = useRef<HTMLVideoElement | null>(null);

  /* Video states */
  const [videoReady,  setVideoReady]  = useState(false);
  const [videoError,  setVideoError]  = useState(false);
  const [isPlaying,   setIsPlaying]   = useState(true);
  const userPaused    = useRef(false);

  /* Booking form state */
  const [checkin,  setCheckin]  = useState("");
  const [checkout, setCheckout] = useState("");
  const [adults,   setAdults]   = useState("2");
  const [room,     setRoom]     = useState("any");
  const [minDate,  setMinDate]  = useState("");

  /* Client-side dates initialization */
  useEffect(() => {
    const today    = toLocalDateString(new Date());
    const tomorrow = addDays(today, 1);
    setCheckin(today);
    setCheckout(tomorrow);
    setMinDate(today);
  }, []);

  /* Pause video immediately when reduced motion is preferred */
  useEffect(() => {
    if (prefersReduced && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [prefersReduced]);

  const handleCanPlay = useCallback(() => setVideoReady(true), []);
  const handleError   = useCallback(() => setVideoError(true),  []);

  /* Playback toggle */
  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
      userPaused.current = false;
    } else {
      video.pause();
      setIsPlaying(false);
      userPaused.current = true;
    }
  }, []);

  /* Check-in change logic */
  const handleCheckinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckin = e.target.value;
    setCheckin(newCheckin);
    if (!checkout || checkout <= newCheckin) {
      setCheckout(addDays(newCheckin, 1));
    }
  };

  /* Form submission */
  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams({
      checkin,
      checkout,
      adults,
      room,
    });
    router.push(`/booking?${params.toString()}`);
  };

  /* ── Scroll-driven transformations ── */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* Text separation & fading */
  const airlinkX       = useTransform(scrollYProgress, [0, 0.45], ["0%", "-40vw"]);
  const castleX        = useTransform(scrollYProgress, [0, 0.45], ["0%", "40vw"]);
  const airlinkYMobile = useTransform(scrollYProgress, [0, 0.45], ["0%", "-30vh"]);
  const castleYMobile  = useTransform(scrollYProgress, [0, 0.45], ["0%", "30vh"]);
  const textOpacity    = useTransform(scrollYProgress, [0, 0.35], [1, 0]);

  /* Video card smooth expansion with subtle border radius (14px -> 0px) */
  const cardWidth   = useTransform(scrollYProgress, [0, 0.65], ["28%", "100%"]);
  const cardHeight  = useTransform(scrollYProgress, [0, 0.65], ["26%", "100%"]);
  const cardRadius  = useTransform(scrollYProgress, [0, 0.55], [14, 0]);

  /* Cinematic overlay & booking card when full bleed */
  const scrimOpacity   = useTransform(scrollYProgress, [0.45, 0.7], [0, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0.65, 0.88], [0, 1]);
  const overlayY       = useTransform(scrollYProgress, [0.65, 0.88], [35, 0]);

  const minCheckout = checkin ? addDays(checkin, 1) : "";

  return (
    <section
      ref={sectionRef}
      aria-label="Hero — Hotel Airlink Castle"
      className="relative w-full h-[220vh] bg-white text-coffee select-none"
    >
      {/* ── Sticky Viewport Window ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* ── Center Stage: Desktop side-by-side & Mobile Top/Bottom ── */}
        <div className="relative z-10 w-full flex items-center justify-center px-4 sm:px-8">
          
          {/* Desktop Composition: Airlink [ The Video Card ] Castle */}
          <div className="relative w-full max-w-[1680px] hidden md:flex items-center justify-center">
            {/* Left Display Word: Airlink */}
            <motion.span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                ...(prefersReduced ? {} : { x: airlinkX, opacity: textOpacity }),
              }}
              className="select-none text-coffee uppercase whitespace-nowrap text-[clamp(2.5rem,7.8vw,10.2rem)] leading-none text-right flex-1"
            >
              Airlink
            </motion.span>

            {/* Invisible structural spacer keeping natural gap for the video */}
            <div className="w-[clamp(140px,28vw,460px)] aspect-[16/10] invisible flex-shrink-0" />

            {/* Right Display Word: Castle */}
            <motion.span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                ...(prefersReduced ? {} : { x: castleX, opacity: textOpacity }),
              }}
              className="select-none text-coffee uppercase whitespace-nowrap text-[clamp(2.5rem,7.8vw,10.2rem)] leading-none text-left flex-1"
            >
              Castle
            </motion.span>
          </div>

          {/* Mobile Composition: Airlink on TOP of video, Castle on BOTTOM of video */}
          <div className="relative w-full flex md:hidden flex-col items-center justify-center gap-3">
            <motion.span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                ...(prefersReduced ? {} : { y: airlinkYMobile, opacity: textOpacity }),
              }}
              className="select-none text-coffee uppercase whitespace-nowrap text-[clamp(2.6rem,13vw,4.2rem)] leading-none text-center"
            >
              Airlink
            </motion.span>

            {/* Invisible spacer matching initial mobile video footprint */}
            <div className="w-[clamp(240px,78vw,340px)] aspect-[16/10] invisible flex-shrink-0" />

            <motion.span
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                ...(prefersReduced ? {} : { y: castleYMobile, opacity: textOpacity }),
              }}
              className="select-none text-coffee uppercase whitespace-nowrap text-[clamp(2.6rem,13vw,4.2rem)] leading-none text-center"
            >
              Castle
            </motion.span>
          </div>
        </div>

        {/* ── The Cinematic Video Card (Centered with subtle initial border-radius) ── */}
        <motion.div
          style={
            prefersReduced
              ? {
                  width: "100%",
                  height: "100%",
                  borderRadius: 0,
                }
              : {
                  width: cardWidth,
                  height: cardHeight,
                  borderRadius: cardRadius,
                }
          }
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-xl bg-coffee border border-coffee/15 z-0"
        >
          {!videoError && (
            <video
              ref={videoRef}
              src="/hero.mp4"
              poster={POSTER_SRC}
              autoPlay={!prefersReduced}
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
              onCanPlayThrough={handleCanPlay}
              onLoadedData={handleCanPlay}
              onError={handleError}
              className="w-full h-full object-cover transition-opacity duration-700"
              style={{ opacity: videoReady ? 1 : 0.85 }}
            />
          )}

          {/* Scrim overlay that deepens gracefully when the video covers full screen */}
          <motion.div
            style={prefersReduced ? { opacity: 0.7 } : { opacity: scrimOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/30 pointer-events-none"
          />

          {/* Pause / Play micro control */}
          <button
            type="button"
            onClick={togglePlayback}
            aria-label={isPlaying ? "Pause ambient video" : "Play ambient video"}
            className="absolute bottom-4 right-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white/90 backdrop-blur-md transition-all hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 ml-0.5" />}
          </button>
        </motion.div>

        {/* ── Full-Bleed Cinematic Content Overlay (Reveals when card expands) ── */}
        <motion.div
          style={
            prefersReduced
              ? {}
              : { opacity: overlayOpacity, y: overlayY }
          }
          className="absolute inset-0 z-20 flex flex-col justify-end pointer-events-none pb-8 sm:pb-12 lg:pb-16"
        >
          <div
            className="mx-auto w-full max-w-[1680px]"
            style={{ padding: "0 clamp(20px,4vw,64px)" }}
          >
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
              
              {/* Left headline */}
              <div className="max-w-[720px] pointer-events-auto">
                <h1
                  style={{
                    fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
                  }}
                  className="text-[clamp(2.2rem,5vw,4.8rem)] text-white font-black uppercase leading-[1.0] tracking-[-0.035em] mb-4"
                >
                  A private sanctuary, made for rest.
                </h1>
                <p
                  className="text-white/80 text-[clamp(0.95rem,1.2vw,1.15rem)] font-light leading-relaxed max-w-[560px]"
                  style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                >
                  Fifty-four guest rooms, five dining experiences, and a rooftop pool, crafted for serenity and independent luxury.
                </p>
              </div>

              {/* Right: Glass Dark Booking Card */}
              <div className="w-full lg:w-[480px] pointer-events-auto">
                <div
                  className="rounded-xl p-5 sm:p-6 text-white border border-white/20 shadow-2xl"
                  style={{
                    backgroundColor: "rgba(60,40,22,0.55)",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                    <span
                      className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90"
                      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
                    >
                      Plan your stay
                    </span>
                    <span className="text-[11px] text-white/60">
                      Best rate guarantee
                    </span>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-checkin"
                          className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                        >
                          Check-in
                        </label>
                        <div className="relative">
                          <input
                            id="hero-checkin"
                            type="date"
                            value={checkin}
                            min={minDate || undefined}
                            onChange={handleCheckinChange}
                            required
                            className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="hero-checkout"
                          className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                        >
                          Check-out
                        </label>
                        <div className="relative">
                          <input
                            id="hero-checkout"
                            type="date"
                            value={checkout}
                            min={minCheckout}
                            onChange={(e) => setCheckout(e.target.value)}
                            required
                            className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="hero-guests"
                          className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                        >
                          Guests
                        </label>
                        <select
                          id="hero-guests"
                          value={adults}
                          onChange={(e) => setAdults(e.target.value)}
                          className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white [&>option]:bg-coffee [&>option]:text-white"
                        >
                          <option value="1">1 Adult</option>
                          <option value="2">2 Adults</option>
                          <option value="3">3 Adults</option>
                          <option value="4">4+ Adults</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="hero-room-type"
                          className="block text-[11px] uppercase tracking-wider text-white/70 mb-1"
                        >
                          Room Type
                        </label>
                        <select
                          id="hero-room-type"
                          value={room}
                          onChange={(e) => setRoom(e.target.value)}
                          className="w-full rounded-lg bg-white/10 px-3 py-2.5 text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-white [&>option]:bg-coffee [&>option]:text-white"
                        >
                          <option value="any">All Suites</option>
                          <option value="deluxe">Deluxe Room</option>
                          <option value="suite">Castle Suite</option>
                          <option value="presidential">Presidential Suite</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-1 flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-xs font-semibold uppercase tracking-wider text-coffee transition-all hover:bg-alabaster active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer"
                    >
                      <span>Check availability</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </form>

                  <div className="mt-3 text-center">
                    <a
                      href="https://wa.me/914842612233?text=Hello%20Airlink%20Castle%2C%20I%20would%20like%20to%20inquire%20about%20a%20reservation."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[11px] text-white/70 hover:text-white transition-colors underline underline-offset-4"
                    >
                      Or message us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
