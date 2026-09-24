"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import {
  Activity,
  ArrowUpRight,
  Cloud,
  Container,
  GitBranch,
  Gauge,
  Server,
  Settings2,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const tools = [
  {
    name: "AWS",
    category: "Cloud",
    icon: Cloud,
  },
  {
    name: "Docker",
    category: "Containers",
    icon: Container,
  },
  {
    name: "Terraform",
    category: "Infrastructure",
    icon: Settings2,
  },
  {
    name: "CI / CD",
    category: "Automation",
    icon: GitBranch,
  },
  {
    name: "Linux",
    category: "Systems",
    icon: Terminal,
  },
  {
    name: "Nginx",
    category: "Networking",
    icon: Server,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Infrastructure",
    description:
      "Designing cloud infrastructure that is scalable, maintainable, and prepared for production workloads.",
    icon: Server,
  },
  {
    number: "02",
    title: "Automation",
    description:
      "Automating builds, testing, infrastructure provisioning, and deployments to reduce manual operations.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Reliability",
    description:
      "Building systems with observability, performance, resilience, and operational reliability in mind.",
    icon: Activity,
  },
];

export default function Devops() {
  return (
    <section
      id="devops"
      className="relative overflow-hidden bg-[#0A1622] text-white"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute left-[-250px] top-[-150px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(40,120,184,0.10),transparent)]" />

      <div className="pointer-events-none absolute right-[-250px] bottom-[-200px] h-[900px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(76,163,217,0.10),transparent)]" />

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
              DevOps & Infrastructure
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-5xl text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Ship faster.
              <br />
              <span className="text-[#4ca3d9]">Run better.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
              Building the infrastructure, automation, and operational
              foundations that allow software systems to move from development
              to production reliably.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            INFRASTRUCTURE VISUAL
        ====================================================== */}

        <div className="mt-24 grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

          {/* Animated infrastructure visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1 }}
            className="relative mx-auto h-[430px] w-full max-w-[500px]"
          >
            {/* Outer ring */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[min(350px,100%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2878b8]/20" />

            {/* Middle ring */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[min(260px,74%)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#4ca3d9]/20" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2878b8]/20 blur-3xl" />

            {/* Core */}
            <div
              style={{ "--to": 1.06 } as CSSProperties}
              className="breathe absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#4ca3d9]/40 bg-[#0D2233]"
            >
              <Cloud
                size={43}
                strokeWidth={1}
                className="text-[#69b9e8]"
              />
            </div>

            {/* Orbiting nodes */}
            <div
              style={{ "--spin": "12s" } as CSSProperties}
              className="orbit absolute left-1/2 top-1/2 aspect-square w-[min(350px,100%)] -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[#69b9e8] shadow-[0_0_25px_rgba(105,185,232,0.7)]" />

              <span className="absolute bottom-[12%] right-[7%] h-2.5 w-2.5 rounded-full bg-[#2878b8]" />
            </div>

            <div
              style={{ "--spin": "9s" } as CSSProperties}
              className="orbit orbit-reverse absolute left-1/2 top-1/2 aspect-square w-[min(260px,74%)] -translate-x-1/2 -translate-y-1/2"
            >
              <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white/70" />
            </div>
          </motion.div>

          {/* =================================================
              CAPABILITIES
          ================================================== */}

          <div className="space-y-4">
            {capabilities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{
                    opacity: 0,
                    x: 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
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
            TOOLS
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
          className="mt-24 border-y border-white/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {tools.map((tool) => {
              const Icon = tool.icon;

              return (
                <motion.div
                  key={tool.name}
                  whileHover={{
                    backgroundColor: "rgba(40,120,184,0.08)",
                  }}
                  className="group flex min-h-[150px] flex-col items-center justify-center gap-4 border-b border-r border-white/10 px-5 transition-colors duration-300 last:border-r-0"
                >
                  <Icon
                    size={23}
                    strokeWidth={1.3}
                    className="text-white/30 transition-colors duration-300 group-hover:text-[#69b9e8]"
                  />

                  <div className="text-center">
                    <p className="text-sm font-medium text-white/65 group-hover:text-white">
                      {tool.name}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-white/25">
                      {tool.category}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            RELIABILITY STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Gauge
              size={17}
              strokeWidth={1.4}
              className="text-[#4ca3d9]"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-white/35">
              Reliability by design
            </span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck
              size={17}
              strokeWidth={1.4}
              className="text-[#4ca3d9]"
            />

            <span className="text-xs uppercase tracking-[0.2em] text-white/35">
              Automation · Observability · Security
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}