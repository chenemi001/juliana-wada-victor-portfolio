"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  GitBranch,
  Layers3,
} from "lucide-react";

const projects = [
  {
    number: "01",
    category: "AI / SOFTWARE ENGINEERING",
    title: "LectureMind AI",
    description:
      "An intelligent lecture platform designed around real-time transcription, AI-powered summarization, and structured note generation.",
    technologies: ["Next.js", "TypeScript", "AI", "Supabase"],
    link: "#",
    github: "#",
    size: "large",
  },
  {
    number: "02",
    category: "DEVOPS / CLOUD",
    title: "Cloud Infrastructure",
    description:
      "Automated infrastructure and deployment workflows designed for scalable and reliable cloud environments.",
    technologies: ["AWS", "Docker", "Terraform", "CI/CD"],
    link: "#",
    github: "#",
    size: "small",
  },
  {
    number: "03",
    category: "SOFTWARE ENGINEERING",
    title: "Enterprise Systems",
    description:
      "Modern web applications focused on performance, maintainability, clean architecture, and exceptional user experiences.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
    size: "small",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#05070d] text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-250px] top-[20%] h-[500px] w-[500px] rounded-full bg-[#1769aa]/10 blur-[140px]" />

      <div className="pointer-events-none absolute right-[-200px] bottom-[-100px] h-[500px] w-[500px] rounded-full bg-[#2878b8]/10 blur-[140px]" />

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
              Selected Work
            </span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h2 className="text-[clamp(3.5rem,7vw,8rem)] font-medium leading-[0.82] tracking-[-0.065em]">
              Things I&apos;ve
              <br />
              <span className="text-[#2878b8]">built.</span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-white/45 sm:text-base">
              A selection of engineering work spanning intelligent systems,
              cloud infrastructure, and modern digital products.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <div className="mt-24 space-y-5">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
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
              className="group relative overflow-hidden border border-white/10 bg-white/[0.025]"
            >
              {/* Hover background */}
              <div className="absolute inset-0 origin-left scale-x-0 bg-[#2878b8]/[0.06] transition-transform duration-700 ease-out group-hover:scale-x-100" />

              <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[90px_1fr_auto] lg:items-center lg:p-12">
                {/* Number */}
                <div className="flex items-center gap-4 lg:block">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#2878b8]">
                    {project.number}
                  </span>

                  <div className="h-px w-10 bg-white/10 lg:mt-6 lg:w-12" />
                </div>

                {/* Main content */}
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <Layers3
                      size={15}
                      strokeWidth={1.5}
                      className="text-[#4ca3d9]"
                    />

                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl font-medium tracking-[-0.045em] text-white transition-colors duration-300 group-hover:text-[#7ac5ed] sm:text-4xl lg:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] uppercase tracking-[0.12em] text-white/45"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 lg:flex-col">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#2878b8] hover:bg-[#2878b8]"
                    aria-label={`View ${project.title}`}
                  >
                    <ExternalLink
                      size={17}
                      strokeWidth={1.5}
                    />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-[#2878b8] hover:bg-[#2878b8]"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <GitBranch
                      size={17}
                      strokeWidth={1.5}
                    />
                  </a>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#2878b8] transition-all duration-700 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-white/25">
            Software · Cloud · AI · Reliability
          </p>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-white"
          >
            Start a project

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#2878b8] group-hover:bg-[#2878b8]">
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}