"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

const STATEMENT =
  "A calm retreat of private luxury and heritage warmth in Nedumbassery. Fifty-four rooms, five restaurants and a rooftop pool, crafted for tranquility and serene living.";

const IMAGES = [
  { src: "/img/about/01.webp", alt: "Hotel Airlink Castle exterior facade" },
  { src: "/img/about/02.webp", alt: "Rooftop swimming pool and sundeck" },
  { src: "/img/about/03.webp", alt: "Premium suite with carved woodwork" },
  { src: "/img/about/04.webp", alt: "Hotel Airlink Castle grand reception lobby" },
  { src: "/img/about/05.webp", alt: "Royal Dine multi-cuisine restaurant" },
  { src: "/img/about/06.webp", alt: "Regal grand banquet and conference hall" },
  { src: "/img/about/07.webp", alt: "Castle Bar executive cocktail lounge" },
  { src: "/img/about/08.webp", alt: "Lush tropical coconut grove gardens" },
  { src: "/img/about/09.webp", alt: "Guest room accommodation corridor" },
  { src: "/img/about/10.webp", alt: "Castle Cafe 24-hour breakfast service" },
];

const COL_A = IMAGES.filter((_, i) => i % 2 === 0);
const COL_B = IMAGES.filter((_, i) => i % 2 === 1);

/* ─── Word-by-word Scrubbed Text Reveal ────────────────────────────────────── */
function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const y = useTransform(progress, range, ["0.35em", "0em"]);

  return (
    <span className="mr-[0.26em] inline-block whitespace-nowrap">
      <motion.span style={{ opacity, y }} className="inline-block">
        {word}
      </motion.span>
    </span>
  );
}

/* ─── Image Item with Fallback ─────────────────────────────────────────────── */
function ImageItem({
  img,
  priority,
}: {
  img: { src: string; alt: string };
  priority: boolean;
}) {
  const [error, setError] = useState(false);

  return (
    <li className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-alabaster shadow-xs border border-coffee/10 transition-transform duration-300 hover:scale-[1.01]">
      {!error && (
        <Image
          src={img.src}
          alt={img.alt}
          fill
          quality={90}
          priority={priority}
          sizes="(max-width: 1024px) 45vw, 24vw"
          className="object-cover"
          onError={() => setError(true)}
        />
      )}
    </li>
  );
}

/* ─── Parallax Scrolling Column ────────────────────────────────────────────── */
function Column({
  images,
  progress,
  from,
  to,
  animate,
  isPriorityCol,
}: {
  images: { src: string; alt: string }[];
  progress: MotionValue<number>;
  from: string;
  to: string;
  animate: boolean;
  isPriorityCol: boolean;
}) {
  const y = useTransform(progress, [0, 1], [from, to]);

  return (
    <motion.ul
      style={animate ? { y } : undefined}
      className="m-0 flex list-none flex-col gap-4 lg:gap-6 p-0"
    >
      {images.map((img, i) => (
        <ImageItem
          key={img.src}
          img={img}
          priority={isPriorityCol && i === 0}
        />
      ))}
    </motion.ul>
  );
}

/* ─── About Section Component ──────────────────────────────────────────────── */
export default function About() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const animate = !reduce;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const words = STATEMENT.split(" ");
  const linkOpacity = useTransform(scrollYProgress, [0.58, 0.70], [0, 1]);
  const linkY = useTransform(scrollYProgress, [0.58, 0.70], [12, 0]);

  return (
    <section
      ref={ref}
      id="about"
      aria-label="About Hotel Airlink Castle"
      className={`relative bg-white text-coffee ${animate ? "h-[250vh]" : "py-16 lg:py-24"}`}
    >
      <div
        className={
          animate
            ? "sticky top-0 h-[100svh] overflow-hidden bg-white flex flex-col justify-center"
            : "relative bg-white"
        }
      >
        <div className="mx-auto flex h-full max-w-[1680px] w-full flex-col justify-center gap-6 px-[clamp(20px,4vw,64px)] pt-[calc(var(--nav-h)+16px)] pb-6 lg:grid lg:grid-cols-12 lg:items-center lg:gap-16 lg:pt-[var(--nav-h)] lg:pb-8">
          {/* Left: Statement & Text */}
          <div className="flex flex-col justify-center lg:col-span-5">
            {/* Accessible Statement */}
            <p
              style={{
                fontFamily: "var(--font-inter), system-ui, sans-serif",
              }}
              className="m-0 text-left text-[clamp(1.375rem,5vw,2rem)] font-bold tracking-tight leading-[1.15] text-coffee lg:text-[clamp(1.75rem,2.8vw,2.75rem)]"
            >
              <span className="sr-only">{STATEMENT}</span>
              <span aria-hidden="true">
                {animate
                  ? words.map((w, i) => {
                      const start = 0.04 + (i / words.length) * 0.45;
                      return (
                        <Word
                          key={`${w}-${i}`}
                          word={w}
                          progress={scrollYProgress}
                          range={[start, start + 0.08]}
                        />
                      );
                    })
                  : STATEMENT}
              </span>
            </p>

            {/* Discover Castle CTA */}
            <motion.div
              style={animate ? { opacity: linkOpacity, y: linkY } : undefined}
              className="mt-6 lg:mt-10"
            >
              <Link
                href="/about"
                style={{
                  fontFamily: "var(--font-inter), system-ui, sans-serif",
                }}
                className="group relative inline-flex items-center gap-2.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-coffee no-underline transition-colors hover:text-walnut focus-visible:outline-2 focus-visible:outline-coffee focus-visible:outline-offset-4"
              >
                Discover the castle
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
                <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 group-hover:scale-x-100" />
              </Link>
            </motion.div>
          </div>

          {/* Right: Two columns of portrait images moving in opposite directions */}
          <div className={`min-h-0 flex-1 lg:col-span-7 h-full max-h-[calc(100svh-var(--nav-h)-32px)] overflow-hidden rounded-none relative ${animate ? "" : ""}`}>
            <div className="grid grid-cols-2 items-start gap-4 lg:gap-6 h-full">
              <Column
                images={COL_A}
                progress={scrollYProgress}
                from="0%"
                to="-42%"
                animate={animate}
                isPriorityCol={true}
              />
              <Column
                images={COL_B}
                progress={scrollYProgress}
                from="-42%"
                to="0%"
                animate={animate}
                isPriorityCol={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
