"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  yOffset?: number;
}

export function Reveal({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  yOffset = 24,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RevealStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function RevealStagger({
  children,
  staggerDelay = 0.08,
  className = "",
}: RevealStaggerProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const revealChildVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

/**
 * Editorial masked line slide-up text reveal
 */
export function RevealText({
  text,
  tag = "h2",
  className = "",
  delay = 0,
}: {
  text: string;
  tag?: "h1" | "h2" | "h3" | "span" | "div";
  className?: string;
  delay?: number;
}) {
  const shouldReduceMotion = useReducedMotion();
  const Tag = tag as any;

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <span className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        initial={{ y: "105%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
      >
        <Tag className={className}>{text}</Tag>
      </motion.span>
    </span>
  );
}
