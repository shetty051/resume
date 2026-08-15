"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { skillsData, SkillCategory } from "@/config/studio";
import { Code, Layout, Server, Database, Terminal, Cpu } from "lucide-react";

// Map category iconName string to Lucide icon components
const CATEGORY_ICONS = {
  code: Code,
  layout: Layout,
  server: Server,
  database: Database,
  terminal: Terminal,
  cpu: Cpu,
};

export const SkillsSection: React.FC = () => {
  return (
    <SectionContainer
      id="skills"
      scriptAccent="Technical Mastery"
      subtitle="Proficiency & Tooling"
      title="Skills & Expertise"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category: SkillCategory, catIdx: number) => {
          const IconComponent = CATEGORY_ICONS[category.iconName] || Code;

          return (
            <Card
              key={category.title}
              hoverEffect={true}
              className="flex flex-col justify-between space-y-6"
            >
              {/* CATEGORY HEADER */}
              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent)]">
                  <IconComponent size={20} />
                </div>
                <h3 className="font-bold text-lg text-[var(--text-primary)] tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* SKILLS LIST WITH ANIMATED PROGRESS BARS */}
              <div className="space-y-5 flex-1">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name} className="space-y-2 group">
                    <div className="flex justify-between items-center text-xs font-semibold">
                      <span className="text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors">
                        {skill.level}%
                      </span>
                    </div>

                    {/* PROGRESS BAR CONTAINER */}
                    <div className="h-2 w-full bg-[var(--bg-secondary)] rounded-full overflow-hidden p-0.5 border border-[var(--border-subtle)]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-30px" }}
                        transition={{
                          duration: 1.6,
                          ease: [0.16, 1, 0.3, 1], // Smooth ease-out
                          delay: catIdx * 0.1 + skillIdx * 0.08,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent)] to-[var(--accent)] shadow-sm transition-all group-hover:brightness-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>
    </SectionContainer>
  );
};
