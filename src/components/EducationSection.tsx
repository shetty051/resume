"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { TextBlock } from "@/components/TextBlock";
import { educationData, EducationItem } from "@/config/studio";
import { GraduationCap, MapPin, Calendar, Award, BookOpen } from "lucide-react";

export const EducationSection: React.FC = () => {
  return (
    <SectionContainer
      id="education"
      scriptAccent="Academic Foundation"
      subtitle="Chronological Milestone"
      title="Education"
    >
      <div className="relative max-w-5xl mx-auto">
        {/* EDITORIAL TIMELINE VERTICAL SPINE */}
        <div className="absolute left-4 sm:left-8 top-4 bottom-4 w-[2px] bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-[var(--border-subtle)] hidden sm:block" />

        <div className="space-y-10 sm:space-y-12">
          {educationData.map((edu: EducationItem, idx: number) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative pl-0 sm:pl-16 group"
            >
              {/* TIMELINE NODE MARKER */}
              <div className="absolute left-4 sm:left-[23px] top-6 -translate-x-1/2 w-4 h-4 bg-[var(--bg-primary)] border-2 border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all hidden sm:block z-10" />

              {/* EDUCATION CARD */}
              <Card hoverEffect={true} className="space-y-6">
                {/* HEADER ROW */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-[var(--border-subtle)] pb-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono font-bold block">
                      {edu.institution}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-extrabold text-[var(--text-primary)]">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] font-semibold">
                      <Calendar size={13} className="text-[var(--accent)]" />
                      <span>{edu.period}</span>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-muted)]">
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* CGPA METRIC BADGE IF AVAILABLE */}
                {edu.cgpa && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-secondary)] border border-[var(--border-strong)] text-[var(--text-primary)] font-mono font-semibold text-xs">
                    <Award size={16} className="text-[var(--accent)]" />
                    <span>CGPA: <strong>{edu.cgpa}</strong> / 10.0</span>
                  </div>
                )}

                {/* DETAILS JUSTIFIED DESCRIPTION */}
                {edu.details && (
                  <TextBlock variant="body" className="text-sm sm:text-base leading-relaxed">
                    {edu.details}
                  </TextBlock>
                )}

                {/* RELEVANT COURSEWORK TAGS */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="pt-4 border-t border-[var(--border-subtle)] space-y-3">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-muted)]">
                      <BookOpen size={14} className="text-[var(--accent)]" />
                      <span>Relevant Coursework</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs font-mono font-semibold bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};
