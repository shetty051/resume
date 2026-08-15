"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { TextBlock } from "@/components/TextBlock";
import { studioConfig } from "@/config/studio";
import { ArrowDown, Sparkles, Send, FileText } from "lucide-react";
import { ResumeModal } from "@/components/ResumeModal";

// Floating Skill badge definition
interface FloatingSkill {
  name: string;
  top: string;
  left: string;
  duration: number;
  yOffset: number;
  delay: number;
}

const FLOATING_SKILLS: FloatingSkill[] = [
  { name: "React", top: "24%", left: "12%", duration: 4.2, yOffset: -16, delay: 0 },
  { name: "Next.js", top: "28%", left: "80%", duration: 3.8, yOffset: 14, delay: 0.5 },
  { name: "Node.js", top: "64%", left: "8%", duration: 4.5, yOffset: -12, delay: 1.2 },
  { name: "Python", top: "74%", left: "84%", duration: 3.6, yOffset: 18, delay: 0.8 },
  { name: "JavaScript", top: "20%", left: "65%", duration: 4.0, yOffset: -14, delay: 1.5 },
  { name: "MongoDB", top: "84%", left: "22%", duration: 4.8, yOffset: -15, delay: 0.3 },
  { name: "Express", top: "80%", left: "68%", duration: 3.9, yOffset: 12, delay: 1.0 },
];

export const HeroSection: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = React.useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* ATMOSPHERIC BACKGROUND ACCENTS */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[var(--accent)]/12 rounded-full blur-[160px] -z-20" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] bg-[var(--accent-indigo)]/15 rounded-full blur-[140px] -z-20" />

      {/* FLOATING SKILL LOGOS (BLURRED BACKGROUND ACCENTS) */}
      <div className="pointer-events-none absolute inset-0 hidden md:block -z-10 overflow-hidden">
        {FLOATING_SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            style={{ top: skill.top, left: skill.left }}
            animate={{
              y: [0, skill.yOffset, 0],
              opacity: [0.35, 0.65, 0.35],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: skill.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: skill.delay,
            }}
            className="absolute px-4 py-2 rounded-2xl bg-[var(--bg-card)]/60 backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-soft)] text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-secondary)] filter blur-[0.6px] transition-all"
          >
            <span className="text-[var(--accent)] mr-1">#</span>
            {skill.name}
          </motion.div>
        ))}
      </div>

      {/* TOP SUB-HEADER BAR */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-medium text-[var(--text-muted)] border-b border-[var(--border-subtle)] pb-6 -mt-4 mb-4 sm:-mt-6 sm:mb-6"
      >
        {/* Left Side Refined Tag */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="uppercase tracking-[0.18em] text-[11px] font-semibold text-[var(--text-primary)]">
            Available for new opportunities
          </span>
        </div>

        {/* Right Side Metadata */}
        <p className="max-w-xs text-left sm:text-right text-[11px] uppercase tracking-wider text-[var(--text-secondary)] leading-relaxed font-mono">
          Passionate about creating intuitive digital experiences that connect users with value.
        </p>
      </motion.div>

      {/* MAIN HERO CONTENT & CENTERED HEADINGS */}
      <div className="my-auto py-12 flex flex-col items-center text-center space-y-8 z-10">
        {/* PROFILE PICTURE WITH THEME LAYER BLENDING */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          {/* Subtle Outer Glow & Inertial Float */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1.5 bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent shadow-[var(--shadow-layered)]"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
              <Image
                src="/profile.png"
                alt="Aakash Profile"
                fill
                sizes="(max-width: 768px) 144px, 176px"
                className="object-cover object-top filter contrast-[1.05] saturate-[1.08] transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Color Blend Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/75 via-transparent to-[var(--accent)]/10 mix-blend-overlay" />
            </div>
          </motion.div>

          <span className="absolute bottom-1 right-1 p-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] text-[var(--accent)] shadow-md">
            <Sparkles size={16} />
          </span>
        </motion.div>

        {/* HEADINGS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3 max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-[var(--text-primary)] leading-[1.05]">
            Aakash B Shetty
          </h1>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[var(--accent)] tracking-normal font-normal">
            Software Developer
          </p>
        </motion.div>

        {/* GET IN TOUCH & RESUME BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="pt-4 flex flex-col sm:flex-row items-center gap-4"
        >
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="gap-2.5 px-9 py-4 text-sm font-semibold tracking-wider shadow-lg hover:shadow-xl hover:bg-[var(--accent)] transition-all duration-300 w-full sm:w-auto"
          >
            <span>Get in Touch</span>
            <Send size={16} />
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => setResumeModalOpen(true)}
            className="gap-2.5 px-9 py-4 text-sm font-semibold tracking-wider shadow-md hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 w-full sm:w-auto"
          >
            <FileText size={16} />
            <span>Download Resume</span>
          </Button>
        </motion.div>

        {/* RESUME MODAL */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="w-full flex justify-center items-center pt-6 border-t border-[var(--border-subtle)]"
      >
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors font-semibold"
        >
          <span>Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
