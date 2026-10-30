"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Nav links (local – do not import from content.ts) ────────────────────── */
const NAV_ITEMS = [
  { label: "Rooms",  href: "#rooms"    },
  { label: "Dining", href: "#dining"   },
  { label: "Events", href: "#banquets" },
  { label: "Offers", href: "#offers"   },
] as const;

/* ─── Helpers ───────────────────────────────────────────────────────────────── */
function formatDate(d: Date): string {
  const yyyy = d.getFullYear();
  const mm   = String(d.getMonth() + 1).padStart(2, "0");
  const dd   = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/* ─── Navbar ────────────────────────────────────────────────────────────────── */
export default function Navbar() {
  const pathname = usePathname();
  const isHome   = pathname === "/";

  /* scroll state */
  const [scrolled,  setScrolled]  = useState(false);
  const [hidden,    setHidden]    = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const lastScrollY = useRef(0);
  const ticking    = useRef(false);

  /* Close menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 40);

        if (!menuOpen) {
          if (y > 240) {
            setHidden(y > lastScrollY.current);
          } else {
            setHidden(false);
          }
        }

        lastScrollY.current = y;
        ticking.current     = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  /* Lock body scroll while menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  /* Escape key closes menu */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  /* Solid style when scrolled, on non-home pages, or menu open */
  const isSolid = scrolled || !isHome || menuOpen;

  const toggleMenu = useCallback(() => setMenuOpen(prev => !prev), []);

  return (
    <>
      {/* ── Navbar ── */}
      <motion.header
        role="banner"
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
        style={{ height: "var(--nav-h)" }}
      >
        {/* Solid / frosted background layer */}
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-all duration-300 pointer-events-none"
          style={
            isSolid
              ? {
                  backgroundColor: "rgba(255,255,255,0.95)",
                  backdropFilter:  "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                }
              : {
                  backgroundColor: "transparent",
                }
          }
        />

        {/* Inner grid */}
        <div
          className="relative mx-auto flex h-full max-w-[1680px] items-center"
          style={{ padding: "0 clamp(20px,4vw,64px)" }}
        >
          {/* ── LEFT: desktop nav links (lg) / mobile menu button (<lg) ── */}
          <div className="flex flex-1 items-center justify-start">
            {/* Desktop Navigation Links */}
            <nav
              aria-label="Primary navigation"
              className="hidden items-center gap-7 lg:flex"
            >
              {NAV_ITEMS.map(item => {
                const isCurrent = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isCurrent ? "page" : undefined}
                    className="group relative flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
                    style={{
                      fontFamily:    "var(--font-inter), system-ui, sans-serif",
                      fontSize:      "13px",
                      fontWeight:    500,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      color:         "#3C2816",
                      transition:    "color 0.3s, opacity 0.2s",
                      textDecoration: "none",
                    }}
                  >
                    <span className="hover:opacity-70 transition-opacity">
                      {item.label}
                    </span>
                    <span
                      className="mt-0.5 block h-px origin-left bg-coffee"
                      style={{
                        transform:  isCurrent ? "scaleX(1)" : "scaleX(0)",
                        transition: "transform 0.2s ease",
                      }}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile: Menu toggle on LEFT (two thin lines that morph into an X) */}
            <button
              type="button"
              className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-overlay"
              onClick={toggleMenu}
              style={{ color: "#3C2816" }}
            >
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{
                  transform: menuOpen ? "translateY(3.5px) rotate(45deg)" : "none",
                }}
              />
              <span
                className="block h-px w-5 bg-current transition-all duration-300"
                style={{
                  transform: menuOpen ? "translateY(-3.5px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>

          {/* ── CENTER: logo mark ── */}
          <div className="flex justify-center flex-none">
            <Link
              href="/"
              aria-label="Airlink Castle, return to home page"
              className="relative flex items-center justify-center no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 py-1"
            >
              <div className="relative h-10 w-32 sm:h-12 sm:w-40 transition-all duration-300">
                <Image
                  src="/logo.png"
                  alt="Hotel Airlink Castle"
                  fill
                  priority
                  sizes="(max-width: 640px) 128px, 160px"
                  className="object-contain transition-all duration-300"
                />
              </div>
            </Link>
          </div>

          {/* ── RIGHT: Book button ── */}
          <div className="flex flex-1 items-center justify-end">
            {/* Desktop: Book a stay button */}
            <Link
              href="/booking"
              className="hidden rounded-lg px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-200 lg:block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 bg-coffee text-white hover:bg-walnut"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Book a stay
            </Link>

            {/* Mobile: small book button on the RIGHT */}
            <Link
              href="/booking"
              className="rounded-lg px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-all duration-200 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coffee focus-visible:ring-offset-2 bg-coffee text-white hover:bg-walnut"
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
            >
              Book
            </Link>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile fullscreen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            onClose={() => setMenuOpen(false)}
            pathname={pathname}
          />
        )}
      </AnimatePresence>
    </>
  );
}

/* ─── Mobile overlay ────────────────────────────────────────────────────────── */
function MobileMenu({
  onClose,
  pathname,
}: {
  onClose: () => void;
  pathname: string;
}) {
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  /* Focus first link on open */
  useEffect(() => {
    firstLinkRef.current?.focus();
  }, []);

  return (
    <motion.div
      id="mobile-nav-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className="fixed inset-0 z-40 flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      style={{ backgroundColor: "#3C2816" }}
    >
      {/* Links */}
      <nav
        aria-label="Mobile navigation"
        className="flex flex-1 flex-col items-start justify-center px-8"
        style={{ paddingTop: "var(--nav-h)" }}
      >
        {NAV_ITEMS.map((item, i) => {
          const isCurrent = pathname === item.href;
          return (
            <motion.div
              key={item.href}
              className="overflow-hidden"
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{   clipPath: "inset(0 0 100% 0)" }}
              transition={{
                duration: 0.6,
                ease:     [0.16, 1, 0.3, 1],
                delay:    0.05 + i * 0.07,
              }}
            >
              <Link
                ref={i === 0 ? firstLinkRef : undefined}
                href={item.href}
                onClick={onClose}
                aria-current={isCurrent ? "page" : undefined}
                className="block py-2 no-underline"
                style={{
                  fontFamily:    "var(--font-inter), system-ui, sans-serif",
                  fontSize:      "clamp(2rem, 9vw, 3rem)",
                  fontWeight:    800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  color:         "#FFFFFF",
                  lineHeight:    1.05,
                }}
              >
                {item.label}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Contact info at bottom */}
      <div
        className="px-8 pb-12"
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          fontSize:   "0.875rem",
          color:      "rgba(255,255,255,0.7)",
        }}
      >
        <a
          href="tel:+914842612233"
          className="block mb-1 no-underline"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          +91 (0) 484 261 2233
        </a>
        <a
          href="mailto:reservations@airlinkcastle.com"
          className="block no-underline"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          reservations@airlinkcastle.com
        </a>
      </div>
    </motion.div>
  );
}
