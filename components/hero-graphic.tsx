"use client";

import { motion } from "framer-motion";

export function HeroGraphic() {
  return (
    <motion.div
      className="relative mx-auto flex h-[200px] w-full max-w-md items-center justify-center gap-16 md:h-[240px] md:gap-24"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Soft glow behind */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(8, 145, 178, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* WCAG / accessibility symbol - simple universal access icon */}
      <motion.div
        className="flex flex-shrink-0 items-center justify-center"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <svg
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-primary md:h-28 md:w-28"
          aria-hidden
        >
          <circle
            cx="40"
            cy="40"
            r="36"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="40" cy="32" r="6" fill="currentColor" />
          <path
            d="M40 42 L40 58 M28 50 L52 50 M32 66 L40 58 L48 66"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M14 32 L66 32"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </motion.div>

      {/* Code symbol - HTML angle brackets only */}
      <motion.div
        className="flex flex-shrink-0 items-center justify-center font-mono font-bold text-slate-700"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <span className="text-5xl tracking-tighter text-primary md:text-6xl" aria-hidden>
          {"</>"}
        </span>
      </motion.div>
    </motion.div>
  );
}
