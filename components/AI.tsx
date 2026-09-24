"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Network,
  Sparkles,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Generative AI",
    description:
      "Integrating modern language models into applications to create intelligent and useful digital experiences.",
    icon: BrainCircuit,
  },
  {
    number: "02",
    title: "AI Automation",
    description:
      "Using AI-driven workflows to automate repetitive processes and improve how systems operate.",
    icon: Cpu,
  },
  {
    number: "03",
    title: "Intelligent Systems",
    description:
      "Designing applications where AI works alongside software engineering, data, and infrastructure.",
    icon: Network,
  },
];

export default function AI() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-[#071521] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[-150px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(40,120,184,0.10),transparent)]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-[-200px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(76,163,217,0.10),transparent)]" />

      {/* Grid */}
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
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#4ca3d9]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#69b9e8]">
              Artificial Intelligence
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Engineering
              <br />
              <span className="text-[#4ca3d9]">intelligence.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/50 sm:text-base">
              Exploring the intersection of artificial intelligence, software
              engineering, automation, and real-world problem solving.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            AI VISUAL / ORBIT
        ====================================================== */}

        <div className="mt-24 grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">

          {/* Animated visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative mx-auto h-[400px] w-full max-w-[500px]"
          >
            {/* Outer orbit */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[min(320px,100%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4ca3d9]/20" />

            {/* Middle orbit */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[min(230px,72%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2878b8]/30" />

            {/* Inner glow */}
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2878b8]/20 blur-2xl" />

            {/* Core */}
            <div
              style={{ "--to": 1.08 } as CSSProperties}
              className="breathe absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4ca3d9]/40 bg-[#0b1d2c]"
            >
              <BrainCircuit
                size={42}
                strokeWidth={1}
                className="text-[#69b9e8]"
              />
            </div>

            {/* Orbiting nodes */}
            <div
              style={{ "--spin": "12s" } as CSSProperties}
              className="orbit absolute left-1/2 top-1/2 aspect-square w-[min(320px,100%)] -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#69b9e8] shadow-[0_0_25px_rgba(105,185,232,0.7)]" />

              <span className="absolute bottom-[15%] right-[7%] h-2.5 w-2.5 rounded-full bg-[#2878b8]" />
            </div>

            <div
              style={{ "--spin": "9s" } as CSSProperties}
              className="orbit orbit-reverse absolute left-1/2 top-1/2 aspect-square w-[min(230px,72%)] -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/70" />
            </div>
          </motion.div>

          {/* AI capabilities */}
          <div className="space-y-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.12,
                  }}
                  className="group relative overflow-hidden border border-white/10 bg-white/[0.025] p-7 transition-colors duration-500 hover:border-[#2878b8]/50 sm:p-9"
                >
                  <div className="absolute inset-0 origin-left scale-x-0 bg-[#2878b8]/10 transition-transform duration-500 ease-out group-hover:scale-x-100" />

                  <div className="relative flex gap-6">
                    <span className="pt-1 text-xs tracking-[0.2em] text-[#2878b8]">
                      {item.number}
                    </span>

                    <div className="flex-1">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10">
                          <Icon
                            size={19}
                            strokeWidth={1.4}
                            className="text-[#69b9e8]"
                          />
                        </div>

                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.3}
                          className="text-white/20 transition-all duration-300 group-hover:rotate-45 group-hover:text-[#69b9e8]"
                        />
                      </div>

                      <h3 className="text-2xl font-medium tracking-[-0.03em]">
                        {item.title}
                      </h3>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-white/40">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Sparkles
                size={16}
                className="text-[#4ca3d9]"
              />

              <span className="text-xs uppercase tracking-[0.2em] text-white/35">
                AI × Engineering
              </span>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/30 sm:text-right">
              Building technology where intelligent systems become useful,
              dependable products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}