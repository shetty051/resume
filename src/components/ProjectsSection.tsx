"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { SectionContainer } from "@/components/SectionContainer";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { TextBlock } from "@/components/TextBlock";
import { projectsData, ProjectItem } from "@/config/studio";
import { ArrowUpRight, GitBranch, Construction, CheckCircle2, Clock, Sparkles } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const router = useRouter();

  return (
    <SectionContainer
      id="projects"
      scriptAccent="Craft & Systems"
      subtitle="Curated Engineering Works"
      title="Projects"
    >
      {/* 3-COLUMN RESPONSIVE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.slice(0, 3).map((project: ProjectItem) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
          >
            <div
              onClick={() => router.push(`/projects/${project.id}`)}
              className="block h-full cursor-pointer group focus:outline-none"
            >
              <Card className="h-full flex flex-col justify-between overflow-hidden border-[var(--border-subtle)] hover:border-[var(--accent)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 shadow-[var(--shadow-layered)] group-hover:-translate-y-1.5 group-hover:shadow-xl">
                {/* CARD TOP CONTAINER */}
                <div className="space-y-5">
                  {/* SUBTLE PLACEHOLDER COVER HEADER */}
                  <div className="relative h-36 rounded-xl overflow-hidden bg-gradient-to-br from-[var(--bg-secondary)] via-[var(--bg-primary)] to-[var(--bg-secondary)] border border-[var(--border-subtle)] p-4 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Atmospheric Glow */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--accent)]/10 rounded-full blur-2xl group-hover:bg-[var(--accent)]/25 transition-colors" />

                    {/* STATUS & CATEGORY BADGES */}
                    <div className="flex justify-between items-start z-10">
                      <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full bg-[var(--bg-primary)]/90 backdrop-blur-md border border-[var(--border-subtle)] text-[var(--accent)] shadow-sm">
                        {project.category}
                      </span>

                      {/* STATUS BADGE */}
                      {project.status === "Under Construction" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-600 dark:text-amber-400">
                          <Construction size={12} />
                          <span>Under Construction</span>
                        </span>
                      ) : project.status === "In Development" ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-600 dark:text-indigo-400">
                          <Clock size={12} />
                          <span>In Development</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 size={12} />
                          <span>Completed</span>
                        </span>
                      )}
                    </div>

                    {/* THUMBNAIL LOGO ACCENT */}
                    <div className="flex justify-between items-end z-10">
                      <span className="text-xl font-bold font-serif italic text-[var(--text-primary)]">
                        {project.title.slice(0, 2)}
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-[var(--text-muted)]">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* TITLE & SUBTITLE */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors flex items-center justify-between">
                      <span>{project.title}</span>
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--text-muted)] group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      />
                    </h3>
                    <p className="text-xs font-semibold text-[var(--text-muted)]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* SUMMARY JUSTIFIED TEXT */}
                  <TextBlock variant="body" className="text-xs sm:text-sm text-[var(--text-secondary)]">
                    {project.summary}
                  </TextBlock>
                </div>

                {/* CARD BOTTOM / TECH STACK & EXTERNAL REPO LINK */}
                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
                  {/* TECH STACK TAGS */}
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GITHUB REPO LINK */}
                  {project.githubUrl && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                      }}
                      className="p-2 rounded-full border border-[var(--border-subtle)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors shrink-0 cursor-pointer"
                      title="View GitHub Repository"
                    >
                      <GitBranch size={15} />
                    </button>
                  )}
                </div>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VIEW MORE PROJECTS CENTERED CTA BUTTON */}
      <div className="mt-16 flex justify-center">
        <Button
          href="/projects/all"
          variant="secondary"
          size="lg"
          className="gap-2 px-8 py-3.5 text-sm font-semibold shadow-md hover:border-[var(--accent)] hover:text-[var(--accent)]"
        >
          <span>View More Projects</span>
          <ArrowUpRight size={16} />
        </Button>
      </div>
    </SectionContainer>
  );
};
