"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    value: "5+",
    label: "Years of\nExperience",
  },
  {
    value: "20+",
    label: "Projects\nDelivered",
  },
  {
    value: "10+",
    label: "Technologies\nMastered",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white text-[#101010]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#e9f5ff] blur-3xl opacity-60" />

      <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#f4f8fb] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="grid items-center gap-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Label */}
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#2878b8]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2878b8]">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[650px] text-[clamp(3rem,6vw,6.5rem)] font-medium leading-[0.88] tracking-[-0.06em] text-[#111111]">
              Building
              <br />
              <span className="text-[#2878b8]">technology</span>
              <br />
              that matters.
            </h2>

            {/* Description */}
            <div className="mt-10 max-w-[600px]">
              <p className="text-base leading-7 text-neutral-600 sm:text-lg">
                I&apos;m Juliana Wada-Victor, a software engineer and IT
                specialist passionate about building reliable digital
                experiences, scalable systems, and intelligent solutions.
              </p>

              <p className="mt-5 text-base leading-7 text-neutral-500 sm:text-lg">
                My work sits at the intersection of software engineering,
                DevOps, cloud infrastructure, AI, and site reliability 
                turning complex technical challenges into solutions that are
                practical, resilient, and built to last.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-14 grid max-w-[620px] grid-cols-3 border-y border-black/10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className={`py-7 ${
                    index !== 0
                      ? "border-l border-black/10 pl-5 sm:pl-8"
                      : ""
                  }`}
                >
                  <div className="text-3xl font-medium tracking-[-0.04em] text-[#111111] sm:text-4xl">
                    {stat.value}
                  </div>

                  <div className="mt-2 whitespace-pre-line text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-neutral-500 sm:text-xs">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.25 }}
              className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#111111]"
            >
              Let&apos;s work together

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 transition-all duration-300 group-hover:border-[#2878b8] group-hover:bg-[#2878b8] group-hover:text-white">
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.8}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </motion.a>
          </motion.div>

          {/* =========================
              RIGHT — MOVING PHOTOS
          ========================== */}
          <div className="relative mx-auto h-[540px] w-full max-w-[620px] sm:h-[620px] lg:h-[680px]">

            {/* Decorative circle */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute right-[4%] top-[3%] h-32 w-32 rounded-full border border-[#2878b8]/30 sm:h-40 sm:w-40"
            />

            {/* Small blue dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[8%] top-[1%] z-20 h-3 w-3 rounded-full bg-[#2878b8]"
            />

            {/* =========================
                BACK PHOTO
            ========================== */}
            <motion.div
              initial={{ opacity: 0, rotate: -8 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                rotate: [-7, -3, -7],
                y: [0, -12, 0],
                x: [0, 5, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                },
                rotate: {
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute left-[4%] top-[10%] z-[1] h-[390px] w-[72%] overflow-hidden border-[10px] border-white bg-neutral-100 shadow-[0_30px_80px_rgba(0,0,0,0.15)] sm:h-[470px] sm:w-[68%] lg:h-[510px]"
            >
              <img
                src="/about-1.jpg"
                alt="Juliana Wada-Victor working"
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </motion.div>

            {/* =========================
                FRONT PHOTO
            ========================== */}
            <motion.div
              initial={{ opacity: 0, rotate: 7 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{
                rotate: [6, 11, 6],
                y: [0, 14, 0],
                x: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.8,
                  delay: 0.2,
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                y: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-[4%] right-[1%] z-[3] h-[360px] w-[67%] overflow-hidden border-[10px] border-white bg-neutral-100 shadow-[0_35px_90px_rgba(0,0,0,0.2)] sm:h-[430px] sm:w-[62%] lg:h-[470px]"
            >
              <img
                src="/about-2.jpg"
                alt="Juliana Wada-Victor"
                className="h-full w-full object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 h-1 w-14 bg-[#2878b8]" />
            </motion.div>

            {/* =========================
                ROTATING BADGE
            ========================== */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute bottom-[1%] left-[2%] z-[5] flex h-20 w-20 items-center justify-center rounded-full bg-[#2878b8] text-center text-[9px] font-semibold uppercase leading-4 tracking-[0.15em] text-white shadow-xl sm:h-24 sm:w-24 sm:text-[10px]"
            >
              <span className="-rotate-0">
                Engineer
                <br />
                •
                <br />
                Builder
              </span>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.7,
              }}
              className="absolute bottom-[8%] right-0 h-px w-[35%] origin-right bg-[#2878b8]/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}