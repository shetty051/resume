"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const SKILLS_LIST = [
  "C++",
  "Python",
  "C",
  "JavaScript / TypeScript",
  "React",
  "Next.js",
  "Vite",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "NestJS",
  "Flask",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "RDBMS Design",
];

export const SkillsSection: React.FC = () => {
  // Multiply list to create seamless infinite loop
  const duplicatedSkills = [...SKILLS_LIST, ...SKILLS_LIST];

  return (
    <section
      id="skills"
      className="py-16 md:py-24 border-y border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 overflow-hidden relative select-none"
    >

      {/* HEADER LABEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles size={16} className="text-[var(--accent)]" />
          <span className="text-xs uppercase tracking-[0.25em] text-[var(--text-muted)] font-semibold font-mono">
            Core Tooling & Technologies
          </span>
        </div>
        <div className="h-[1px] flex-1 max-w-xs bg-[var(--border-subtle)] hidden sm:block" />
      </div>

      {/* CONTINUOUS TICKER ROW 1 (MOVING LEFT) */}
      <div className="flex overflow-hidden py-4">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex items-center gap-6 sm:gap-10 shrink-0 whitespace-nowrap"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="group relative cursor-pointer px-5 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(139,62,47,0.25)] hover:-translate-y-0.5"
            >
              <span className="font-serif italic font-bold text-xl sm:text-2xl md:text-3xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {skill}
              </span>
              <span className="ml-6 sm:ml-10 text-[var(--accent)]/40 font-normal group-hover:text-[var(--accent)] transition-colors">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CONTINUOUS TICKER ROW 2 (MOVING RIGHT FOR DYNAMIC CONTRAST) */}
      <div className="flex overflow-hidden py-4 mt-2">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex items-center gap-6 sm:gap-10 shrink-0 whitespace-nowrap"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="group relative cursor-pointer px-5 py-2.5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(139,62,47,0.25)] hover:-translate-y-0.5"
            >
              <span className="font-serif italic font-medium text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                {skill}
              </span>
              <span className="ml-6 sm:ml-10 text-[var(--text-muted)]/40 font-normal group-hover:text-[var(--accent)] transition-colors">
                •
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
