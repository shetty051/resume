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
          className="flex items-center gap-4 sm:gap-8 shrink-0 whitespace-nowrap"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row1-${index}`}
              className="group relative cursor-pointer px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] transition-all duration-200 hover:border-[var(--accent)]"
            >
              <span className="font-display font-bold text-lg sm:text-xl md:text-2xl text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-200 uppercase tracking-tight">
                {skill}
              </span>
              <span className="ml-4 sm:ml-6 text-[var(--accent)] font-mono text-xs">
                /
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CONTINUOUS TICKER ROW 2 (MOVING RIGHT FOR DYNAMIC CONTRAST) */}
      <div className="flex overflow-hidden py-4 mt-1">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          className="flex items-center gap-4 sm:gap-8 shrink-0 whitespace-nowrap"
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`row2-${index}`}
              className="group relative cursor-pointer px-4 py-2 bg-[var(--bg-primary)] border border-[var(--border-subtle)] transition-all duration-200 hover:border-[var(--accent)]"
            >
              <span className="font-display font-medium text-base sm:text-lg md:text-xl text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-200 uppercase tracking-tight">
                {skill}
              </span>
              <span className="ml-4 sm:ml-6 text-[var(--text-muted)] font-mono text-xs">
                —
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
