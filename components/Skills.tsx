"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Container,
  Database,
  GitBranch,
  Gauge,
  Server,
  ShieldCheck,
  Terminal,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Software Engineering",
    description:
      "Designing and building scalable applications with modern engineering practices.",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Git",
    ],
  },
  {
    number: "02",
    title: "DevOps & Cloud",
    description:
      "Automating infrastructure, deployments, and cloud environments for reliable delivery.",
    icon: Cloud,
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "Nginx",
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    description:
      "Building intelligent systems and automating workflows with modern AI technologies.",
    icon: BrainCircuit,
    skills: [
      "Generative AI",
      "LLM Integration",
      "AI Automation",
      "Prompt Engineering",
      "AI APIs",
      "Python",
      "Data Processing",
      "Intelligent Systems",
    ],
  },
  {
    number: "04",
    title: "SRE & Infrastructure",
    description:
      "Improving system reliability, observability, performance, and operational resilience.",
    icon: Gauge,
    skills: [
      "Site Reliability",
      "Monitoring",
      "Observability",
      "System Design",
      "Load Balancing",
      "Security",
      "Performance",
      "Incident Response",
    ],
  },
];

const technologyIcons = [
  { icon: Code2, label: "Engineering" },
  { icon: Cloud, label: "Cloud" },
  { icon: Container, label: "Containers" },
  { icon: Database, label: "Databases" },
  { icon: GitBranch, label: "Version Control" },
  { icon: Server, label: "Infrastructure" },
  { icon: Terminal, label: "Linux" },
  { icon: Workflow, label: "Automation" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F3F6F8] text-[#101820]"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute right-[-200px] top-[-150px] h-[500px] w-[500px] rounded-full bg-[#2878b8]/[0.06] blur-[130px]" />

      <div className="pointer-events-none absolute left-[-200px] bottom-[-150px] h-[450px] w-[450px] rounded-full bg-[#2878b8]/[0.05] blur-[120px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,30,45,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15,30,45,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 sm:px-10 md:py-32 lg:px-16 lg:py-40">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-12 bg-[#2878b8]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2878b8]">
              Expertise
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
            <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em] text-[#101820]">
              Technical
              <br />
              <span className="text-[#2878b8]">capabilities.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#101820]/55 sm:text-base">
              A multidisciplinary engineering toolkit spanning software,
              infrastructure, cloud platforms, artificial intelligence, and
              reliability engineering.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            TECHNOLOGY STRIP
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-20 grid grid-cols-2 border-y border-[#101820]/10 sm:grid-cols-4 lg:grid-cols-8"
        >
          {technologyIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                whileHover={{
                  backgroundColor: "rgba(40,120,184,0.06)",
                }}
                className={`group flex min-h-[110px] flex-col items-center justify-center gap-3 border-[#101820]/10 px-3 transition-colors duration-300 ${
                  index % 2 !== 1 ? "border-r" : ""
                } sm:border-r lg:border-b-0 lg:last:border-r-0`}
              >
                <Icon
                  size={20}
                  strokeWidth={1.4}
                  className="text-[#2878b8]/60 transition-colors duration-300 group-hover:text-[#2878b8]"
                />

                <span className="text-center text-[9px] font-medium uppercase tracking-[0.15em] text-[#101820]/40 transition-colors duration-300 group-hover:text-[#101820]/70">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* =====================================================
            SKILL GROUPS
        ====================================================== */}

        <div className="mt-24">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative border-t border-[#101820]/10 py-10 lg:py-14"
              >
                <div className="grid gap-8 lg:grid-cols-[100px_0.9fr_1.1fr] lg:items-start">

                  {/* Number */}
                  <div className="flex items-center gap-4 lg:block">
                    <span className="text-xs font-medium tracking-[0.2em] text-[#2878b8]">
                      {group.number}
                    </span>

                    <div className="h-px w-10 bg-[#101820]/10 lg:mt-6 lg:w-12" />
                  </div>

                  {/* Title */}
                  <div>
                    <div className="mb-5 flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#101820]/10 bg-white/60">
                        <Icon
                          size={20}
                          strokeWidth={1.4}
                          className="text-[#2878b8]"
                        />
                      </div>

                      <span className="text-[10px] uppercase tracking-[0.22em] text-[#101820]/35">
                        Discipline
                      </span>
                    </div>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#101820] sm:text-4xl lg:text-5xl">
                      {group.title}
                    </h3>

                    <p className="mt-5 max-w-md text-sm leading-7 text-[#101820]/50">
                      {group.description}
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 lg:pt-16">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: skillIndex * 0.04,
                        }}
                        whileHover={{
                          y: -3,
                          borderColor: "rgba(40,120,184,0.45)",
                          backgroundColor: "rgba(40,120,184,0.06)",
                        }}
                        className="cursor-default rounded-full border border-[#101820]/10 bg-white/40 px-4 py-2.5 text-xs text-[#101820]/55 transition-colors duration-300 hover:text-[#101820]"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-[#2878b8] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-[#101820]/10 pt-10"
        >
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-[#2878b8]">
                Engineering mindset
              </p>

              <h3 className="mt-4 max-w-3xl text-2xl font-light leading-tight tracking-[-0.03em] text-[#101820]/80 sm:text-3xl">
                Build it well.
                <span className="text-[#101820]/30"> Automate it.</span>
                <br />
                <span className="text-[#101820]/30">Observe it.</span>{" "}
                <span className="text-[#101820]">Make it reliable.</span>
              </h3>
            </div>

            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[#101820]/35">
              <ShieldCheck
                size={16}
                className="text-[#2878b8]"
              />
              Reliability first
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}