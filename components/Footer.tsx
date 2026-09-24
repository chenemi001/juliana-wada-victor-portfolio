"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Mail,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#05070d] text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-[-250px] left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#2878b8]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">

        {/* ================================
            MAIN CTA
        ================================= */}

        <div className="border-b border-white/10 py-24 md:py-32 lg:py-40">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-[#69b9e8]">
                Have a project in mind?
              </p>

              <h2 className="max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
                Let&apos;s build
                <br />
                <span className="text-[#4ca3d9]">
                  what&apos;s next.
                </span>
              </h2>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              whileHover={{ scale: 1.04 }}
              className="group relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border border-[#4ca3d9]/50 bg-[#2878b8]/10 transition-colors duration-300 hover:bg-[#2878b8]/20 sm:h-36 sm:w-36"
            >
              <div className="flex flex-col items-center gap-2">
                <Mail
                  size={22}
                  strokeWidth={1.3}
                  className="text-[#69b9e8]"
                />

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/60">
                  Contact
                </span>
              </div>

              <ArrowUpRight
                size={16}
                strokeWidth={1.3}
                className="absolute right-5 top-5 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </motion.a>
          </div>
        </div>

        {/* ================================
            FOOTER CONTENT
        ================================= */}

        <div className="grid gap-12 py-14 md:grid-cols-[1fr_auto_auto] md:items-start">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl font-medium tracking-[-0.04em]">
              Juliana
              <span className="text-[#4ca3d9]">.</span>
            </p>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
              Software Engineer · IT Specialist · DevOps · AI · SRE
            </p>
          </motion.div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/25">
              Navigate
            </p>

            <div className="flex flex-col gap-3">
              {[
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["DevOps", "#devops"],
                ["AI", "#ai"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="group flex w-fit items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-white"
                >
                  {label}

                  <ArrowUpRight
                    size={12}
                    strokeWidth={1.3}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.25em] text-white/25">
              Connect
            </p>

            <div className="flex flex-col gap-3">

              <a
                href="#"
                className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-[#69b9e8]"
              >
                LinkedIn

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#"
                className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-[#69b9e8]"
              >
                GitHub

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="mailto:hello@julianawadavor.com"
                className="group flex items-center gap-2 text-sm text-white/45 transition-colors duration-300 hover:text-[#69b9e8]"
              >
                Email

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

            </div>
          </div>
        </div>

        {/* ================================
            BOTTOM BAR
        ================================= */}

        <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-[10px] uppercase tracking-[0.18em] text-white/25 sm:flex-row sm:items-center sm:justify-between">

          <p>
            © {new Date().getFullYear()} Juliana Wada-Victor
          </p>

          <p>
            Built with precision & curiosity
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 self-start transition-colors duration-300 hover:text-white sm:self-auto"
          >
            Back to top

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#4ca3d9]/50">
              <ArrowUp
                size={13}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}