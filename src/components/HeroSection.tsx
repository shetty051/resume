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
      className="relative min-h-[85vh] sm:min-h-[88vh] flex flex-col justify-between pt-16 sm:pt-24 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto select-none"
    >
      {/* TOP METADATA & AVAILABILITY RIBBON */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-3 text-xs font-mono border-b border-[var(--border-subtle)] pb-3 sm:pb-4 mb-4 sm:mb-8"
      >
        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="uppercase text-[9px] sm:text-[10px] font-bold tracking-widest text-[var(--text-primary)]">
            Available for new opportunities
          </span>
        </div>

        <p className="max-w-xs text-left sm:text-right text-[9px] sm:text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-semibold hidden sm:block">
          Creating intuitive digital experiences that connect users with value.
        </p>
      </motion.div>

      {/* ASYMMETRICAL EDITORIAL HERO GRID */}
      <div className="my-auto py-2 sm:py-6 flex flex-col-reverse lg:grid lg:grid-cols-12 gap-6 sm:gap-8 items-stretch lg:items-end">
        {/* LEFT COLUMN: OVERSIZED WORDMARK HEADINGS & ACTION CTA */}
        <div className="lg:col-span-8 space-y-6 sm:space-y-8 z-10 flex flex-col justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-3 sm:space-y-4"
          >
            <div className="inline-block text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[var(--accent)] border-l-2 border-l-[var(--accent)] pl-2.5 sm:pl-3">
              Software Developer / Full-Stack Engineer
            </div>

            <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[5.5rem] font-display font-extrabold tracking-tight text-[var(--text-primary)] leading-[0.95] sm:leading-[0.92] uppercase">
              Aakash B <br />
              <span className="text-[var(--accent)]">Shetty</span>
            </h1>
          </motion.div>

          {/* ACTION BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="pt-1 sm:pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md"
          >
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="gap-3 px-6 sm:px-8 py-3 text-xs font-mono font-bold tracking-widest w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <Send size={14} />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={() => setResumeModalOpen(true)}
              className="gap-3 px-6 sm:px-8 py-3 text-xs font-mono font-bold tracking-widest w-full sm:w-auto"
            >
              <FileText size={14} />
              <span>Download Resume</span>
            </Button>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: PORTRAIT ON MOBILE & DESKTOP */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-row lg:flex-col items-center justify-center lg:items-end lg:justify-end"
        >
          <div className="relative group w-44 h-56 sm:w-72 sm:h-96 border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-1.5 sm:p-2">
            <div className="relative w-full h-full overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-primary)]">
              <Image
                src="/profile.png"
                alt="Aakash Profile"
                fill
                sizes="(max-width: 768px) 176px, 288px"
                className="object-cover object-top filter contrast-[1.05] transition-all duration-300"
                priority
              />
            </div>

            {/* CORNER ACCENT BADGE */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 p-2 sm:p-3 bg-[var(--bg-primary)] border border-[var(--border-strong)] text-[var(--accent)] flex items-center gap-1.5 sm:gap-2 shadow-sm font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Full-Stack Craft</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* RESUME MODAL */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />

      {/* BOTTOM SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full flex justify-between items-center pt-6 border-t border-[var(--border-subtle)]"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
          Portfolio 2026 / Section 01
        </span>
        <a
          href="#about"
          className="group inline-flex items-center gap-2 text-[10px] uppercase font-mono tracking-widest text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors font-bold"
        >
          <span>Scroll to Explore</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={12} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
