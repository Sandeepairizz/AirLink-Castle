"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

const MOTION_EASE = [0.16, 1, 0.3, 1] as const;

/* ─── Footer Link with Draw-In Underline ──────────────────────────────────── */
function UnderlineLink({
  href,
  children,
  external = false,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const baseClasses =
    "group relative inline-flex items-center text-sm sm:text-base text-white/80 hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3C2816] rounded-xs";

  const content = (
    <>
      <span>{children}</span>
      <span
        aria-hidden="true"
        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={`${baseClasses} ${className}`}
      >
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={`${baseClasses} ${className}`}>
      {content}
    </Link>
  );
}

/* ─── Magnetic Back-to-Top Button ─────────────────────────────────────────── */
function MagneticBackToTop({ prefersReduced }: { prefersReduced: boolean }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const strength = 0.3;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  return (
    <motion.button
      type="button"
      onClick={scrollToTop}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={prefersReduced ? undefined : { x: springX, y: springY }}
      aria-label="Back to top of page"
      className="h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-white/25 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3C2816] cursor-pointer"
    >
      <ArrowUp size={16} strokeWidth={2} aria-hidden="true" />
    </motion.button>
  );
}

/* ─── Main Footer Component ──────────────────────────────────────────────── */
export default function Footer() {
  const prefersReduced = useReducedMotion() ?? false;

  /* State: Live Kochi Time */
  const [kochiTime, setKochiTime] = useState<string>("");

  /* State: Current Year */
  const [year, setYear] = useState<number>(2026);

  /* State: Newsletter */
  const [newsletterEmail, setNewsletterEmail] = useState<string>("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState<string>("");

  /* Initialize Client-Side Only Data (avoid hydration mismatch) */
  useEffect(() => {
    const now = new Date();
    setYear(now.getFullYear());

    // Live Kochi Time
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        setKochiTime(formatted);
      } catch {
        const d = new Date();
        const utc = d.getTime() + d.getTimezoneOffset() * 60000;
        const ist = new Date(utc + 3600000 * 5.5);
        const hh = String(ist.getHours()).padStart(2, "0");
        const mm = String(ist.getMinutes()).padStart(2, "0");
        setKochiTime(`${hh}:${mm}`);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  /* Newsletter submit handler */
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      setNewsletterMessage("Please enter a valid email address.");
      return;
    }

    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setNewsletterMessage("Thank you, you're on the list.");
      setNewsletterEmail("");
    }, 600);
  };

  /* Oversized wordmark character split */
  const wordmarkChars = "Airlink Castle".split("");

  return (
    <footer
      id="contact"
      role="contentinfo"
      aria-label="Hotel Airlink Castle Footer"
      className="relative z-30 -mt-7 rounded-t-[28px] bg-[#3C2816] text-white overflow-hidden pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10"
      style={{
        fontFamily: "var(--font-inter), system-ui, sans-serif",
      }}
    >
      {/* Visually hidden heading for semantic level structure */}
      <h2 className="sr-only">Footer</h2>

      <div className="mx-auto w-full max-w-[1680px] px-[clamp(20px,4vw,64px)] flex flex-col gap-10 sm:gap-12">
        {/* ── 1. LINK GRID ───────────────────────────────────────────────── */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Column 1: Hotel Brand */}
          <div className="space-y-3">
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/60 font-medium">
              Hotel
            </h3>
            <div>
              <span
                style={{
                  fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
                }}
                className="block text-2xl font-black uppercase tracking-tight text-white mb-2"
              >
                Airlink Castle
              </span>
              <p className="text-sm text-white/80 font-light leading-relaxed max-w-sm">
                An independent, privately owned luxury hotel in Nedumbassery, Kochi.
              </p>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-3">
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/60 font-medium">
              Explore
            </h3>
            <ul className="space-y-2.5 list-none p-0 m-0">
              <li>
                <UnderlineLink href="#rooms">Rooms</UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#dining">Dining</UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#banquets">Events</UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#offers">Offers</UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#gallery">Gallery</UnderlineLink>
              </li>
              <li>
                <UnderlineLink href="#location">Location</UnderlineLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Reservations & Concierge */}
          <div className="space-y-3">
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/60 font-medium">
              Reservations & Concierge
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-white/80 font-light">
              <p className="leading-relaxed text-white/80 m-0">
                Airport Road, Nedumbassery, Kochi, Kerala 683572
              </p>
              <div>
                <UnderlineLink href="tel:+914842612233" ariaLabel="Call telephone +91 (0) 484 261 2233">
                  +91 (0) 484 261 2233
                </UnderlineLink>
              </div>
              <div>
                <UnderlineLink href="mailto:reservations@airlinkcastle.com" ariaLabel="Send email to reservations@airlinkcastle.com">
                  reservations@airlinkcastle.com
                </UnderlineLink>
              </div>
              <div>
                <UnderlineLink
                  href="https://wa.me/919447054000?text=Hello%20Airlink%20Castle%20Reservations"
                  external
                  ariaLabel="Message reservations on WhatsApp"
                >
                  WhatsApp Concierge
                </UnderlineLink>
              </div>
            </div>
          </div>

          {/* Column 4: Stay in touch */}
          <div className="space-y-3">
            <h3 className="text-[0.75rem] uppercase tracking-[0.2em] text-white/60 font-medium">
              Stay in Touch
            </h3>
            <div>
              <p className="text-sm text-white/80 font-light leading-relaxed mb-3">
                Receive private invitations and seasonal privileges.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2.5">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="footer-newsletter-email"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterStatus === "error") setNewsletterStatus("idle");
                    }}
                    placeholder="Your email address"
                    required
                    aria-label="Email address for newsletter"
                    className="flex-1 min-h-[42px] rounded-lg bg-white/10 border border-white/20 px-3.5 py-2 text-sm text-white placeholder:text-white/45 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={newsletterStatus === "loading"}
                    className="min-h-[42px] rounded-lg bg-white hover:bg-[#E8E8E8] active:bg-[#E8E8E8] text-[#3C2816] px-5 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer shrink-0"
                  >
                    {newsletterStatus === "loading" ? "..." : "Subscribe"}
                  </button>
                </div>

                {/* Status announcement to avoid layout shift */}
                <div
                  id="footer-newsletter-status"
                  role="status"
                  aria-live="polite"
                  className="min-h-[18px] text-xs font-normal"
                >
                  {newsletterStatus === "success" && (
                    <span className="text-white">{newsletterMessage}</span>
                  )}
                  {newsletterStatus === "error" && (
                    <span className="text-[#E8E8E8]">{newsletterMessage}</span>
                  )}
                </div>

                <p className="text-xs text-white/60 font-light leading-relaxed m-0">
                  By subscribing you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-white/80 hover:text-white underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </form>

              {/* Social Links under Newsletter */}
              <div className="pt-2.5 flex flex-wrap items-center gap-5">
                <UnderlineLink href="https://instagram.com/airlinkcastle" external>
                  Instagram
                </UnderlineLink>
                <UnderlineLink href="https://facebook.com/airlinkcastle" external>
                  Facebook
                </UnderlineLink>
                <UnderlineLink href="https://youtube.com/@airlinkcastle" external>
                  YouTube
                </UnderlineLink>
              </div>
            </div>
          </div>
        </nav>

        {/* ── 2. OVERSIZED WORDMARK (BIG AND BLENDED) ──────────────────────── */}
        <div
          aria-hidden="true"
          className="w-full overflow-hidden select-none text-center pt-6 pb-6 sm:pt-8 sm:pb-8 border-t border-white/10"
        >
          <div
            style={{
              fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
            }}
            className="text-[clamp(2.5rem,10.5vw,10.5rem)] font-black uppercase text-white/[0.08] hover:text-white/[0.18] transition-colors duration-700 leading-none tracking-[-0.035em] whitespace-nowrap overflow-hidden inline-flex justify-center w-full"
          >
            {wordmarkChars.map((char, i) => (
              <span key={i} className="overflow-hidden inline-block">
                <motion.span
                  className="inline-block"
                  initial={prefersReduced ? { opacity: 0 } : { y: "100%" }}
                  whileInView={prefersReduced ? { opacity: 1 } : { y: "0%" }}
                  viewport={{ once: true }}
                  transition={
                    prefersReduced
                      ? { duration: 0.3 }
                      : {
                          duration: 0.8,
                          delay: i * 0.04,
                          ease: MOTION_EASE,
                        }
                  }
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 3. BOTTOM BAR ──────────────────────────────────────────────── */}
        <div className="border-t border-white/10 pt-6 pb-2">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-5 text-center lg:text-left">
            {/* Left: Live Kochi Time & Copyright & AIRIZZ Attribution */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-white/70 font-light">
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <span>Kochi,</span>
                <span className="font-mono text-white font-medium tracking-wider" suppressHydrationWarning>
                  {kochiTime || "14:30"}
                </span>
              </span>
              <span className="text-white/20">•</span>
              <span className="text-white/60">
                © {year} Hotel Airlink Castle.
              </span>
              <span className="text-white/20">•</span>
              <a
                href="https://airizz.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors underline underline-offset-4"
              >
                Powered by AIRIZZ
              </a>
            </div>

            {/* Centre: Legal Links & Small Credits Link */}
            <nav
              aria-label="Legal"
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-white/60 font-normal"
            >
              <Link
                href="/privacy"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/terms#guidelines"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Guest Guidelines
              </Link>
              <Link
                href="/credits"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Photo credits
              </Link>
            </nav>

            {/* Right: Round Back-to-Top Button */}
            <div className="flex items-center justify-center lg:justify-end">
              <MagneticBackToTop prefersReduced={prefersReduced} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
