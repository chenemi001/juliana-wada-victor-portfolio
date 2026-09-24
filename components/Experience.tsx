"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Cloud,
  Code2,
  Server,
} from "lucide-react";

const experiences = [
  {
    year: "2024 — PRESENT",
    role: "Software Engineer",
    company: "Software Engineering",
    description:
      "Building modern software systems with a focus on scalable architecture, clean engineering practices, and reliable digital experiences.",
    skills: ["React", "Next.js", "TypeScript", "Node.js"],
    icon: Code2,
  },
  {
    year: "2023 — PRESENT",
    role: "DevOps / Cloud Engineer",
    company: "Cloud & Infrastructure",
    description:
      "Designing automated deployment workflows and cloud infrastructure with an emphasis on reliability, scalability, and operational efficiency.",
    skills: ["AWS", "Docker", "Terraform", "CI/CD"],
    icon: Cloud,
  },
  {
    year: "2023 — PRESENT",
    role: "AI Engineer",
    company: "Artificial Intelligence",
    description:
      "Exploring and integrating AI technologies into practical applications, automation workflows, and intelligent digital products.",
    skills: ["AI", "LLMs", "Python", "Automation"],
    icon: Server,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#070a12] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[25%] h-[500px] w-[500px] rounded-full bg-[#1769aa]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-[5%] h-[500px] w-[500px] rounded-full bg-[#2878b8]/10 blur-[140px]" />

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

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#2878b8]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#4ca3d9]">
              Experience
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Engineering
              <br />
              <span className="text-[#2878b8]">in practice.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
              A multidisciplinary journey across software engineering,
              infrastructure, cloud technologies, AI, and reliable systems.
            </p>
          </div>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative mt-24">
          {/* Timeline line */}
          <div className="absolute bottom-0 left-[19px] top-0 hidden w-px bg-white/10 md:block" />

          <div className="space-y-5">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;

              return (
                <motion.article
                  key={`${experience.role}-${experience.company}`}
                  initial={{
                    opacity: 0,
                    x: -40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative md:pl-16"
                >
                  {/* Timeline node */}
                  <div className="absolute left-[10px] top-10 hidden h-[19px] w-[19px] rounded-full border border-[#2878b8] bg-[#070a12] md:flex md:items-center md:justify-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#2878b8]" />
                  </div>

                  <div className="relative overflow-hidden border border-white/10 bg-white/[0.025] transition-colors duration-500 group-hover:border-[#2878b8]/40">
                    {/* Hover accent */}
                    <div className="absolute inset-y-0 left-0 w-0 bg-[#2878b8]/[0.04] transition-all duration-500 group-hover:w-full" />

                    <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-[190px_1fr_auto] lg:items-start lg:p-12">

                      {/* Date */}
                      <div>
                        <span className="text-[10px] font-semibold tracking-[0.2em] text-[#2878b8]">
                          {experience.year}
                        </span>

                        <div className="mt-5 hidden h-px w-12 bg-white/10 lg:block" />
                      </div>

                      {/* Content */}
                      <div>
                        <div className="mb-5 flex items-center gap-4">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                            <Icon
                              size={19}
                              strokeWidth={1.4}
                              className="text-[#4ca3d9]"
                            />
                          </div>

                          <div>
                            <p className="text-[9px] uppercase tracking-[0.22em] text-white/30">
                              Role
                            </p>

                            <p className="mt-1 text-xs text-white/50">
                              {experience.company}
                            </p>
                          </div>
                        </div>

                        <h3 className="text-2xl font-medium tracking-[-0.035em] text-white sm:text-3xl lg:text-4xl">
                          {experience.role}
                        </h3>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                          {experience.description}
                        </p>

                        {/* Skills */}
                        <div className="mt-7 flex flex-wrap gap-2">
                          {experience.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/45"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Icon / action */}
                      <div className="flex items-center justify-between lg:block">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#2878b8] group-hover:bg-[#2878b8]">
                          <ArrowUpRight
                            size={17}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover:rotate-45"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom line */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-[#2878b8]"
                      initial={{ width: 0 }}
                      whileInView={{ width: "0%" }}
                      whileHover={{ width: "100%" }}
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 border-t border-white/10 pt-8"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness
                size={17}
                strokeWidth={1.4}
                className="text-[#2878b8]"
              />

              <span className="text-xs uppercase tracking-[0.18em] text-white/35">
                Continuous learning
              </span>
            </div>

            <p className="max-w-xl text-sm leading-6 text-white/30 sm:text-right">
              Continuously expanding across emerging technologies while
              strengthening the engineering foundations that make systems
              dependable.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}