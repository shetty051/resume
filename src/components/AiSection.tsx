"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { TextBlock } from "@/components/TextBlock";
import { aiProjectsData, AiProjectItem } from "@/config/studio";
import { ArrowUpRight, Award, Heart, Sparkles, BookOpen, Mic, Users } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  "writing-filmography": BookOpen,
  "public-speaking": Mic,
  "volunteering-contributions": Users,
};

export const AiSection: React.FC = () => {
  const router = useRouter();

  return (
    <SectionContainer
      id="ai"
      scriptAccent="The Secret Unveiled"
      subtitle="(Psst... tricked you with the navbar!)"
      title="Achievements & Interests"
    >
      {/* 3-COLUMN GRID DISPLAY */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aiProjectsData.map((item: AiProjectItem) => {
          const CategoryIcon = ICON_MAP[item.id] || Sparkles;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5 }}
            >
              <div
                onClick={() => router.push(`/ai/${item.id}`)}
                className="block h-full cursor-pointer group focus:outline-none"
              >
                <Card className="h-full flex flex-col justify-between overflow-hidden border-[var(--border-subtle)] hover:border-[var(--accent-indigo)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow-layered)] border-l-4 border-l-[var(--accent-indigo)] group-hover:-translate-y-1.5 group-hover:shadow-xl">
                  <div className="space-y-5">
                    {/* CATEGORY & ICON HEADER */}
                    <div className="flex justify-between items-center pb-3 border-b border-[var(--border-subtle)]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--accent-indigo)]">
                        {item.category}
                      </span>
                      <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-indigo)]">
                        <CategoryIcon size={16} />
                      </div>
                    </div>

                    {/* TITLE & TAGLINE */}
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-indigo)] transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                        <ArrowUpRight
                          size={18}
                          className="text-[var(--text-muted)] group-hover:text-[var(--accent-indigo)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                        />
                      </h3>
                      <TextBlock variant="script" className="text-sm">
                        {item.tagline}
                      </TextBlock>
                    </div>

                    {/* DESCRIPTION */}
                    <TextBlock variant="body" className="text-xs sm:text-sm text-[var(--text-secondary)]">
                      {item.description}
                    </TextBlock>

                    {/* ACHIEVEMENT HIGHLIGHT */}
                    <div className="p-3.5 rounded-xl bg-[var(--accent-indigo)]/10 border border-[var(--accent-indigo)]/20 space-y-1">
                      <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider text-[var(--accent-indigo)]">
                        <Award size={13} />
                        <span>Key Achievement</span>
                      </div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">
                        {item.achievement}
                      </p>
                    </div>

                    {/* INTEREST STATEMENT */}
                    <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)] font-medium pt-2">
                      <Heart size={14} className="text-[var(--accent)] mt-0.5 shrink-0" />
                      <span>
                        <strong className="text-[var(--text-primary)]">Core Interest:</strong> {item.interest}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
};
