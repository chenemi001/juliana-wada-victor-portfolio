"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "WORK", href: "#projects" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="absolute inset-x-0 top-0 z-50 px-5 py-6 md:px-8 lg:px-10"
    >
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.25 }}
          onClick={() => setActive("HOME")}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="absolute h-3 w-3 rounded-full border border-blue-400/40 transition-all duration-500 group-hover:h-5 group-hover:w-5 group-hover:border-blue-400/70" />

            <span className="relative h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(37,99,255,0.9)]" />
          </span>

          <span className="text-[11px] font-medium tracking-[0.25em] text-white md:text-xs">
            JW
          </span>
        </motion.a>

        {/* NAVIGATION */}
        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className="group relative py-2 text-[9px] font-medium tracking-[0.18em] text-white/65 transition-colors duration-300 hover:text-white lg:text-[10px]"
            >
              {item.label}

              <motion.span
                initial={false}
                animate={{
                  width: active === item.label ? "100%" : "0%",
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-0 left-0 h-px bg-blue-400"
              />
            </a>
          ))}
        </div>

        {/* AVAILABILITY */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <motion.span
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 rounded-full bg-blue-400"
            />

            <span className="relative h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(37,99,255,0.8)]" />
          </span>

          <span className="hidden text-[9px] font-medium tracking-[0.18em] text-white/70 sm:block">
            AVAILABLE
          </span>
        </div>
      </nav>
    </motion.header>
  );
}