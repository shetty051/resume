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

      {/* ABOUT SECTION */}
      <SectionContainer
        id="about"
        scriptAccent="Human Touch & Technical Depth"
        subtitle="Developer Profile"
        title="About Me"
        className="bg-[var(--bg-secondary)]/30 rounded-3xl border border-[var(--border-subtle)] my-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <Card className="lg:col-span-8 flex flex-col justify-between space-y-6 bg-[var(--bg-card)]">
            <div className="space-y-4">
              <TextBlock variant="lead" className="text-lg md:text-xl font-medium text-[var(--text-primary)]">
                Hi, I&apos;m <span className="font-bold text-[var(--accent)]">Aakash B Shetty</span> — a software engineer who believes that great code should be fast, maintainable, and actually fun to use.
              </TextBlock>

              <TextBlock variant="body" className="text-sm md:text-base leading-relaxed">
                I spend my days architecting full-stack applications and experimenting with AI integrations. Whether I&apos;m building collaborative platforms like <span className="font-semibold text-[var(--text-primary)]">CollaboWrite</span> or crafting habit analytics engines like <span className="font-semibold text-[var(--text-primary)]">TrackMyHabits</span>, I focus on shipping end-to-end solutions that solve real human problems without unnecessary fluff.
              </TextBlock>

              <TextBlock variant="body" className="text-sm md:text-base leading-relaxed">
                My technical sweet spot spans C++, React, Next.js, Node.js, and RDBMS design. Beyond syntax and algorithms, I thrive in collaborative team environments where open dialogue, continuous learning, and thoughtful user experiences come together to create software that truly connects.
              </TextBlock>
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4">
              <div>
                <span className="text-xl md:text-2xl font-black text-[var(--text-primary)]">Full-Stack</span>
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">End-to-End Delivery</p>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-black text-[var(--text-primary)]">AI + UI</span>
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">Smart Integration</p>
              </div>
              <div>
                <span className="text-xl md:text-2xl font-black text-[var(--text-primary)]">Clean CS</span>
                <p className="text-[11px] uppercase tracking-wider text-[var(--text-muted)] font-semibold mt-1">Core Fundamentals</p>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-4 space-y-6 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-secondary)] flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-[var(--accent)]">
                <Code2 size={20} />
                <h3 className="font-bold text-lg text-[var(--text-primary)]">Core Highlights</h3>
              </div>

              <ul className="space-y-3 text-xs font-medium text-[var(--text-secondary)]">
                <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)]">
                  <span className="text-[var(--accent)] font-bold">⚡</span>
                  <span>Engineered production-ready apps like <strong>CollaboWrite</strong> &amp; <strong>TrackMyHabits</strong></span>
                </li>
                <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)]">
                  <span className="text-[var(--accent)] font-bold">🧠</span>
                  <span>Strong foundation in DSA (90%), RDBMS design (90%), and C++ (90%)</span>
                </li>
                <li className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg-primary)]/80 border border-[var(--border-subtle)]">
                  <span className="text-[var(--accent)] font-bold">🤝</span>
                  <span>Enthusiastic about cross-functional teamwork, code reviews &amp; modern UI craft</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <Button href="#skills" variant="ghost" size="sm" className="w-full justify-between">
                <span>View Skill Breakdown</span>
                <ArrowUpRight size={14} />
              </Button>
            </div>
          </Card>
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
