"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  MapPin,
} from "lucide-react";

const socials = [
  {
    label: "LinkedIn",
    href: "#",
  },
  {
    label: "GitHub",
    href: "#",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070a12] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#2878b8]/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-[-250px] right-[-150px] h-[500px] w-[500px] rounded-full bg-[#4ca3d9]/[0.06] blur-[140px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">

        {/* =====================================================
            TOP LABEL
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4"
        >
          <span className="h-px w-12 bg-[#4ca3d9]" />

          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#69b9e8]">
            Get in touch
          </span>
        </motion.div>

        {/* =====================================================
            MAIN HEADING
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10"
        >
          <h2 className="max-w-6xl text-[clamp(3.5rem,8vw,9rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            Let&apos;s build
            <br />
            <span className="text-[#4ca3d9]">something.</span>
          </h2>
        </motion.div>

        {/* =====================================================
            DESCRIPTION
        ====================================================== */}

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.25,
          }}
          className="mt-10 max-w-2xl text-base leading-7 text-white/45 sm:text-lg"
        >
          Whether you&apos;re building a digital product, scaling
          infrastructure, exploring AI, or solving a complex engineering
          problem, I&apos;d love to hear about it.
        </motion.p>

        {/* =====================================================
            EMAIL CTA
        ====================================================== */}

        <motion.a
          href="mailto:hello@julianawadavor.com"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.35,
          }}
          whileHover={{ x: 6 }}
          className="group mt-12 inline-flex items-center gap-5"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#4ca3d9] group-hover:bg-[#2878b8]">
            <Mail
              size={19}
              strokeWidth={1.4}
            />
          </span>

          <span className="text-lg font-medium tracking-[-0.02em] text-white/80 transition-colors group-hover:text-white sm:text-xl">
            hello@julianawadavor.com
          </span>

          <ArrowUpRight
            size={19}
            strokeWidth={1.4}
            className="text-[#4ca3d9] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
          />
        </motion.a>

        {/* =====================================================
            INFORMATION GRID
        ====================================================== */}

        <div className="mt-24 grid border-y border-white/10 sm:grid-cols-2">

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="border-b border-white/10 py-8 sm:border-b-0 sm:border-r sm:pr-10"
          >
            <div className="flex items-center gap-3">
              <MapPin
                size={17}
                strokeWidth={1.4}
                className="text-[#4ca3d9]"
              />

              <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                Based in
              </span>
            </div>

            <p className="mt-4 text-lg text-white/70">
              United Kingdom
            </p>
          </motion.div>

          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            className="py-8 sm:pl-10"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ca3d9] opacity-60" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4ca3d9]" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.22em] text-white/30">
                Availability
              </span>
            </div>

            <p className="mt-4 text-lg text-white/70">
              Open to opportunities
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            SOCIALS
        ====================================================== */}

        <div className="mt-16 flex flex-col justify-between gap-8 sm:flex-row sm:items-center">

          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/25">
              Find me online
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-xs uppercase tracking-[0.15em] text-white/45 transition-all duration-300 hover:border-[#4ca3d9]/50 hover:bg-[#2878b8]/10 hover:text-white"
                >
                  {social.label}

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.4}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </a>
              ))}
            </div>
          </div>

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden sm:block"
          >
            <ArrowDownRight
              size={42}
              strokeWidth={0.8}
              className="text-white/10"
            />
          </motion.div>
        </div>

        {/* Bottom line */}
        <div className="mt-20 border-t border-white/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            Software Engineer · DevOps · AI · SRE
          </p>
        </div>
      </div>
    </section>
  );
}