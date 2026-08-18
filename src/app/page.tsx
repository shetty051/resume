"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSection } from "@/components/HeroSection";
import { SkillsSection } from "@/components/SkillsSection";
import { EducationSection } from "@/components/EducationSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AiSection } from "@/components/AiSection";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { TextBlock } from "@/components/TextBlock";
import { studioConfig, projectsData, aiProjectsData, experienceData, educationData } from "@/config/studio";
import { ArrowUpRight, Code2, Briefcase, GraduationCap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT SECTION - CONFIDENT ASYMMETRICAL LAYOUT */}
      <SectionContainer
        id="about"
        scriptAccent="Human Touch & Technical Depth"
        subtitle="Developer Profile"
        title="About Me"
        className="my-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[var(--border-subtle)] pt-8">
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <TextBlock variant="lead" className="text-xl md:text-2xl font-display font-bold text-[var(--text-primary)] leading-tight">
                Hi, I&apos;m <span className="text-[var(--accent)] underline decoration-2 underline-offset-4">Aakash B Shetty</span> — a software engineer who believes that great code should be fast, maintainable, and actually fun to use.
              </TextBlock>

              <TextBlock variant="body" className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)]">
                I spend my days architecting full-stack applications and experimenting with AI integrations. Whether I&apos;m building collaborative platforms like <strong className="text-[var(--text-primary)]">CollaboWrite</strong> or crafting habit analytics engines like <strong className="text-[var(--text-primary)]">TrackMyHabits</strong>, I focus on shipping end-to-end solutions that solve real human problems without unnecessary fluff.
              </TextBlock>

              <TextBlock variant="body" className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)]">
                My technical sweet spot spans C++, React, Next.js, Node.js, and RDBMS design. Beyond syntax and algorithms, I thrive in collaborative team environments where open dialogue, continuous learning, and thoughtful user experiences come together to create software that truly connects.
              </TextBlock>
            </div>

            {/* METRIC NUMERAL HORIZONTAL ROW */}
            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-2xl md:text-3xl font-display font-extrabold text-[var(--text-primary)]">01.</span>
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1">Full-Stack Delivery</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-extrabold text-[var(--text-primary)]">02.</span>
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1">AI + UI Engineering</p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-display font-extrabold text-[var(--text-primary)]">03.</span>
                <p className="text-[10px] uppercase tracking-widest text-[var(--text-muted)] font-bold mt-1">CS Fundamentals</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[var(--border-strong)] bg-[var(--bg-secondary)] p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                <Code2 size={18} className="text-[var(--accent)]" />
                <h3 className="font-display font-bold text-lg text-[var(--text-primary)] uppercase tracking-tight">Core Highlights</h3>
              </div>

              <ul className="space-y-4 text-xs font-mono text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] font-bold">—</span>
                  <span>Engineered production-ready apps like <strong>CollaboWrite</strong> &amp; <strong>TrackMyHabits</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] font-bold">—</span>
                  <span>Strong foundation in DSA, RDBMS design, and C++</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] font-bold">—</span>
                  <span>Curious about rapidly evolving AI tech</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--accent)] font-bold">—</span>
                  <span>Enthusiastic about cross-functional teamwork, code reviews &amp; modern UI craft</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <Button
                href="#skills"
                variant="ghost"
                size="sm"
                className="w-full justify-between"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById("skills");
                  if (el) {
                    const top = el.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <span>View Skill Breakdown</span>
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* SKILLS SECTION */}
      <SkillsSection />

      {/* EDUCATION SECTION */}
      <EducationSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* ACHIEVEMENTS & INTERESTS SECTION */}
      <AiSection />
    </div>
  );
}
